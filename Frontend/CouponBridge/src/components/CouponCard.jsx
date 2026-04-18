import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import TimerIcon from '@mui/icons-material/Timer';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import VerifiedIcon from '@mui/icons-material/Verified';

import watchImage from '../assets/images/watch.png';
import '../index.css';
import './CouponCard.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

function CouponCard( { data } ) {

    const navigate = useNavigate();
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = (e) => {
        e.stopPropagation();
        setIsLiked((like)=>(!like));
    }
    const handleAddtoCart = (e) => {
        e.stopPropagation();
    }

    return (
        
        <div className="coupon-card" onClick={ ()=> navigate(`/coupons/${data._id}`)}>
            <div className="coupon-card-image">
                <img src={data ? data.image : null} alt='image'/>
                <div className='text coupon-card-discount'>
                    {data ?
                    data.discountType === 'Percentage' ?
                    `${data.discountValue}% OFF`
                    :
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <CurrencyRupeeIcon/>
                        <span>{`${data.discountValue} OFF`}</span>
                    </div>
                    : 
                    ''}
                </div>
                { data ? data.isVerified ? 
                <div className='text coupon-card-isverified'><VerifiedIcon sx={{fontSize:'1.2rem', marginRight: '0.2rem'}}/><span>Verified</span></div>
                : null: null
                }
                <span className='coupon-card-like' onClick={handleLike}>{ !isLiked ? <FavoriteBorderIcon sx={{ color:'var(--color-text-muted)'}}/> : <FavoriteIcon sx={{ color:'var(--color-danger)'}}/>}</span>
            </div>
            <div className="coupon-card-info text">
                <p style={{color:'var(--color-primary)'}}>{data ?data.brand.trim().toUpperCase():''}</p>
                <p className='heading'>{data ? data.title.trim().toUpperCase():''}</p>
                <div className="coupon-card-provider caption">
                    <p>{data ? data.provider.name:''}</p>
                    <div className="coupon-card-provider-rating">
                        <StarIcon sx={{color: 'var(--color-highlight-hover)', fontSize:'1rem'}}/>
                        <span>4.8</span>
                    </div>
                </div>
                <div className="coupon-card-expiry caption">
                    <TimerIcon sx={{fontSize:'1rem'}}/>
                    <span> 83 days left</span>
                </div>
                <div className="coupon-card-navigation">
                    <div className="coupon-card-price lg-heading">
                        <div className="coupon-card-reduced-price">
                            <CurrencyRupeeIcon sx={{fontSize:'1.5rem'}}/>
                            <span>{data ? data.price:''}</span>
                        </div>
                        
                    </div>
                    <Button variant="contained" onClick={handleAddtoCart}><AddShoppingCartIcon sx={{fontSize:'1.2rem', marginRight: '0.2rem'}}/><span>Add to Cart</span></Button>
                </div>
            </div>
        </div>
    );
}

export default CouponCard