import './OrderItem.css';

import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

function OrderItem({data}){
    return(
        <div className="order-item">
            <div className="order-item-name">
                <p className='heading'>{data && data.coupon.title}</p>
                <p>{data && data.coupon.brand.toUpperCase()}</p>
            </div>
            <div className="order-item-cost heading">
                <CurrencyRupeeIcon/>
                <span>{data && data.coupon.price}</span>
            </div>
        </div>
    )
}

export default OrderItem;