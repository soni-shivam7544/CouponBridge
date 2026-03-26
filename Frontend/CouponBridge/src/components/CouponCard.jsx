import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import TimerIcon from '@mui/icons-material/Timer';
import Button from '@mui/material/Button';
import '../index.css';
import './CouponCard.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CouponCard( { data } ) {

    const navigate = useNavigate();
    const handleClick = () => {
        axios.delete(`http://localhost:5050/cb/v1/api/coupons/${data._id}`)
        .then( res => {
            console.log("Deleted coupon successfully.");
            navigate('/coupons');
        })
        .catch( err => console.log("Error is :", err));
    }

    return (
        
        <>
            <div className="card" onClick={ ()=> navigate(`/coupons/${data._id}`)}>
                <div className="card-header">
                    <div className="card-title">
                        <div className="card-logo lg-heading">{data.merchant[0].toUpperCase()}</div>
                        <div className="card-subtitle heading">{data.merchant}</div>
                    </div>
                    <div className="card-clicks">
                        <FavoriteBorderIcon sx={{cursor: 'pointer', marginRight: '0.5rem'}}/>
                        <DeleteIcon sx={{color:'red', cursor: 'pointer'}} onClick={ handleClick }/>
                    </div>

                </div>
                <span className='card-title-discount heading'> <i> {data.discount}% Discount</i></span>
                <div className="card-body sub-heading"> {data.description} </div>
                <div className="card-footer">
                    <div className="card-footer-details">
                        <div className="price lg-heading">Rs. {data.price}/-</div>
                        <div className="expiry sub-heading">
                            <TimerIcon/>
                            <p>30d left</p>
                        </div>
                    </div>
                    <div className="card-footer-navigate sub-heading">
                        <Button variant="contained" className='add-to-cart'>
                            <AddShoppingCartIcon/>
                            Add to Cart
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CouponCard