import './Footer.css';
import '../index.css';
import SellIcon from '@mui/icons-material/Sell';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer-about">
                    <div className="footer-desc">
                        <div className="footer-desc-logo">
                            <SellIcon color="primary" className="footer-desc-icon" fontSize="large"/>
                            <div className="lg-heading footer-desc-name">CouponBridge</div>
                        </div>
                        <p className="text footer-desc-content">The trusted marketplace for verified discount coupons. Save money on your favorite brands.</p>
                    </div>
                    <div className="footer-links">
                        <div className="footer-links-column">
                            <p className="sub-heading footer-links-heading">Product</p>
                            <p className="text footer-links-items">Browse Coupons</p>
                            <p className="text footer-links-items">Merchants</p>
                            <p className="text footer-links-items">How it Works</p>
                            <p className="text footer-links-items">Pricing</p>
                        </div>
                        <div className="footer-links-column">
                            <p className="sub-heading footer-links-heading">For Sellers</p>
                            <p className="text footer-links-items">Become a Seller</p>
                            <p className="text footer-links-items">Seller Guide</p>
                            <p className="text footer-links-items">Seller Dashboard</p>
                            <p className="text footer-links-items">Seller FAQ</p>
                        </div>
                        <div className="footer-links-column">
                            <p className="sub-heading footer-links-heading">Company</p>
                            <p className="text footer-links-items">About Us</p>
                            <p className="text footer-links-items">Blog</p>
                            <p className="text footer-links-items">Careers</p>
                            <p className="text footer-links-items">Contact</p>
                        </div>
                        <div className="footer-links-column">
                            <p className="sub-heading footer-links-heading">Legal</p>
                            <p className="text footer-links-items">Privacy Policy</p>
                            <p className="text footer-links-items">Terms of Service</p>
                            <p className="text footer-links-items">Cookie Policy</p>
                        </div>
                    </div>
                </div>
                <div className="footer-social">
                    <div className="footer-social-content">2026 CouponBridge. All rights reserved.</div>
                    <div className="footer-social-links">
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