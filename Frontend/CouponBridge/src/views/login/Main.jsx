import './Main.css';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const navigate = useNavigate();
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

                    <input type="radio" id="customer"  className='radio' name="role"style={{marginBottom:'1rem', marginLeft:'1rem'}}/>
                    <label for="customer" className='sub-heading' style={ { cursor: 'pointer'} }>Customer</label><br/>

                    <input type="radio" id="seller" className='radio' name="role" style={{marginBottom:'1rem', marginLeft:'1rem'}}/>
                    <label for="seller" className='sub-heading' style={ { cursor: 'pointer'}}>Provider</label><br/>

                    
                    <label for="email" className='heading'>Email</label><br/>
                    <input type="email" id="email" className='input' name="email" style={{marginBottom:'1rem'}}/><br/>

                    <label for="password" className='heading'>Password</label><br/>
                    <input type="password" id="password" className='input' name="password" style={{marginBottom:'2rem'}}/><br/>

                   <Button variant="contained" type='submit' sx= {{ width: '97%', borderRadius: '0.5rem', marginBottom: '0.5rem'}}>login</Button>
                </form>

                <div id="auth-right-footer" className='sub-heading'>
                        Don't have an account? <Button variant="text" onClick={ ()=> navigate('/login')}>Create Account</Button>
                </div>

            </div>
        </div>
    </>
  )
}

export default Main