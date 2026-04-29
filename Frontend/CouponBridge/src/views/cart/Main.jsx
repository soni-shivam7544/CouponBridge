import './Main.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Button from '@mui/material/Button';
import CartCard from '../../components/CartCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { useCart } from '../../hooks/useCart';

const Main = () => {

  const [cartItems,setCartItems] = useState([]);
  const {fetchCartCount} = useCart();

  const navigate = useNavigate();

  const subtotal = cartItems && cartItems.reduce((acc, item) => {
    return acc + (Number(item.coupon?.price || 0))*(Number(item.quantity || 0));
  }, 0);

  const platformFee = subtotal / 20;
  const total = subtotal + platformFee;

  const fetchCartItems = () => {
    axios.get('http://localhost:5050/cb/v1/api/cart',{
      headers:{
        authorization: localStorage.getItem('token')
      }
    }).then(res => {
      const ItemsArray = res.data.data.items;
      
      setCartItems(res.data.data.items);
    }).catch(err => {
      console.log(err.response);
    });
  }

  const handleCartRemove = (couponId) => {
    axios.delete(`http://localhost:5050/cb/v1/api/cart/coupons/${couponId}`,{
        headers:{
            authorization: localStorage.getItem('token')
        }
    }).then(res=> {
        fetchCartItems();
        fetchCartCount();

    }).catch(err => {
        console.log(err.response);
    });

  }

  const handleCartChange = (couponId, quantity) => {
      axios.put(`http://localhost:5050/cb/v1/api/cart`,{
        couponId,
        quantity
      },{
          headers:{
              authorization: localStorage.getItem('token')
          }
      }).then(res=> {
          fetchCartItems();
      }).catch(err => {
          console.log(err.response);
      });
  }

  useEffect(()=>{

    fetchCartItems();

  },[]);
  return (
    <div className='cart-container'>
      <div className="cart-header">
        <ShoppingCartOutlinedIcon sx={{color:'var(--color-accent)', backgroundColor:'var(--color-primary-light)', padding:'1rem', borderRadius:'50%', marginRight:'1rem'}}/>
        <div className="cart-title">
          <p className='section-heading'>Your Cart</p>
          <p className='sub-heading'>{cartItems && cartItems.length} items in your cart</p>
        </div>
      </div>
      <div className="cart-body">
        {cartItems.length > 0
        ?
        <>
        <div className="cart-coupon-list">

        {cartItems && cartItems.map( item => {
          return <CartCard key={item._id} data={item.coupon} onRemove = {handleCartRemove} onChange = {handleCartChange} quantity = {item.quantity}/>
        })}

        </div>

        <div className="cart-summary caption">
          <div className="cart-order-summary">
            <p className='heading' style={{marginBottom:'1.5rem'}}>Order Summary</p>
            <div className="cart-summary-item">
              <span>Subtotal</span>
              <div className="cart-icon-contained text">
                <CurrencyRupeeOutlinedIcon/>
                <span>{subtotal}</span>
              </div>
            </div>
            <div className="cart-summary-item">
              <span>Platform Fee (5%)</span>
              <div className="cart-icon-contained text">
                <CurrencyRupeeOutlinedIcon/>
                <span>{platformFee}</span>
              </div>
            </div>
          </div>
          <div className="cart-order-total">
            <div className="cart-summary-item heading" style={{borderTop: '2px solid var(--color-border)', marginTop: '0.5rem', padding: '0.5rem 0'}}>
              <span>Total</span>
              <div className="cart-icon-contained">
                <CurrencyRupeeOutlinedIcon/>
                <span>{total}</span>
              </div>
            </div>
            <div className="cart-order-info">
              <div className="cart-order-info-item cart-icon-contained">
                <ShieldOutlinedIcon sx={{marginRight:'0.5rem', color:'var(--color-success)'}}/>
                <span>Secure checkout</span>
              </div>
              <div className="cart-order-info-item cart-icon-contained">
                <SellOutlinedIcon sx={{marginRight:'0.5rem', color:'var(--color-accent)'}}/>
                <span>Verified coupons</span>
              </div>
            </div>
            <Button variant="contained" sx={{width:'100%', borderRadius: '0.5rem'}} onClick={()=>navigate('/checkout')}>
              <span>Proceed to Checkout</span>
              <ArrowForwardIcon sx={{marginLeft: '1rem'}}/>
            </Button>
          </div>
        </div>

        </>
        :
        <div className="cart-coupon-not-found text">
          <div className="cart-coupons-alt">
            <p className='lg-heading'>Your Cart Is Empty</p>
            <Button variant="contained" onClick={() => navigate('/coupons')}>Browse Coupons</Button>
          </div>
        </div>
        }
        
      </div>
    </div>
  );
};

export default Main;