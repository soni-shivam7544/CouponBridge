import './Main.css'
import CouponCard from '../../components/CouponCard';

import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [favourites, setFavourites] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get(`http://localhost:5050/cb/v1/api/customers/${id}`)
    .then(res=>{
      console.log(res);
      setFavourites(res.data.data.savedCoupons);
    }).catch(err=>{
      console.log(err.response);
    })
  },[user]);
  return (
    <div className='favourites-container'>
      <div className="favourites-header">
        <FavoriteBorderIcon sx={{color:'var(--color-accent)', backgroundColor:'var(--color-primary-light)', padding:'1rem', borderRadius:'50%', marginRight:'1rem'}}/>
        <div className="favourites-title">
          <p className='section-heading'>Favourites</p>
          <p className='sub-heading'>{favourites.length} coupons saved</p>
        </div>
      </div>
      {favourites.length > 0
      ?
      <div className="favourites-coupon-list">
      {favourites.map((favourite)=>{
        return <CouponCard data = {favourite} key={favourite._id}/>
      })}
      </div>
      :
      <div className="favourites-coupon-not-found text">
        <div className="favourites-coupons-alt">
          <p className='lg-heading'>No Coupon Saved</p>
          <Button variant="contained" onClick={() => navigate('/coupons')}>Browse Coupons</Button>
        </div>
      </div>
      }
    </div>
  );
};

export default Main;