import './CartCard.css';

import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function CartCard({data, quantity, onRemove, onChange}) {

    const handleRemoveItem = () => {
        onRemove(data._id);
    }

    const handleIncreaseItem = () => {
        onChange(data._id, quantity+1);
    }

    const handleDecreaseItem = () => {
        if(quantity == 1){
            handleRemoveItem();
        }
        else onChange(data._id, quantity-1);
    }

    return(
        <div className="cart-card">
            <div className="cart-card-items">
                <div className="cart-card-img">
                    <img src={data.image}/>
                </div>
                <div className="cart-card-details text">
                    <div style={{color:'var(--color-accent)'}}>{data.brand.toUpperCase()}</div>
                    <div className='heading'><b>{data.title}</b></div>
                    <div className="cart-card-discount">
                        {data.discountType === 'Flat' ?
                        <>
                            <CurrencyRupeeOutlinedIcon/>
                            <span>{data.discountValue} off</span>
                        </>
                        :
                        <>
                            <span>{data.discountValue}% off</span>
                        </>
                        }
                    </div>
                    <div className="cart-card-cost lg-heading">
                        <CurrencyRupeeOutlinedIcon/>
                        <span>{data.price}</span>
                    </div>
                </div>
            </div>
            <div className="cart-card-navigation heading">
                {/* <div className="cart-card-update-items">
                    <AddIcon sx={{cursor: 'pointer'}} onClick={handleIncreaseItem}/>
                    <span style={{margin: '0rem 0.5rem'}}>{quantity}</span>
                    <RemoveIcon sx={{cursor: 'pointer'}} onClick = {handleDecreaseItem}/>
                </div> */}
                <RemoveShoppingCartOutlinedIcon sx={{color: 'var(--color-danger)', cursor:'pointer', padding: '0.5rem', borderRadius:'50%', ":hover": { backgroundColor:'var(--color-bg)'}}} onClick={handleRemoveItem}/>

            </div>
        </div>
    );
}

export default CartCard;