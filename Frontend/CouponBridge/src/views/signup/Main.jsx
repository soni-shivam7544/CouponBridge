import './Main.css';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const navigate = useNavigate();
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
                
                <form id='form-section' className='sub-heading'>
                    <legend  className='heading' style={{marginBottom:'0.5rem'}}>I want to:</legend>

                    <input type="radio" id="customer"  className='radio' name="role"style={{marginBottom:'1rem', marginLeft:'1rem'}}/>
                    <label for="customer" className='sub-heading' style={ { cursor: 'pointer'} }>Buy Coupons</label><br/>

                    <input type="radio" id="seller" className='radio' name="role" style={{marginBottom:'1rem', marginLeft:'1rem'}}/>
                    <label for="seller" className='sub-heading' style={ { cursor: 'pointer'}}>Sell Coupons</label><br/>

                    <label for="name"  className='heading' >Full Name</label><br/>
                    <input type="text" id="name" name="name" className='input' style={{marginBottom:'1rem'}}/><br/>
                    

                    <label for="email" className='heading'>Email</label><br/>
                    <input type="email" id="email" className='input' name="email" style={{marginBottom:'1rem'}}/><br/>

                    <label for="password" className='heading'>Password</label><br/>
                    <input type="password" id="password" className='input' name="password" style={{marginBottom:'1rem'}}/><br/>

                    <label for="conf-password" className='heading'>Confirm Password</label><br/>
                    <input type="password" id="conf-password" className='input' name="conf-password" style={{marginBottom:'1.5rem'}}/><br/>
                

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