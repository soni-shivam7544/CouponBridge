import './ConcludingSection.css'
import '../../index.css';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

function ConcludingSection() {
    const navigate = useNavigate();
    return (
        <>
            <div className="conclusion-section">
                <div className="conclusion-title section-heading">Ready to Start Saving?</div>
                <div className="conclusion-subtitle sub-heading">Join CouponBridge today and discover thousands of verified coupons from top brands.</div>
                <Button variant='contained' className='conclusion-create' onClick={ ()=> navigate('/signup')}>
                    <p>Create Free Account</p>
                    <ArrowForwardIcon sx={{marginLeft: '0.5rem'}}/>
                </Button>
            </div>
        </>
    );
}


export default ConcludingSection