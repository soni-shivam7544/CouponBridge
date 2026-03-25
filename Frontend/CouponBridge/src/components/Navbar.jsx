import './Navbar.css';
import '../index.css';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SellIcon from '@mui/icons-material/Sell';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    
    const navigate = useNavigate();

    const storedUser = localStorage.getItem('user');

    const user = storedUser ? JSON.parse(storedUser) : null;

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        navigate('/login');
    }
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

                        { user ? 
                            <>
                                <div id="user" className='lg-heading'> {user.name[0].toUpperCase()}</div>
                                <Button variant="contained" sx={{borderRadius: '2rem'}} onClick={ handleLogout }>Logout</Button>
                            </>
                        : 
                            <>
                                
                                <div className="login" onClick={ ()=> navigate('/login')}>Login</div>
                                <Button variant="contained" className='signup' onClick={ ()=> navigate('/signup')}>Get Started</Button>
                            </>
                        }
                        
                    </div>
                </div>
            </div>
            <div className="nav-background"></div>
        </>
    )
}

export default Navbar;