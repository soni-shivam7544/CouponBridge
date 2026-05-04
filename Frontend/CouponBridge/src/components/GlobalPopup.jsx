
import { usePopup } from '../hooks/usePopup.js';
import LoaderPopup from './loaderPopup.jsx';
import DeleteConfirmPopup from './DeleteConfirmPopup.jsx';
import BookingConfirmed from './BookingConfirmed.jsx';
import CouponPublished from './CouponPublished.jsx';

function GlobalPopup() {
    const { popup, hidePopup } = usePopup();

    if (!popup) return null;

    const handleResolve = (response) => {
        popup.resolve(response);
        hidePopup();
    }

    
    switch(popup.type){
        case "Loader":
            return <LoaderPopup/>
        
        case "Delete-Confirm":
            return (<DeleteConfirmPopup
                onConfirm = {() => handleResolve(true)}
                onCancel = {() => handleResolve(false)}
            />);
        case "Booking-Confirmed":
            return(
                <BookingConfirmed
                    onViewOrders={ () => handleResolve(true)}
                    onContinue={ () => handleResolve(false)}
                />
            );
        case "Coupon-Published":
            return(
                <CouponPublished
                    onViewPublish={ () => handleResolve(true)}
                    onContinue={ () => handleResolve(false)}
                />
            )
        default:
            return null;
    }
}

export default GlobalPopup;