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
                    <div className="hero-insight ">Trusted by 1000000+ customers</div>
                    <div className="hero-title heading">
                        The Marketplace for Verified Discount Coupons
                    </div>
                    <p className="hero-desc-1">
                        Buy and sell authenticated coupon codes from your favorite brands.
                    </p>
                    <p className="hero-desc-2">
                        Every coupon is verified before purchase.
                    </p>
                    <div className="hero-navigate">
                        <div className="browse" onClick={() => navigate('/coupons')}>Browse Coupons <KeyboardDoubleArrowRightIcon/></div>
                        <Button variant="contained" className="selling-btn" onClick={ () => navigate('/publish')}>Start Selling</Button>
                    </div>
                </div>

            </div>
            <div className="hero-curtain"></div>
            
            
        </>
    );
}

export default HeroSection;