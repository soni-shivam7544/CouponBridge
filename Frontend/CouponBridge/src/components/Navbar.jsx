import './Navbar.css';
import '../index.css';
import Button from '@mui/material/Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LogoImage from '../assets/images/coupon_bridge_logo.png';
import { useAuth } from '../hooks/useAuth';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import { useCart } from '../hooks/useCart';
import { useAlert } from '../hooks/useAlert';
import { Link } from 'react-router-dom';

function Navbar() {
    
    const navigate = useNavigate();
    const { user, logout } = useAuth();
    const { cartCount} = useCart();
    const { showAlert } = useAlert();
    const {themeMode, setThemeMode} = useTheme(); 
    const role = localStorage.getItem('role');

    const handleSelling = () => {
        if(!user || role === 'customer'){
            showAlert({
                type: 'info',
                message: 'Login as a seller to start selling.'
            });
            navigate('/login');
        }
        else navigate('/publish');
    }

    const handleLogout = () => {
        logout();
        navigate('/login');
    }

    const handleThemeToggle = () => {
        const body = document.body;
        const isDark = body.classList.contains('dark');
        if( isDark ) {
            body.classList.remove('dark');
            localStorage.setItem('themeMode','light');
            setThemeMode(true);
        } else {
            body.classList.add('dark');
            localStorage.setItem('themeMode', 'dark');
            setThemeMode(false);
        }
        
    }
    const handleShoppingCart = () => {
        if(user) navigate('/cart');
    }

    const handleCategory = () => {
        if (location.pathname === "/") {
        const el = document.getElementById("category-section");
        el?.scrollIntoView({ behavior: "smooth" });
        } else {
        sessionStorage.setItem("scrollTo", "categories");
        navigate("/");
        }
    }

    useEffect(() => {
        const storedThemeMode = localStorage.getItem('themeMode');
        const body = document.body;

        if(storedThemeMode === 'dark'){
            body.classList.add('dark');
            setThemeMode(false);
        } else{
            body.classList.remove('dark');
            setThemeMode(true);
        }
        
    },[]);

    return (
        <>
            <div className = "nav">
                <div className = "nav-items heading">
                    <div className="logo" onClick={ () => navigate('/')}> 
                        <img src={LogoImage} alt='image'/>
                    </div>
                    <div className="menu-items sub-heading">
                        <Button sx={{color:'var(--color-text-secondary)'}} variant="text" className="browse-coupons" onClick={ () => navigate('/')}>Home</Button>
                        <Button sx={{color:'var(--color-text-secondary)'}} variant="text" className="browse-coupons" onClick={ () => navigate('/coupons')}>Browse Coupons</Button>
                        <Button sx={{color:'var(--color-text-secondary)'}} variant="text" className="merchants" onClick={ handleSelling }>Sell Coupons</Button>
                        <Button sx={{color:'var(--color-text-secondary)'}} variant="text" className="providers">Providers</Button>
                        <Button sx={{color:'var(--color-text-secondary)'}} variant="text" className="providers" onClick={handleCategory}>Categories</Button>
                        <Button sx={{color:'var(--color-text-secondary)'}} variant="text" className="how-it-works">How it works</Button>
                    </div>
                    <div className="user-items text">
                        { themeMode ? <DarkModeIcon sx={{marginRight:'1rem', cursor:'pointer', color: 'var(--color-primary-light)', fontSize:'1.6rem'}} onClick={handleThemeToggle}/> : <LightModeIcon sx={{marginRight:'1rem', cursor:'pointer', color:'var(--color-highlight)', fontSize: '1.6rem'}} onClick={handleThemeToggle}/>}
                        
                        {user && role === 'customer' && <><ShoppingCartOutlinedIcon sx={{color:"var(--color-text-secondary)", fontSize:'1.5rem'}}  onClick={handleShoppingCart} className="cart"/>
                        {cartCount > 0 ?<span className='cart-badge'>{cartCount}</span>: null}</>}
                        { user ? 
                            (user && user.picture) ?
                            <div className="user user-image" onClick={()=>navigate(`/users/${user._id}`)}>
                                <img src={user.picture} alt='img'/>
                            </div>
                            :
                            <div id="user" className='user heading' onClick={()=>navigate(`/users/${user._id}`)}> <b>{user.name[0].toUpperCase()}</b></div>
                        : 
                            <>
                                <Button className='login' variant="text" onClick={ ()=> navigate('/login')} sx={{marginRight: '0.5rem', borderRadius:'2rem', color:'var(--color-text-primary)'}}>Login</Button>
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