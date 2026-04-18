import '../../index.css';
import './Main.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SellIcon from '@mui/icons-material/Sell';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import TimerIcon from '@mui/icons-material/Timer';
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import StarIcon from '@mui/icons-material/Star';
import VerifiedIcon from '@mui/icons-material/Verified';

import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState} from 'react';
import axios from 'axios';

const Main = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [coupon, setCoupon] = useState(null);

    useEffect(()=>{
        axios.get(`http://localhost:5050/cb/v1/api/coupons/${id}`)
            .then( res => {
                console.log(res.data.data);
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
            <div className="navigate-back text" onClick={()=> navigate('/coupons')}>
                <ArrowBackIcon  sx={{marginRight: '0.5rem'}}/>
                <p>Back to Browse</p>
            </div>
            <div className="coupon-details">
                <div className="left-column">
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
                    : null: null}

                    <img src={coupon ? coupon.image:''} alt='coupon_img'/>
                    
                </div>
                <div className="right-column text">
                    <p style={{color:'var(--color-primary)'}}>{coupon ?coupon.brand.trim().toUpperCase():''}</p>
                    <p style={{margin:'0.3rem 0rem'}} className='lg-heading'>{coupon ? coupon.title.trim().toUpperCase():''}</p>
                    <div className="coupon-details-days-left">
                        <TimerIcon sx={{fontSize:'1rem', marginRight:'0.2rem'}}/>
                        <span>68 days left</span>
                    </div>
                    <div className="coupon-details-cost">
                        <div className="coupon-details-reduced-cost section-heading">
                            <CurrencyRupeeIcon sx={{fontSize:'2rem'}}/>
                            <span>{coupon ? coupon.price:''}</span>
                        </div>
                    </div>
                    <p>{coupon ? coupon.description:''}</p>
                    <div className="coupon-details-provider">
                        <div className="coupon-details-provider-info">
                            <PersonIcon sx={{marginRight: '0.7rem', backgroundColor: 'var(--color-bg)', padding: '0.5rem', borderRadius: '50%'}}/>
                            <div className="coupon-details-provider-intro">
                                <p className='heading'>{coupon ? coupon.provider.name:''}</p>
                                <p>{coupon ? coupon.provider.email : ''}</p>
                            </div>
                        </div>
                        <div className="coupon-details-provider-rating">
                            <StarIcon sx={{color: 'var(--color-highlight)', marginRight:'0.3rem'}}/>
                            <span className=''><b>4.5</b></span>
                        </div>
                    </div>
                    <div className="coupon-details-navigate">
                        <Button variant="contained" sx={{width: '48%', borderRadius: '0.5rem'}}>Buy Now</Button>
                        <Button variant="outlined" color='var(--color-text-secondary)' sx={{width: '48%', borderRadius: '0.5rem'}}><AddShoppingCartIcon sx={{fontSize: '1rem', marginRight: '0.5rem'}}/><span>Add to Cart</span></Button>
                    </div>
                    <div className="coupon-details-quick-items">
                        <Button variant="text" sx={{marginRight:'2rem', color:'var(--color-text-primary)'}}>
                            <FavoriteBorderIcon sx={{marginRight: '0.7rem', fontSize: '1.1rem'}}/>
                            <span>Save</span>
                        </Button>
                        <Button variant="text" sx={{marginRight:'2rem', color:'var(--color-text-primary)'}}>
                            <ElectricBoltIcon sx={{marginRight: '0.7rem', fontSize: '1.1rem'}}/>
                            <span>Verify Coupon</span>
                        </Button>
                        <Button variant="text" sx={{marginRight:'2rem', color:'var(--color-text-primary)'}}>
                            <ShareIcon sx={{marginRight: '0.7rem', fontSize: '1.1rem'}}/>
                            <span>Share</span>
                        </Button>
                    </div>
                    <div className="coupon-details-meta">
                        <div className="coupon-details-meta-item">
                            <div className="coupon-details-meta-title">
                                <SellIcon sx={{fontSize:'1rem', marginRight: '0.5rem'}}/>
                                <span>Category</span>
                            </div>
                            <p style={{color:'var(--color-text-primary)'}}>{coupon ? coupon.category:''}</p>
                        </div>
                        <div className="coupon-details-meta-item">
                            <div className="coupon-details-meta-title">
                                <CalendarMonthIcon sx={{fontSize:'1rem', marginRight: '0.5rem'}}/>
                                <span>Expires</span>
                            </div>
                            <p style={{color:'var(--color-text-primary)'}}>{coupon ? coupon.expiry:''}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Main