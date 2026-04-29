import './HeroSection.css'
import '../../index.css'
import Button from '@mui/material/Button';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import { useNavigate } from 'react-router-dom';
import { useAlert } from '../../hooks/useAlert';
import { useAuth } from '../../hooks/useAuth';

function HeroSection(){
    const navigate = useNavigate();
    const { showAlert } = useAlert();
    const role = localStorage.getItem('role');
    const { user } = useAuth();

    const handleSelling = () => {
        if(!user || role === 'customer'){
            showAlert({
                type: 'info',
                message: 'Login as a seller to start selling.'
            });
            navigate('/login');
        }
        else navigate('/publish');
    }
   
    return(
        <>
            <div className="hero">
            
               <div className="hero-container">
                    <div className="hero-insight caption">Trusted by 10,00,000+ Customers</div>
                    <div className="hero-heading hero-title" style={{color:'var(--color-text-primary)'}}>
                        The Marketplace for
                    </div>
                    <span className='hero-heading hero-title'> Verified Discount Coupons</span>
                    <p className="hero-sub-heading hero-desc-1">
                        Buy and sell authenticated coupon codes from your favorite brands.
                    </p>
                    <p className="hero-sub-heading hero-desc-2">
                        Every coupon is verified before purchase.
                    </p>
                    <div className="hero-navigate">
                        <div className="heading browse" onClick={() => navigate('/coupons')}>Browse Coupons<KeyboardDoubleArrowRightIcon sx={{marginLeft:'0.5rem'}}/></div>
                        <Button variant="contained" className="selling-btn" onClick={ handleSelling }>Start Selling</Button>
                    </div>
                </div>

            </div>
            <div className="hero-curtain"></div>
            
            
        </>
    );
}

export default HeroSection;