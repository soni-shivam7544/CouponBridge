import './Main.css';

import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import pitza from '../../assets/images/pitza.png';

import Button from '@mui/material/Button';

const Main = () => {
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
                    <span>80.85</span>
                </Button>
                

            </form>
            <div className="payment-summary caption">
                <p className='heading'>Order Summary</p>

                <div className="payment-summary-cart-cards text">
                    <div className="payment-summary-cart-card">
                        <div className="payment-cart-card-img">
                            <img src={pitza} alt='img'/>
                        </div>
                        <div className="payment-cart-card-details">
                            <div className="payment-cart-card-item-detail">
                                <p className='heading'>Free Delivery for 1 Month</p>
                                <p className='sub-heading'>Uber Eats</p>
                            </div>
                            <div className="payment-summary-cost heading">
                                <CurrencyRupeeOutlinedIcon/>
                                <span>23</span>
                            </div>
                        </div>
                    </div>

                    <div className="payment-summary-cart-card">
                        <div className="payment-cart-card-img">
                            <img src={pitza} alt='img'/>
                        </div>
                        <div className="payment-cart-card-details">
                            <div className="payment-cart-card-item-detail">
                                <p className='heading'>Free Delivery for 1 Month</p>
                                <p className='sub-heading'>Uber Eats</p>
                            </div>
                            <div className="payment-summary-cost heading">
                                <CurrencyRupeeOutlinedIcon/>
                                <span>23</span>
                            </div>
                        </div>
                    </div>

                    <div className="payment-summary-cart-card">
                        <div className="payment-cart-card-img">
                            <img src={pitza} alt='img'/>
                        </div>
                        <div className="payment-cart-card-details">
                            <div className="payment-cart-card-item-detail">
                                <p className='heading'>Free Delivery for 1 Month</p>
                                <p className='sub-heading'>Uber Eats</p>
                            </div>
                            <div className="payment-summary-cost heading">
                                <CurrencyRupeeOutlinedIcon/>
                                <span>23</span>
                            </div>
                        </div>
                    </div>

                    <div className="payment-summary-cart-card">
                        <div className="payment-cart-card-img">
                            <img src={pitza} alt='img'/>
                        </div>
                        <div className="payment-cart-card-details">
                            <div className="payment-cart-card-item-detail">
                                <p className='heading'>Free Delivery for 1 Month</p>
                                <p className='sub-heading'>Uber Eats</p>
                            </div>
                            <div className="payment-summary-cost heading">
                                <CurrencyRupeeOutlinedIcon/>
                                <span>23</span>
                            </div>
                        </div>
                    </div>

                    <div className="payment-summary-cart-card">
                        <div className="payment-cart-card-img">
                            <img src={pitza} alt='img'/>
                        </div>
                        <div className="payment-cart-card-details">
                            <div className="payment-cart-card-item-detail">
                                <p className='heading'>Free Delivery for 1 Month</p>
                                <p className='sub-heading'>Uber Eats</p>
                            </div>
                            <div className="payment-summary-cost heading">
                                <CurrencyRupeeOutlinedIcon/>
                                <span>23</span>
                            </div>
                        </div>
                    </div>

                    <div className="payment-summary-cart-card">
                        <div className="payment-cart-card-img">
                            <img src={pitza} alt='img'/>
                        </div>
                        <div className="payment-cart-card-details">
                            <div className="payment-cart-card-item-detail">
                                <p className='heading'>Free Delivery for 1 Month</p>
                                <p className='sub-heading'>Uber Eats</p>
                            </div>
                            <div className="payment-summary-cost heading">
                                <CurrencyRupeeOutlinedIcon/>
                                <span>23</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="payment-summary-fee">
                    <p className='payment-summary-totals'>
                        <span>Subtotal</span>
                        <div className="payment-summary-cost text">
                            <CurrencyRupeeOutlinedIcon/>
                            <span>77.00</span>
                        </div>
                    </p>

                    <p className='payment-summary-totals'>
                        <span>Platform Fee (5%)</span>
                        <div className="payment-summary-cost text">
                            <CurrencyRupeeOutlinedIcon/>
                            <span>3.85</span>
                        </div>
                    </p>

                    <p className='payment-summary-totals lg-heading' style={{borderTop:'2px solid var(--color-border)', margin:'0.5rem 0rem', padding: '1rem 0'}}>
                        <span>Total</span>
                        <div className="payment-summary-cost">
                            <CurrencyRupeeOutlinedIcon/>
                            <span>80.85</span>
                        </div>
                    </p>
                </div>
            </div>
        </div>
        
    </div>
  );
};

export default Main;