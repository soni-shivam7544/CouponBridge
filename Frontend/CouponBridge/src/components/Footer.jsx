import './Footer.css';
import '../index.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LogoImage from '../assets/images/coupon_bridge_logo.png'

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer-about">
                    <div className="footer-desc">
                        <div className="footer-desc-logo">
                            <img src={LogoImage} alt='logo-image'/>
                        </div>
                        <p className="text footer-desc-content">The trusted marketplace for verified discount coupons. Save money on your favorite brands.</p>
                    </div>
                    <div className="footer-links">
                        <div className="footer-links-column">
                            <p className="text footer-links-heading">Product</p>
                            <p className="footer-link footer-links-items">Browse Coupons</p>
                            <p className="footer-link footer-links-items">Merchants</p>
                            <p className="footer-link footer-links-items">How it Works</p>
                            <p className="footer-link footer-links-items">Pricing</p>
                        </div>
                        <div className="footer-links-column">
                            <p className="text footer-links-heading">For Sellers</p>
                            <p className="footer-link footer-links-items">Become a Seller</p>
                            <p className="footer-link footer-links-items">Seller Guide</p>
                            <p className="footer-link footer-links-items">Seller Dashboard</p>
                            <p className="footer-link footer-links-items">Seller FAQ</p>
                        </div>
                        <div className="footer-links-column">
                            <p className="text footer-links-heading">Company</p>
                            <p className="footer-link footer-links-items">About Us</p>
                            <p className="footer-link footer-links-items">Blog</p>
                            <p className="footer-link footer-links-items">Careers</p>
                            <p className="footer-link footer-links-items">Contact</p>
                        </div>
                        <div className="footer-links-column">
                            <p className="text footer-links-heading">Legal</p>
                            <p className="footer-link footer-links-items">Privacy Policy</p>
                            <p className="footer-link footer-links-items">Terms of Service</p>
                            <p className="footer-link footer-links-items">Cookie Policy</p>
                        </div>
                    </div>
                </div>
                <div className="footer-social">
                    <div className="caption footer-social-content">2026 CouponBridge. All rights reserved.</div>
                    <div className="text footer-social-links">
                        <TwitterIcon className="footer-icons"/>
                        <GitHubIcon className="footer-icons"/>
                        <InstagramIcon className="footer-icons"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;