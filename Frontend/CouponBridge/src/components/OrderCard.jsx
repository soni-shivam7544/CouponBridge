import './OrderCard.css';

import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import OrderItem from './OrderItem';

function OrderCard( { data } ){
    const date = new Date(data.createdAt);
    const orderDate = data && `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
    return(
        <div className="order-card text">
            <div className="order-card-title heading">
                <div className="order-id">
                    Order #{data && data._id}
                </div>
                <div className="order-cost">
                    <CurrencyRupeeIcon/>
                    <span>{data && data.total}</span>
                </div>
            </div>

            <div className="order-card-title">
                <div className="order-date">
                    {orderDate}
                </div>
                {data && data.status && data.status === 'failed' ?
                <div className="order-status" style={{color: 'var(--color-danger)'}}>
                    Failed
                </div>
                :
                <div className="order-status" style={{color: 'var(--color-success)'}}>
                    Completed
                </div>
                }
                
            </div>

            <div className="order-items">
                {data && data.items.map(item => {
                    return <OrderItem key={item._id} data={item}/>
                })}
            </div>

        </div>
    )
}

export default OrderCard;