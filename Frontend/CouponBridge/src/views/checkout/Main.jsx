import './Main.css';

import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';

import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import PaymentCard from '../../components/PaymentCard';
import { usePopup } from '../../hooks/usePopup';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import { bookingEmail } from '../../mailingHtmls';

const Main = () => {
    const navigate = useNavigate();
    const [items,setItems] = useState([]);
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        number: '',
        expiryDate: '',
        cvv: ''
    });
    const {user} = useAuth();
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type');
    const couponId = searchParams.get('couponId');
    const {showPopup, hidePopup} = usePopup();

    let subtotal = 0;
    if(type === 'buyNow'){
        subtotal = items.reduce((acc, item)=>{
            return (Number(item?.price || 0));
        },0);
    }
    else{
        subtotal = items.reduce((acc, item)=>{
            return acc + (Number(item.coupon?.price || 0))*(Number(item.quantity || 0));
        },0);
    }

    let platformFee = subtotal / 20;
    let total = subtotal + platformFee;

    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log(formData);

        showPopup('Loader');

        if(type !== 'buyNow'){
            axios.post(`http://localhost:5050/cb/v1/api/orders`,{
                items,
                mode: 'cart'

            },{
                headers: {
                    authorization: localStorage.getItem('token')
                }
            }).then(res=>{

                console.log(res);
                const mailingCoupons = items.map(item => item.coupon);
                axios.post('http://localhost:5059/cb/v1/api/services/mail',{
                    to: formData.email,
                    subject: "Booking Confirmed!",
                    html: bookingEmail(user.name,res.data.data._id,mailingCoupons)

                }).then(async()=>{
                    const response = await showPopup('Booking-Confirmed',{bookingId: res.data.data._id});
                    if (!response) navigate('/coupons');
                    else navigate(`/users/${user._id}`);

                }).catch(err => {
                    hidePopup();
                    console.log(err.response);
                });

            }).catch(err => {
                hidePopup();
                console.log(err.response);
            });

        }else{
            axios.post(`http://localhost:5050/cb/v1/api/orders`,{
                items:[
                    {
                        coupon: items[0],
                        quantity: 1
                    }
                ],
                mode: 'buyNow'

            },{
                headers: {
                    authorization: localStorage.getItem('token')
                }
            }).then(res=>{

                console.log(res);
                axios.post('http://localhost:5059/cb/v1/api/services/mail',{
                    to: formData.email,
                    subject: "Booking Confirmed!",
                    html: bookingEmail(user.name,res.data.data._id,items)

                }).then(async()=>{
                    const response = await showPopup('Booking-Confirmed',{bookingId: res.data.data._id});
                    if (!response) navigate('/coupons');
                    else navigate(`/users/${user._id}`);

                }).catch(err=>{
                    hidePopup();
                    console.log(err.response);
                })

            }).catch(err => {
                hidePopup();
                console.log(err.response);
            });
        }
        
        setFormData({
            email: '',
            name: '',
            number: '',
            expiryDate: '',
            cvv: ''
        });
    }

    const handleChange = (e) => {
        setFormData((prevData)=>{
            return {...prevData,
            [e.target.name] : e.target.value}
        })
    }

    useEffect(()=>{

        if(type === 'buyNow'){
            axios.get(`http://localhost:5050/cb/v1/api/coupons/${couponId}`,{
                headers:{
                    authorization: localStorage.getItem('token')
                }
            }).then(res=>{
                setItems([{
                    ...res.data.data
                }])
            }).catch(err=>{
                console.log(err.response)
            });
        }
        else{
            axios.get(`http://localhost:5050/cb/v1/api/cart`,{
                headers:{
                    authorization: localStorage.getItem('token')
                }
            }).then(res=>{
                setItems(res.data.data.items);
            }).catch(err=>{
                console.log(err.response);
            })
        }

    },[]);
  return (
    <div className="payment-container">
        <div className="payment-header">
            <p className='section-heading'>Make Payment</p>
            <p className='sub-heading'>Pay securely with CouponBridge</p>
        </div>
        <div className="payment-body">
            <form className="payment-details text" onSubmit={handleSubmit}>
                <p style={{display:'flex', alignItems:'center', marginBottom:'1.5rem'}}  className='heading'>
                    <PaymentOutlinedIcon sx={{marginRight:'1rem'}}/>
                    <span>Payment Details</span>
                </p>

                <label
                    htmlFor='email'

                >
                    Email
                </label>
                <p>The coupons will be sent to this email</p>
                <input
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required

                />
                

                <label
                    htmlFor='name'

                >
                    Name on Card
                </label>
                <input
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required

                />

                <label
                    htmlFor='number'

                >
                    Card Number
                </label>
                <input
                    id='number'
                    type='number'
                    name='number'
                    value={formData.number}
                    onChange={handleChange}
                    required

                />

                <div className="payment-debit-card-meta">
                    <div className="payment-debit-card-meta-item">
                        <label
                            htmlFor='expiryDate'

                        >
                            Expiry Date
                        </label>
                        <input
                            id='expiryDate'
                            name='expiryDate'
                            value={formData.expiryDate}
                            onChange={handleChange}
                            required

                        />
                    </div>

                    <div className="payment-debit-card-meta-item">
                        <label
                            htmlFor='cvv'

                        >
                            CVV
                        </label>
                        <input
                            id='cvv'
                            name='cvv'
                            type='number'
                            value={formData.cvv}
                            onChange={handleChange}
                            required

                        />
                    </div>

                    
                </div>
                <p style={{display: 'flex', alignItems: 'center'}}>
                    <LockOutlinedIcon sx={{marginRight:'0.5rem'}}/>
                    <span>Your payment information is secure</span>
                </p>

                <Button 
                    variant="contained"
                    type='submit'
                    className='payment-submit'
                >
                    <span>Pay</span>
                    <CurrencyRupeeOutlinedIcon sx={{fontSize:'1rem'}}/>
                    <span>{total}</span>
                </Button>
                

            </form>
            <div className="payment-summary caption">
                <p className='heading'>Order Summary</p>

                <div className="payment-summary-cart-cards text">
                    {type === 'buyNow' ?
                    items.map(item=>{
                        return <PaymentCard key={item._id} data={item} quantity={1}/>
                    })
                    :
                    items.map(item=>{
                        return <PaymentCard key={item.coupon._id} data={item.coupon} quantity={item.quantity}/>
                    })
                    }

                </div>

                <div className="payment-summary-fee">
                    <div className='payment-summary-totals'>
                        <span>Subtotal</span>
                        <div className="payment-summary-cost text">
                            <CurrencyRupeeOutlinedIcon/>
                            <span>{subtotal}</span>
                        </div>
                    </div>

                    <div className='payment-summary-totals'>
                        <span>Platform Fee (5%)</span>
                        <div className="payment-summary-cost text">
                            <CurrencyRupeeOutlinedIcon/>
                            <span>{platformFee}</span>
                        </div>
                    </div>

                    <div className='payment-summary-totals lg-heading' style={{borderTop:'2px solid var(--color-border)', margin:'0.5rem 0rem', padding: '1rem 0'}}>
                        <span>Total</span>
                        <div className="payment-summary-cost">
                            <CurrencyRupeeOutlinedIcon/>
                            <span>{total}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  );
};

export default Main;