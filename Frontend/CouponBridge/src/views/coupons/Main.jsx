import '../../index.css';
import './Main.css';
import CouponCard from '../../components/CouponCard.jsx';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Main = () => {

  const navigate = useNavigate();

  localStorage.removeItem('alert');

  const [coupons, setCoupons] = useState([]);
  const [formData, setFormData] = useState({ search: ''});
  

  const handleChange = (event) => {
    setFormData( {search: event.target.value});
  }


  useEffect ( () => {
    axios.get(`http://localhost:5050/cb/v1/api/coupons/search?query=${formData.search}`)
      .then(res => {
        setCoupons(res.data.data);
      })
      .catch(err => console.log(err));
  }, [formData]);

  return (
    <>
      <div className="main">
        <div className="navigate-back sub-heading" onClick={()=> navigate('/')}>
                <ArrowBackIcon sx={{marginRight: '1rem'}}/>
                <p>Back to Home</p>
        </div>
        <div className="coupons-header">
          <div className="coupons-title section-heading">
            Browse Coupons
          </div>
          <div className="coupons-subtitle sub-heading">
            Discover verified discount codes from top brands
          </div>
        </div>
        <div className="coupons-search">
          <form className="coupons-searchbar sub-heading">
            <input className='search' name='search' value={formData.search} onChange={handleChange} placeholder='Search Merchant, Provider, Category'/>
            <Button type='submit' className='search-button' variant="contained"><SearchIcon sx={{fontSize: 35, padding: '0.2rem', width: '4rem'}}/></Button>
          </form>
        </div>
        <div className="coupons-list">
          { coupons.map( coupon => {
            return <CouponCard key={ coupon._id} data={ coupon }/>
          } ) }
        </div>
      </div>
    </>
  )
}

export default Main