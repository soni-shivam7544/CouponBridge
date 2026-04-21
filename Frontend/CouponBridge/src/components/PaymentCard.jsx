import './PaymentCard.css';

import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';

function PaymentCard({ data, quantity}) {


    return (
        
        <div className="payment-summary-cart-card">
            <div className="payment-cart-card-img">
                <img src={data.image} alt='image'/>
            </div>
            <div className="payment-cart-card-details">
                <div className="payment-cart-card-item-detail">
                    <p className='payment-cart-card-item-title heading'>{data.title}</p>
                    <p className='sub-heading'>{data.brand.toUpperCase()}</p>
                </div>
                <div className="payment-summary-cost heading">
                    <CurrencyRupeeOutlinedIcon/>
                    <span>{data.price}</span>
                    <span className='text'>-- x{quantity}</span>
                </div>
            </div>
        </div>

    );

}

export default PaymentCard;