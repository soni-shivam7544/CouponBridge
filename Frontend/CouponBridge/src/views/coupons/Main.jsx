import '../../index.css';
import './Main.css';
import CouponCard from '../../components/CouponCard.jsx';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import VerifiedIcon from '@mui/icons-material/Verified';
import ToggleButton from '@mui/material/ToggleButton';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Main = () => {

  const navigate = useNavigate();

  localStorage.removeItem('alert');

  const [coupons, setCoupons] = useState([]);
  const [formData, setFormData] = useState({ search: ''});
  const [selected, setSelected] = useState(false);
  

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
        <div className="navigate-back text" onClick={()=> navigate('/')}>
                <ArrowBackIcon sx={{marginRight: '0.5rem'}}/>
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
          <form className="coupons-searchbar text">
            <SearchIcon sx={{marginLeft:'0.5rem'}}/>
            <input className='search' name='search' value={formData.search} onChange={handleChange} placeholder='Search Merchant, Provider, Category'/>
          </form>
          <div className="coupons-search-filter">
            <select className="coupons-search-category text">

              <option>All Categories</option>
              <option>Food</option>
              <option>Travel</option>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Health</option>
              <option>Entertainment</option>
              <option>Home</option>

            </select>

            <select className="coupons-search-category text">

              <option>Newest</option>
              <option>Price: Low To High</option>
              <option>Price: High To Low</option>

            </select>

            <div className="coupons-search-verified-toggle">
              <ToggleButton
                value="check"
                selected={selected}
                onChange={() => setSelected((prevSelected) => !prevSelected)}
                sx={{ borderRadius:'1rem', border: '2px solid var(--color-border)', padding: '0.8rem', marginLeft: '0.5rem', backgroundColor:'var(--color-surface)'}}
              >
                <VerifiedIcon className='text' sx={{marginRight:'0.2rem', fontSize:'1.2rem'}} />
                <span className='text'>Verified Only</span>
              </ToggleButton>

            </div>
          </div>
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