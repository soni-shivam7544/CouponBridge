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
                            <div className="coupon-desc sub-heading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est suscipit reprehenderit dolore iste totam, aperiam consectetur enim, aut necessitatibus voluptatum.</div>
                        </div>
                    </div>
                    <div className="seller-details">
                        <div className="seller-detail-title lg-heading">Sold by</div>
                        <div className="seller-detail">
                            <div className="seller-detail-id">
                                <div className="seller-id-logo heading">{coupon.providerId ? coupon.providerId.providerName[0] : ''}</div>
                                <div className="seller-id-data">
                                    <div className="seller-id-name heading">{coupon.providerId ? coupon.providerId.providerName : ''}</div>
                                    <div className="seller-id-rating">
                                        <StarIcon/>
                                        <p>4</p>
                                    </div>
                                </div>
                            </div>
                            <Button variant="text">view profile</Button>

                        </div>
                    </div>
                </div>
                <div className="right-column">
                    <div className="navigate-options">
                        <div className="coupon-price section-heading">$4.99</div>
                        <div className="coupon-time">
                            <div className="coupon-expiry sub-heading">
                                <CalendarMonthIcon sx={ { marginRight: '0.5rem'}} />
                                <div className="coupon-expiry-date">
                                    <p>Expires</p>
                                    <p>20/04/2026</p>
                                </div>
                            </div>
                            <div className="coupon-daysleft sub-heading">
                                <TimerIcon sx={ { marginRight: '0.5rem'}} />
                                31 days left
                            </div>
                        </div>
                        <Button variant="contained" sx={ { margin: '0.5rem 0'}} className='buy-now'>Buy Now</Button>
                        <Button variant="outlined" sx={ { margin: '0.5rem 0'}} className='add-cart'><AddShoppingCartIcon/>Add to cart</Button>
                        <Button variant="outlined" sx={ { margin: '0.5rem 0'}} className='verify'><ElectricBoltIcon/>verify coupon</Button>
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