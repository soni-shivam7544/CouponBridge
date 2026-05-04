import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Button from '@mui/material/Button';

import './Popup.css';

const CouponPublished = ( { onViewPublish, onContinue } ) => {
    return(
        <div className='popup-overlay'>
            <div className="popup-content" style={{width:'50%', padding: '2rem 2.5rem'}}>
                <TaskAltIcon sx={{fontSize:'4rem', color: 'var(--color-success)', backgroundColor: 'var(--color-bg)', padding: '1rem', borderRadius: '50%'}}/>
                <p className='lg-heading' style={{color:'var(--color-success)', margin: '0.5rem 0rem'}}>Coupon Published!</p>
                <p className='sub-heading'>Thankyou for your publish. Your coupon will be visible to customers now.</p>
                
                <div className="popup-action" style={{margin: '1.5rem 0rem 0rem'}}>
                    <Button variant="contained"sx={{backgroundColor:'var(--color-btn-secondary-bg)', color: 'var(--color-btn-secondary-text)'}} onClick={onViewPublish}>View Coupon</Button>
                    <Button variant="contained" sx={{backgroundColor:'var(--color-primary)', ":hover":{backgroundColor:'var(--color-primary-hover)'}}} onClick={onContinue}>Continue</Button>
                    
                </div>
            </div>
        </div>
    );
}

export default CouponPublished;