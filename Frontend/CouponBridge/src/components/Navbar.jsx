import './Navbar.css';
import '../index.css';
import Button from '@mui/material/Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LogoImage from '../assets/images/coupon_bridge_logo.png';
import Alert from '@mui/material/Alert';
import {useAlert} from '../hooks/useAlert';
import { useAuth } from '../hooks/useAuth';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';

function Navbar() {
    
    const navigate = useNavigate();
    const { alert, showAlert } = useAlert();
    const { user, logout } = useAuth();
    const {themeMode, setThemeMode} = useTheme();

    const handleLogout = () => {
        logout();
        showAlert({type:'success', message:'Logout successful. Hope to see you soon.'});
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
                        <Button sx={{color:'var(--color-text-secondary)'}} variant="text" className="browse-coupons" onClick={ () => navigate('/coupons')}>Browse Coupons</Button>
                        <Button sx={{color:'var(--color-text-secondary)'}} variant="text" className="merchants">Sell Coupons</Button>
                        <Button sx={{color:'var(--color-text-secondary)'}} variant="text" className="providers">Providers</Button>
                        <Button sx={{color:'var(--color-text-secondary)'}} variant="text" className="providers">Categories</Button>
                        <Button sx={{color:'var(--color-text-secondary)'}} variant="text" className="how-it-works">How it works</Button>
                    </div>
                    <div className="user-items text">
                        { themeMode ? <DarkModeIcon sx={{marginRight:'1rem', cursor:'pointer', color: 'var(--color-primary-light)'}} onClick={handleThemeToggle}/> : <LightModeIcon sx={{marginRight:'1rem', cursor:'pointer', color:'var(--color-highlight)'}} onClick={handleThemeToggle}/>}
                        
                        <ShoppingCartOutlinedIcon sx={{color:"var(--color-highlight-hover)", fontSize:'1.5rem'}} className="cart"/>

                        { user ? 
                            <>
                                <div id="user" className='lg-heading'> {user.name[0].toUpperCase()}</div>
                                <Button variant="contained" sx={{borderRadius: '2rem'}} onClick={ handleLogout }>Logout</Button>
                            </>
                        : 
                            <>
                                <Button className='login' variant="text" onClick={ ()=> navigate('/login')} sx={{marginRight: '0.5rem', borderRadius:'2rem', color:'var(--color-text-primary)'}}>Login</Button>
                                <Button variant="contained" className='signup' onClick={ ()=> navigate('/signup')}>Get Started</Button>
                            </>
                        }
                        
                    </div>
                </div>
                { alert ? <Alert severity= {alert.type} className='alert-message'> {alert.message}</Alert>:null}
            </div>
            <div className="nav-background"></div>
            
            
            
        </>
    )
}

export default Navbar;