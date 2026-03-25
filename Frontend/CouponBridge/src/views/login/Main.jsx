
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const Main = () => {

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
                localStorage.setItem('token', res.data.data.token);
                localStorage.setItem("user", JSON.stringify(res.data.data.user));
                navigate('/');
            })
            .catch( err => console.log(err));
        }
        else axios.post('http://localhost:5050/cb/v1/api/providers/signin', formData)
            .then ( res=> {
                localStorage.setItem('token', res.data.data.token);
                localStorage.setItem("user", JSON.stringify(res.data.data.user));
                navigate('/');
            })
            .catch( err => console.log(err));

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
                
                <form id='form-section' className='sub-heading'>
                    <legend  className='heading' style={{marginBottom:'0.5rem'}}>I am your:</legend>

                    <input type="radio" id="customer"  className='radio' name="role" checked={ formData.role === 'customer' } onChange={ handleChange} style={{marginBottom:'1rem', marginLeft:'1rem'}}/>
                    <label htmlFor="customer" className='sub-heading' style={ { cursor: 'pointer'} }>Customer</label><br/>

                    <input type="radio" id="seller" className='radio' name="role" checked={ formData.role === 'seller' } onChange={handleChange} style={{marginBottom:'1rem', marginLeft:'1rem'}}/>
                    <label htmlFor="seller" className='sub-heading' style={ { cursor: 'pointer'}}>Provider</label><br/>

                    
                    <label htmlFor="email" className='heading'>Email</label><br/>
                    <input type="email" id="email" className='input' name="email" value={ formData.email } style={{marginBottom:'1rem'}} onChange={ handleChange }/><br/>

                    <label htmlFor="password" className='heading'>Password</label><br/>
                    <input type="password" id="password" className='input' name="password" value={ formData.password } style={{marginBottom:'2rem'}}  onChange={ handleChange }/><br/>

                   <Button variant="contained" type='submit' sx= {{ width: '97%', borderRadius: '0.5rem', marginBottom: '0.5rem'}} onClick={ handleSubmit }>login</Button>
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