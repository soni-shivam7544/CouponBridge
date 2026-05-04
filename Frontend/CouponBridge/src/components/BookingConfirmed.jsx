import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Button from '@mui/material/Button';

import './Popup.css';
import { usePopup } from '../hooks/usePopup';

const BookingConfirmed = ( { onViewOrders, onContinue } ) => {
    const {popup} = usePopup();
    return(
        <div className='popup-overlay'>
            <div className="popup-content" style={{width:'50%', padding: '2rem 2.5rem'}}>
                <TaskAltIcon sx={{fontSize:'4rem', color: 'var(--color-success)', backgroundColor: 'var(--color-bg)', padding: '1rem', borderRadius: '50%'}}/>
                <p className='lg-heading' style={{color:'var(--color-success)', margin: '0.5rem 0rem'}}>Booking Confirmed!</p>
                <p className='sub-heading'>Thankyou for your purchase. Your coupon codes have been sent to your email.</p>
                <div className="popup-div text">
                    <p>Order Id</p>
                    <p className='heading'>#{popup.data.bookingId}</p>
                </div>
                <div className="popup-action" style={{margin: '1.5rem 0rem 0rem'}}>
                    <Button variant="contained"sx={{backgroundColor:'var(--color-btn-secondary-bg)', color: 'var(--color-btn-secondary-text)'}} onClick={onViewOrders}>View Orders</Button>
                    <Button variant="contained" sx={{backgroundColor:'var(--color-primary)', ":hover":{backgroundColor:'var(--color-primary-hover)'}}} onClick={onContinue}>Continue Shopping</Button>
                    
                </div>
            </div>
        </div>
    );
}

export default BookingConfirmed;