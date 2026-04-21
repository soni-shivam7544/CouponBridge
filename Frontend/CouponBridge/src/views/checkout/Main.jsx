import './Main.css';

import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';

import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import PaymentCard from '../../components/PaymentCard';

const Main = () => {
    const [items,setItems] = useState([]);
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type');
    const couponId = searchParams.get('couponId');

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
            <form className="payment-details text">
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

                />
                

                <label
                    htmlFor='name'

                >
                    Name on Card
                </label>
                <input
                    id='name'
                    name='name'

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