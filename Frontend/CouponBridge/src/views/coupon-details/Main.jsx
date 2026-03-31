import '../../index.css';
import './Main.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TimerIcon from '@mui/icons-material/Timer';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import StarIcon from '@mui/icons-material/Star';

import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState} from 'react';
import axios from 'axios';

const Main = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [coupon, setCoupon] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:5050/cb/v1/api/coupons/${id}`)
            .then( res => {
                setCoupon(res.data.data);
            }).catch( err => console.log(err));
    }, []);

    const handleVerify = () => {
        console.log( coupon.productId, coupon.code);
        axios.post('http://localhost:1854/run-bot',{ productId: coupon.productId, couponCode: coupon.code })
        .then (res=> {
            console.log(res);
            if(res.data.data === 'Applied'){
                const div = document.querySelector('.result-success');
                div.innerText = `Coupon ${res.data.data}! ${res.data.message} You can buy the coupon`;
            }
            else {
                const div = document.querySelector('.result-failed');
                div.innerText = `Coupon ${res.data.data}! ${res.data.message} Proceed buying at your risk`;
            }
        })
        .catch(err=> console.log(err));
    }
    return (
        <div className="details">
            <div className="navigate-back sub-heading" onClick={()=> navigate('/coupons')}>
                <ArrowBackIcon  sx={{marginRight: '1rem'}}/>
                <p>Back to Browse</p>
            </div>
            <div className="coupon-details">
                <div className="left-column">
                    <div className="card-details">
                        <div className="coupon-logo section-heading">{coupon.merchant ? coupon.merchant[0] : ''}</div>
                        <div className="coupon-info">
                            <div className="coupon-title section-heading">{coupon.merchant}</div>
                            <div className="coupon-desc sub-heading"> {coupon.description}</div>
                        </div>
                    </div>
                    <div className="seller-details">
                        <div className="seller-detail-title lg-heading">Sold by</div>
                        <div className="seller-detail">
                            <div className="seller-detail-id">
                                <div className="seller-id-logo heading">{coupon.provider ? coupon.provider.name[0] : ''}</div>
                                <div className="seller-id-data">
                                    <div className="seller-id-name heading">{coupon.provider ? coupon.provider.name : ''}</div>
                                    <div className="seller-id-rating">
                                        <StarIcon/>
                                        <p>5</p>
                                    </div>
                                </div>
                            </div>
                            <Button variant="text">view profile</Button>

                        </div>
                    </div>
                </div>
                <div className="right-column">
                    <div className="navigate-options">
                        <div className="coupon-price section-heading">Rs. {coupon.price} /-</div>
                        <div className="coupon-time">
                            <div className="coupon-expiry sub-heading">
                                <CalendarMonthIcon sx={ { marginRight: '0.5rem'}} />
                                <div className="coupon-expiry-date">
                                    <p>Expires</p>
                                    <p>{coupon.expirationDate}</p>
                                </div>
                            </div>
                            <div className="coupon-daysleft sub-heading">
                                <TimerIcon sx={ { marginRight: '0.5rem'}} />
                                31 days left
                            </div>
                        </div>
                        <Button variant="contained" sx={ { margin: '0.5rem 0'}} className='buy-now'>Buy Now</Button>
                        <Button variant="outlined" sx={ { margin: '0.5rem 0'}} className='add-cart'><AddShoppingCartIcon/>Add to cart</Button>
                        <Button variant="outlined" sx={ { margin: '0.5rem 0'}} className='verify' onClick= {handleVerify}><ElectricBoltIcon/>verify coupon</Button>
                        <div className="result-success heading" style={{color: 'green', textAlign: 'center'}}></div>
                        <div className="result-failed heading" style={{color: 'red', textAlign: 'center'}}></div>
                        <div className="coupon-handle">
                            <Button variant="text"><FavoriteBorderIcon sx={ { marginRight: '1rem'}} />save</Button>
                            <Button variant="text"><ShareIcon sx={ { marginRight: '1rem'}} />share</Button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main