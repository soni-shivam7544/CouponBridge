
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useAlert } from '../../hooks/useAlert';
import { useAuth } from '../../hooks/useAuth';

const Main = () => {

    const { showAlert } = useAlert();
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        role: 'customer'
        
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        
        if(e.target.id === 'customer'){
            setFormData( (data) => {
                return { ...data, role: 'customer'}
            });
        }
        else if (e.target.id === 'provider') {
            setFormData( (data) => {
                
                return { ...data, role: 'provider' }
            });
        }
        else setFormData( (data) => {
            
            return { ...data, [e.target.name] : e.target.value }
        });
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(formData.role === 'customer'){
            axios.post('http://localhost:5050/cb/v1/api/customers/signin', formData)
            .then ( res=> {
                console.log(res.data);
                login({ userData:res.data.data, role:'customer'});
                showAlert({ type: 'success', message: `${res.data.message}`});
                navigate('/');
            })
            .catch( err => {
                showAlert({ type: 'error', message: `${err.response.data.error}`});

            });
        }
        else axios.post('http://localhost:5050/cb/v1/api/providers/signin', formData)
            .then ( res=> {
                login({ userData:res.data.data, role:'provider'});
                showAlert({ type: 'success', message: `${res.data.message}`});
                navigate('/');
            })
            .catch( err => {
                showAlert({ type: 'error', message: `${err.response.data.error}`});
            });

        setFormData({
            email: '',
            password: '',
            role: 'customer',
        });

    }

  return (
    <>
        <div id="auth-main">
            <div id="auth-left" className='text' style={{color:'var(--color-surface-dark-text)'}}>
                <div id="auth-left-title" className='section-heading' style={{color:'var(--color-surface-dark-text)'}}>Welcome back to the marketplace for verified coupons</div>
                <div id="auth-left-subtitle" className='sub-heading' style={{color:'var(--color-surface-dark-text)'}}>Access your account to buy, sell, or manage your coupons.</div>
            </div>
            <div id="auth-right">
                <div id="auth-right-header">
                    <div id="auth-right-title" className='lg-heading' style={{marginBottom:'0.5rem'}}>Login to your account</div>
                    <div id="auth-right-subtitle" className='sub-heading'>Choose how you want to use CouponHub</div>
                </div>
                
                <form id='form-section' className='text' onSubmit={ handleSubmit }>
                    <legend  style={{marginBottom:'0.5rem', color:'var(--color-text-primary)'}}>I am your:</legend>

                    <div className="register-choice">
                        <input type="radio" id="customer" name="role"  checked={ formData.role === 'customer'} onChange={ handleChange } style={{marginBottom:'1rem', marginLeft:'1rem'}}/>
                        <label htmlFor="customer" style={ { cursor: 'pointer'}} className={`radio ${formData.role === 'customer' && 'register-choice-active'}`}>Buyer</label>

                        <input type="radio" id="provider" name="role" checked={ formData.role === 'provider'} onChange={ handleChange } style={{marginBottom:'1rem', marginLeft:'1rem'}}/>
                        <label htmlFor="provider" style={ { cursor: 'pointer'}} className={`radio ${formData.role === 'provider' && 'register-choice-active'}`}>Seller</label>

                    </div>


                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className='input' name="email"  value={formData.email} onChange={ handleChange } required/>

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className='input' name="password" value={formData.password} onChange={ handleChange } required/>

                   <Button variant="contained" type='submit' sx= {{ width: '100%', borderRadius: '0.5rem', margin: '1rem 0rem 1rem'}}>Login</Button>
                </form>

                <div id="auth-right-footer" className='text'>
                    <span>Don't have an account? </span>
                    <Button variant="text" onClick={ ()=> navigate('/signup')}>Create Account</Button>
                </div>

            </div>
        </div>
    </>
  )
}

export default Main