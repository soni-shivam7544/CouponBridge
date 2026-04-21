import './HeroSection.css'
import '../../index.css'
import Button from '@mui/material/Button';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import { useNavigate } from 'react-router-dom';

function HeroSection(){
    const navigate = useNavigate();
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
                        <Button variant="contained" className="selling-btn" onClick={ () => navigate('/publish')}>Start Selling</Button>
                    </div>
                </div>

            </div>
            <div className="hero-curtain"></div>
            
            
        </>
    );
}

export default HeroSection;