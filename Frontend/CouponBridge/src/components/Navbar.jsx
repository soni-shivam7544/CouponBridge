import './Navbar.css';
import '../index.css';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SellIcon from '@mui/icons-material/Sell';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    
    const navigate = useNavigate();
    return (
        <>
            <div className = "nav">
                <div className = "nav-items heading">
                    <div className="logo" onClick={ () => navigate('/')}> 
                        <SellIcon color="primary" className="logo-icon" fontSize="large"/>
                        <div className="logo-name lg-heading">CouponBridge</div>
                    </div>
                    <div className="menu-items sub-heading">
                        <Button variant="text" className="browse-coupons" onClick={ () => navigate('/coupons')}>Browse Coupons</Button>
                        <Button variant="text" className="merchants">Merchants</Button>
                        <Button variant="text" className="providers">Providers</Button>
                        <Button variant="text" className="how-it-works">How it works</Button>
                    </div>
                    <div className="user-items sub-heading">
                        <AddShoppingCartIcon color="primary" className="cart"/>
                        <div className="login">Login</div>
                        <Button variant="contained" className='signup'>Get Started</Button>
                    </div>
                </div>
            </div>
            <div className="nav-background"></div>
        </>
    )
}

export default Navbar;