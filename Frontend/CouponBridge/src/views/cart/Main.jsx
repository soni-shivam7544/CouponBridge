import './Main.css'
import shoe from '../../assets/images/shoe.png'

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Button from '@mui/material/Button';

const Main = () => {
  return (
    <div className='cart-container'>
      <div className="cart-header">
        <ShoppingCartOutlinedIcon sx={{color:'var(--color-accent)', backgroundColor:'var(--color-primary-light)', padding:'1rem', borderRadius:'50%', marginRight:'1rem'}}/>
        <div className="cart-title">
          <p className='section-heading'>Your Cart</p>
          <p className='sub-heading'>5 items in your cart</p>
        </div>
      </div>
      <div className="cart-body">
        <div className="cart-coupon-list">
          <div className="cart-card">
            <div className="cart-card-items">
              <div className="cart-card-img">
                <img src={shoe}/>
              </div>
              <div className="cart-card-details text">
                <p style={{color:'var(--color-accent)'}}>Uber Eats</p>
                <p className='heading'><b>15% Off Furniture</b></p>
                <div className="cart-card-discount">
                  <CurrencyRupeeOutlinedIcon/>
                  <span>15 off</span>
                </div>
                <div className="cart-card-cost lg-heading">
                  <CurrencyRupeeOutlinedIcon/>
                  <span>8</span>
                </div>
              </div>
            </div>
            <RemoveShoppingCartOutlinedIcon sx={{color: 'var(--color-danger)', cursor:'pointer', padding: '0.5rem', borderRadius:'50%', ":hover": { backgroundColor:'var(--color-bg)'}}}/>
          </div>

          <div className="cart-card">
            <div className="cart-card-items">
              <div className="cart-card-img">
                <img src={shoe}/>
              </div>
              <div className="cart-card-details text">
                <p style={{color:'var(--color-accent)'}}>Uber Eats</p>
                <p className='heading'><b>15% Off Furniture</b></p>
                <div className="cart-card-discount">
                  <CurrencyRupeeOutlinedIcon/>
                  <span>15 off</span>
                </div>
                <div className="cart-card-cost lg-heading">
                  <CurrencyRupeeOutlinedIcon/>
                  <span>8</span>
                </div>
              </div>
            </div>
            <RemoveShoppingCartOutlinedIcon sx={{color: 'var(--color-danger)', cursor:'pointer', padding: '0.5rem', borderRadius:'50%', ":hover": { backgroundColor:'var(--color-bg)'}}}/>
          </div>

          <div className="cart-card">
            <div className="cart-card-items">
              <div className="cart-card-img">
                <img src={shoe}/>
              </div>
              <div className="cart-card-details text">
                <p style={{color:'var(--color-accent)'}}>Uber Eats</p>
                <p className='heading'><b>15% Off Furniture</b></p>
                <div className="cart-card-discount">
                  <CurrencyRupeeOutlinedIcon/>
                  <span>15 off</span>
                </div>
                <div className="cart-card-cost lg-heading">
                  <CurrencyRupeeOutlinedIcon/>
                  <span>8</span>
                </div>
              </div>
            </div>
            <RemoveShoppingCartOutlinedIcon sx={{color: 'var(--color-danger)', cursor:'pointer', padding: '0.5rem', borderRadius:'50%', ":hover": { backgroundColor:'var(--color-bg)'}}}/>
          </div>

          <div className="cart-card">
            <div className="cart-card-items">
              <div className="cart-card-img">
                <img src={shoe}/>
              </div>
              <div className="cart-card-details text">
                <p style={{color:'var(--color-accent)'}}>Uber Eats</p>
                <p className='heading'><b>15% Off Furniture</b></p>
                <div className="cart-card-discount">
                  <CurrencyRupeeOutlinedIcon/>
                  <span>15 off</span>
                </div>
                <div className="cart-card-cost lg-heading">
                  <CurrencyRupeeOutlinedIcon/>
                  <span>8</span>
                </div>
              </div>
            </div>
            <RemoveShoppingCartOutlinedIcon sx={{color: 'var(--color-danger)', cursor:'pointer', padding: '0.5rem', borderRadius:'50%', ":hover": { backgroundColor:'var(--color-bg)'}}}/>
          </div>

          <div className="cart-card">
            <div className="cart-card-items">
              <div className="cart-card-img">
                <img src={shoe}/>
              </div>
              <div className="cart-card-details text">
                <p style={{color:'var(--color-accent)'}}>Uber Eats</p>
                <p className='heading'><b>15% Off Furniture</b></p>
                <div className="cart-card-discount">
                  <CurrencyRupeeOutlinedIcon/>
                  <span>15 off</span>
                </div>
                <div className="cart-card-cost lg-heading">
                  <CurrencyRupeeOutlinedIcon/>
                  <span>8</span>
                </div>
              </div>
            </div>
            <RemoveShoppingCartOutlinedIcon sx={{color: 'var(--color-danger)', cursor:'pointer', padding: '0.5rem', borderRadius:'50%', ":hover": { backgroundColor:'var(--color-bg)'}}}/>
          </div>

          <div className="cart-card">
            <div className="cart-card-items">
              <div className="cart-card-img">
                <img src={shoe}/>
              </div>
              <div className="cart-card-details text">
                <p style={{color:'var(--color-accent)'}}>Uber Eats</p>
                <p className='heading'><b>15% Off Furniture</b></p>
                <div className="cart-card-discount">
                  <CurrencyRupeeOutlinedIcon/>
                  <span>15 off</span>
                </div>
                <div className="cart-card-cost lg-heading">
                  <CurrencyRupeeOutlinedIcon/>
                  <span>8</span>
                </div>
              </div>
            </div>
            <RemoveShoppingCartOutlinedIcon sx={{color: 'var(--color-danger)', cursor:'pointer', padding: '0.5rem', borderRadius:'50%', ":hover": { backgroundColor:'var(--color-bg)'}}}/>
          </div>

          <div className="cart-card">
            <div className="cart-card-items">
              <div className="cart-card-img">
                <img src={shoe}/>
              </div>
              <div className="cart-card-details text">
                <p style={{color:'var(--color-accent)'}}>Uber Eats</p>
                <p className='heading'><b>15% Off Furniture</b></p>
                <div className="cart-card-discount">
                  <CurrencyRupeeOutlinedIcon/>
                  <span>15 off</span>
                </div>
                <div className="cart-card-cost lg-heading">
                  <CurrencyRupeeOutlinedIcon/>
                  <span>8</span>
                </div>
              </div>
            </div>
            <RemoveShoppingCartOutlinedIcon sx={{color: 'var(--color-danger)', cursor:'pointer', padding: '0.5rem', borderRadius:'50%', ":hover": { backgroundColor:'var(--color-bg)'}}}/>
          </div>
        </div>
        <div className="cart-summary caption">
          <div className="cart-order-summary">
            <p className='heading' style={{marginBottom:'1.5rem'}}>Order Summary</p>
            <p className="cart-summary-item">
              <span>Subtotal</span>
              <div className="cart-icon-contained text">
                <CurrencyRupeeOutlinedIcon/>
                <span>77.00</span>
              </div>
            </p>
            <p className="cart-summary-item">
              <span>Platform Fee (5%)</span>
              <div className="cart-icon-contained text">
                <CurrencyRupeeOutlinedIcon/>
                <span>3.85</span>
              </div>
            </p>
          </div>
          <div className="cart-order-total">
            <div className="cart-summary-item heading" style={{borderTop: '2px solid var(--color-border)', marginTop: '0.5rem', padding: '0.5rem 0'}}>
              <span>Total</span>
              <div className="cart-icon-contained">
                <CurrencyRupeeOutlinedIcon/>
                <span>80.85</span>
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
            <Button variant="contained" sx={{width:'100%', borderRadius: '0.5rem'}}>
              <span>Proceed to Checkout</span>
              <ArrowForwardIcon sx={{marginLeft: '1rem'}}/>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;