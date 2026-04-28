import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import TimerIcon from '@mui/icons-material/Timer';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import VerifiedIcon from '@mui/icons-material/Verified';
import CircleIcon from '@mui/icons-material/Circle';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import DeleteIcon from '@mui/icons-material/Delete';


import '../index.css';
import './CouponCard.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../hooks/useAuth';
import { useEffect } from 'react';

function CouponCard( { data } ) {

    const role = localStorage.getItem('role');
    const {user, updateUser} = useAuth();
    const [coupon, setCoupon] = useState(data);
    const [isLiked, setIsLiked] = useState(coupon.isSaved); // to toggle like
    
    const navigate = useNavigate();
    const handleLike = (e) => {
        e.stopPropagation();

        if(role === 'customer'){
            if(isLiked === false){

                axios.put(`http://localhost:5050/cb/v1/api/customers/${user._id}`,{
                    $addToSet: { savedCoupons: coupon._id } // prevents duplicates
                }).then(res => {
                    console.log(res);
                    console.log("saved");
                    updateUser(res.data.data);
                    setIsLiked(true);


                }).catch(err => {
                    console.log(err.response);
                })
            }
            else{

                axios.put(`http://localhost:5050/cb/v1/api/customers/${user._id}`,{
                    $pull: { savedCoupons: coupon._id }
                }).then(res => {
                    console.log(res);
                    console.log("saved removed");
                    updateUser(res.data.data);
                    setIsLiked(false);


                }).catch(err => {
                    console.log(err.response);
                })
            }
        }
        else{
            console.log("Customer Login is required.");
        }
        
        
    }

    const handleAddtoCart = (e) => {
        e.stopPropagation();

        axios.post('http://localhost:5050/cb/v1/api/cart',{
            couponId: coupon._id
        },{
            headers:{
                authorization: localStorage.getItem('token')
            }
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err.response)
        })
    }

    const handleDelete = () => {

    }

    useEffect(()=>{
        axios.get(`http://localhost:5050/cb/v1/api/coupons/${coupon._id}`,{
            headers:{
                authorization: localStorage.getItem('token')
            }
        })
        .then(res=>{
            setCoupon(res.data.data);
            setIsLiked(res.data.data.isSaved)
        }).catch(err=>console.log(err.response));
    },[user]);
    return (
        
        <div className="coupon-card" onClick={ ()=> navigate(`/coupons/${coupon._id}`)}>
            <div className="coupon-card-image">
                <img src={coupon ? coupon.image : null} alt='image'/>
                <div className='text coupon-card-discount'>
                    {coupon ?
                    coupon.discountType === 'Percentage' ?
                    `${coupon.discountValue}% OFF`
                    :
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <CurrencyRupeeIcon/>
                        <span>{`${coupon.discountValue} OFF`}</span>
                    </div>
                    : 
                    ''}
                </div>
                { coupon ? coupon.isVerified ? 
                <div className='text coupon-card-isverified'><VerifiedIcon sx={{fontSize:'1.2rem', marginRight: '0.2rem'}}/><span>Verified</span></div>
                : null: null
                }
                { (coupon && !coupon.isPurchased) && 
                    (user && user._id === coupon.provider._id ?
                    (<span className='coupon-card-delete' onClick={handleDelete}><DeleteIcon sx={{color: 'var(--color-danger)'}}/></span>)
                    :
                    (<span className='coupon-card-like' onClick={handleLike}>{ coupon && !(coupon.isSaved )? <FavoriteBorderIcon sx={{ color:'var(--color-text-muted)'}}/> : <FavoriteIcon sx={{ color:'var(--color-danger)'}}/>}</span>)
                    )
                }
            </div>
            <div className="coupon-card-info text">
                <p style={{color:'var(--color-primary)'}}>{coupon ?coupon.brand.trim().toUpperCase():''}</p>
                <p className='coupon-card-info-title heading'>{coupon ? coupon.title.trim().toUpperCase():''}</p>
                <div className="coupon-card-provider caption">
                    <p>{coupon ? coupon.provider.name:''}</p>
                    <div className="coupon-card-provider-rating">
                        <StarIcon sx={{color: 'var(--color-highlight-hover)', fontSize:'1rem'}}/>
                        <span>4.8</span>
                    </div>
                </div>
                {/* {coupon && coupon.isActive ?
                <div style={{color: 'var(--color-success)'}} className='coupon-status'>
                    <CircleIcon sx={{fontSize: '1rem', marginRight: '0.5rem'}}/>
                    <span><i>Available</i></span>
                </div>:
                <div className='coupon-status'>
                    <MilitaryTechIcon sx={{marginRight: '0.5rem'}}/>
                    <span><i>Sold</i></span>
                </div>
                } */}
                {(coupon && !coupon.isPurchased) ? <div className="coupon-card-expiry caption">
                    <TimerIcon sx={{fontSize:'1rem'}}/>
                    <span> 83 days left</span>
                </div>:
                <div className="coupon-card-expiry caption">
                    <TimerIcon sx={{fontSize:'1rem'}}/>
                    <span> 0 days left</span>
                </div>
                }
                <div className="coupon-card-navigation">
                    <div className="coupon-card-price lg-heading">
                        <div className="coupon-card-reduced-price">
                            <CurrencyRupeeIcon sx={{fontSize:'1.5rem'}}/>
                            <span>{coupon ? coupon.price:''}</span>
                        </div>
                        
                    </div>
                    {(coupon && !coupon.isPurchased) && 
                    (user && user._id === coupon.provider._id) ? 
                    null:
                    <Button variant="contained" onClick={handleAddtoCart}><AddShoppingCartIcon sx={{fontSize:'1.2rem', marginRight: '0.2rem'}}/><span>Add to Cart</span></Button>
                    }
                </div>
            </div>
        </div>
    );
}

export default CouponCard