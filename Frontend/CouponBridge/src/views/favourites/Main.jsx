import './Main.css'
import CouponCard from '../../components/CouponCard';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Main = () => {
  return (
    <div className='favourites-container'>
      <div className="favourites-header">
        <FavoriteBorderIcon sx={{color:'var(--color-accent)', backgroundColor:'var(--color-primary-light)', padding:'1rem', borderRadius:'50%', marginRight:'1rem'}}/>
        <div className="favourites-title">
          <p className='section-heading'>Favourites</p>
          <p className='sub-heading'>5 coupons saved</p>
        </div>
      </div>
      <div className="favourites-coupon-list">
        <CouponCard/>
        <CouponCard/>
        <CouponCard/>
        <CouponCard/>
        <CouponCard/>
        <CouponCard/>
        <CouponCard/>
      </div>
    </div>
  );
};

export default Main;