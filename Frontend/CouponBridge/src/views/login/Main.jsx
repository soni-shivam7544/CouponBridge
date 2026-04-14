
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
        else if (e.target.id == 'seller') {
            setFormData( (data) => {
                
                return { ...data, role: 'seller' }
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
            <div id="auth-left">
                <div id="auth-left-title" className='section-heading'>Welcome back to the marketplace for verified coupons</div>
                <div id="auth-left-subtitle" className='sub-heading'>Access your account to buy, sell, or manage your coupons.</div>
                
            </div>
            <div id="auth-right">
                <div id="auth-right-header">
                    <div id="auth-right-title" className='lg-heading' style={{marginBottom:'1rem'}}>Sign in to your account</div>
                    <div id="auth-right-subtitle" className='sub-heading'>Choose your account type and enter your credentials</div>
                </div>
                
                <form id='form-section' className='sub-heading' onSubmit ={ handleSubmit }>
                    <legend  className='heading' style={{marginBottom:'0.5rem'}}>I am your:</legend>

                    <input type="radio" id="customer"  className='radio' name="role" checked={ formData.role === 'customer' } onChange={ handleChange} style={{marginBottom:'1rem', marginLeft:'1rem'}}/>
                    <label htmlFor="customer" className='sub-heading' style={ { cursor: 'pointer'} }>Customer</label><br/>

                    <input type="radio" id="seller" className='radio' name="role" checked={ formData.role === 'seller' } onChange={handleChange} style={{marginBottom:'1rem', marginLeft:'1rem'}}/>
                    <label htmlFor="seller" className='sub-heading' style={ { cursor: 'pointer'}}>Provider</label><br/>

                    
                    <label htmlFor="email" className='heading'>Email</label><br/>
                    <input type="email" id="email" className='input' name="email" value={ formData.email } style={{marginBottom:'1rem'}} onChange={ handleChange } required/><br/>

                    <label htmlFor="password" className='heading'>Password</label><br/>
                    <input type="password" id="password" className='input' name="password" value={ formData.password } style={{marginBottom:'2rem'}}  onChange={ handleChange } required/><br/>

                   <Button variant="contained" type='submit' sx= {{ width: '97%', borderRadius: '0.5rem', marginBottom: '0.5rem'}}>login</Button>
                </form>

                <div id="auth-right-footer" className='sub-heading'>
                        Don't have an account? <Button variant="text" onClick={ ()=> navigate('/signup')}>Create Account</Button>
                </div>

            </div>
        </div>
    </>
  )
}

export default Main