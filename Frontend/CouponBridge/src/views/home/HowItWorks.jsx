import './HowItWorks.css'

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import VerifiedIcon from '@mui/icons-material/Verified';


const HowItWorks = ({ howItWorksRef }) => {
    return(
        <div className='how-it-works text' id='how-it-works' ref={ howItWorksRef } style={{scrollMarginTop:'8rem'}}>
            <p className='section-heading'>How It Works</p>
            <p className='sub-heading'>Three simple steps to start saving</p>
            <div className="working-flow">
                <div className="flow-step">
                    <SearchIcon sx={{fontSize: '2.5rem'}}/>
                </div>
                <div className="flow-line"></div>
                <div className="flow-step">
                    <ShoppingCartOutlinedIcon sx={{fontSize: '2.5rem'}}/>
                </div>
                <div className="flow-line"></div>
                <div className="flow-step">
                    <VerifiedIcon sx={{fontSize: '2.5rem'}}/>
                </div>
            </div>

            <div className="working-flow-desc">
                <div className="flow-desc">
                    <p className='heading'><b>Browse Coupons</b></p>
                    <p>Search thousands of verified coupons from trusted sellers across various categories.</p>
                </div>
                <div className="flow-desc">
                    <p className='heading'><b>Purchase Securely</b></p>
                    <p>Buy coupons securely with our protected payment system and instant delivery.</p>
                </div>
                <div className="flow-desc">
                    <p className='heading'><b>Save & Enjoy</b></p>
                    <p>Use your coupon code and enjoy amazing discounts on your favorite brands.</p>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks;