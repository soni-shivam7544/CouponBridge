import './Main.css';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAlert } from '../../hooks/useAlert';
import axios from 'axios';

const Main = () => {
    const navigate = useNavigate();
    const { showAlert } = useAlert();
    const [formData, setFormData ] = useState({
            role: 'customer',
            name: '',
            email: '',
            password: ''
    });

    const handleChange = (e) => {

        if(e.target.id === 'customer') {
            setFormData ((data) => {
                return { ...data, role: 'customer'};
            })
        }
        else if (e.target.id === 'provider'){
            setFormData ((data) => {
                return { ...data,  role: 'provider'};
            })
        }
        else setFormData ((data) => {
            return { ...data, [e.target.name]: e.target.value};
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(formData.role === 'customer'){
            axios.post('http://localhost:5050/cb/v1/api/customers/signup', formData)
            .then ( res=> {
                console.log(res.data);
                showAlert({type:'success', message: `${res.data.message}`});
                navigate('/login');
            })
            .catch( err => {
                console.log(err.response);
                showAlert({ type: 'error', message: `${err.response.data.error}`});

            });
        }
        else axios.post('http://localhost:5050/cb/v1/api/providers/signup', formData)
            .then ( res=> {
                console.log(res.data);
                showAlert({type:'success', message: `${res.data.message}`})
                navigate('/login');
            })
            .catch( err => {
                console.log(err.response);
                showAlert({ type: 'error', message: `${err.response.data.error}`});
            });

        setFormData({
            role: 'customer',
            name: '',
            email: '',
            password: ''
        });
    }
    
  return (
    <>
        <div id="auth-main">
            <div id="auth-left" className='text' style={{color:'var(--color-surface-dark-text)'}}>
                <div id="auth-left-title" className='section-heading' style={{color:'var(--color-surface-dark-text)'}}>Join the fastest growing coupon marketplace</div>
                <div id="auth-left-subtitle" className='sub-heading' style={{color:'var(--color-surface-dark-text)'}}>Start saving or earning today. Create your free account in seconds.</div>
                <div id="auth-left-sections">
                    <div className="auth-left-section">
                        <ShoppingBagIcon sx={{marginBottom: '1rem'}}/>
                        <div className="auth-left-section-title heading" style={{marginBottom: '1rem', color:'var(--color-surface-dark-text)'}}>For Buyers</div>
            
                        <p style={{marginBottom: '0.5rem'}}>Access to verified coupons</p>
                        <p style={{marginBottom: '0.5rem'}}>Secure code delivery</p>
                        <p style={{marginBottom: '0.5rem'}}>buyer protection</p>
                        <p style={{marginBottom: '0.5rem'}}>Save on favourite purchase</p>
                       
                    </div>
                    <div className="auth-left-section">
                        <StorefrontIcon sx={{marginBottom: '1rem'}}/>
                        <div className="auth-left-section-title heading" style={{marginBottom: '1rem', color:'var(--color-surface-dark-text)'}}>For Sellers</div>
                        
                        <p style={{marginBottom: '0.5rem'}}>Access to verified coupons</p>
                        <p style={{marginBottom: '0.5rem'}}>Secure code delivery</p>
                        <p style={{marginBottom: '0.5rem'}}>buyer protection</p>
                        <p style={{marginBottom: '0.5rem'}}>Save on favourite purchase</p>
                    
                    </div>
                </div>
            </div>
            <div id="auth-right">
                <div id="auth-right-header">
                    <div id="auth-right-title" className='lg-heading' style={{marginBottom:'0.5rem'}}>Create your account</div>
                    <div id="auth-right-subtitle" className='sub-heading'>Choose how you want to use CouponHub</div>
                </div>
                
                <form id='form-section' className='text' onSubmit={ handleSubmit }>
                    <legend  style={{marginBottom:'0.5rem', color:'var(--color-text-primary)'}}>I want to:</legend>

                    <div className="register-choice">
                        <input type="radio" id="customer" name="role"  checked={ formData.role === 'customer'} onChange={ handleChange } style={{marginBottom:'1rem', marginLeft:'1rem'}}/>
                        <label htmlFor="customer" style={ { cursor: 'pointer'}} className={`radio ${formData.role === 'customer' && 'register-choice-active'}`}>Buy Coupons</label>

                        <input type="radio" id="provider" name="role" checked={ formData.role === 'provider'} onChange={ handleChange } style={{marginBottom:'1rem', marginLeft:'1rem'}}/>
                        <label htmlFor="provider" style={ { cursor: 'pointer'}} className={`radio ${formData.role === 'provider' && 'register-choice-active'}`}>Sell Coupons</label>

                    </div>

                    <label htmlFor="name" >Full Name</label>
                    <input type="text" id="name" name="name"  value={formData.name} onChange={ handleChange } className='input' required/>
                    

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className='input' name="email"  value={formData.email} onChange={ handleChange } required/>

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className='input' name="password" value={formData.password} onChange={ handleChange } required/>

                   <Button variant="contained" type='submit' sx= {{ width: '100%', borderRadius: '0.5rem', margin: '1rem 0rem 1rem'}}>Create Account</Button>
                </form>

                <div id="auth-right-footer" className='text'>
                    <span>Already have an account? </span>
                    <Button variant="text" onClick={ ()=> navigate('/login')}>Login here</Button>
                </div>

            </div>
        </div>
    </>
  )
}

export default Main