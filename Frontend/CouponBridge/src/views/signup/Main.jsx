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

        console.log(formData);

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
            <div id="auth-left">
                <div id="auth-left-title" className='section-heading'>Join the fastest growing coupon marketplace</div>
                <div id="auth-left-subtitle" className='sub-heading'>Start saving or earning today. Create your free account in seconds.</div>
                <div id="auth-left-sections">
                    <div className="auth-left-section">
                        <ShoppingBagIcon sx={{marginBottom: '1rem'}}/>
                        <div className="auth-left-section-title lg-heading" style={{marginBottom: '1rem'}}>For Buyers</div>
            
                        <p className='sub-heading' style={{marginBottom: '0.5rem'}}>Access to verified coupons</p>
                        <p className='sub-heading' style={{marginBottom: '0.5rem'}}>Secure code delivery</p>
                        <p className='sub-heading' style={{marginBottom: '0.5rem'}}>buyer protection</p>
                        <p className='sub-heading' style={{marginBottom: '0.5rem'}}>Save on favourite purchase</p>
                       
                    </div>
                    <div className="auth-left-section">
                        <StorefrontIcon sx={{marginBottom: '1rem'}}/>
                        <div className="auth-left-section-title lg-heading" style={{marginBottom: '1rem'}}>For Sellers</div>
                        
                        <p className='sub-heading' style={{marginBottom: '0.5rem'}}>Access to verified coupons</p>
                        <p className='sub-heading' style={{marginBottom: '0.5rem'}}>Secure code delivery</p>
                        <p className='sub-heading' style={{marginBottom: '0.5rem'}}>buyer protection</p>
                        <p className='sub-heading' style={{marginBottom: '0.5rem'}}>Save on favourite purchase</p>
                    
                    </div>
                </div>
            </div>
            <div id="auth-right">
                <div id="auth-right-header">
                    <div id="auth-right-title" className='lg-heading' style={{marginBottom:'1rem'}}>Create your account</div>
                    <div id="auth-right-subtitle" className='sub-heading'>Choose how you want to use CouponHub</div>
                </div>
                
                <form id='form-section' className='sub-heading' onSubmit={ handleSubmit }>
                    <legend  className='heading' style={{marginBottom:'0.5rem'}}>I want to:</legend>

                    <input type="radio" id="customer"  className='radio' name="role"  checked={ formData.role === 'customer'} onChange={ handleChange } style={{marginBottom:'1rem', marginLeft:'1rem'}}/>
                    <label htmlFor="customer" className='sub-heading' style={ { cursor: 'pointer'} }>Buy Coupons</label><br/>

                    <input type="radio" id="provider" className='radio' name="role" checked={ formData.role === 'provider'} onChange={ handleChange } style={{marginBottom:'1rem', marginLeft:'1rem'}}/>
                    <label htmlFor="provider" className='sub-heading' style={ { cursor: 'pointer'}}>Sell Coupons</label><br/>

                    <label htmlFor="name"  className='heading' >Full Name</label><br/>
                    <input type="text" id="name" name="name"  value={formData.name} onChange={ handleChange } className='input' style={{marginBottom:'1rem'}} required/><br/>
                    

                    <label htmlFor="email" className='heading'>Email</label><br/>
                    <input type="email" id="email" className='input' name="email"  value={formData.email} onChange={ handleChange } style={{marginBottom:'1rem'}} required/><br/>

                    <label htmlFor="password" className='heading'>Password</label><br/>
                    <input type="password" id="password" className='input' name="password" value={formData.password} onChange={ handleChange } style={{marginBottom:'1rem'}} required/><br/>

                    {/* <label htmlFor="conf-password" className='heading'>Confirm Password</label><br/>
                    <input type="password" id="conf-password" className='input' name="conf-password" style={{marginBottom:'1.5rem'}}/><br/>
                 */}

                   <Button variant="contained" type='submit' sx= {{ width: '97%', borderRadius: '0.5rem', marginBottom: '0.5rem'}}>Create Account</Button>
                </form>

                <div id="auth-right-footer" className='sub-heading'>
                        Already have an account? <Button variant="text" onClick={ ()=> navigate('/login')}>Login here</Button>
                </div>

            </div>
        </div>
    </>
  )
}

export default Main