import { useState } from "react";
import axios from "axios";
import Button from '@mui/material/Button';


import { useNavigate } from "react-router-dom";

import './Main.css';

const Main = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    code: "",
    price: "",
    discount: "",
    expirationDate: "",
    merchant: "",
    description: "",
    productId: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleClick = (e) => {
    axios.post('http://localhost:5050/cb/v1/api/coupons', formData, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
    .then(res => {
      console.log(res);
      localStorage.setItem('alert', JSON.stringify({ name: 'success', message: 'A new Coupon Created Successfully.'}));
      
      navigate('/coupons');

    })
    .catch(err => {
      console.log(err);
      localStorage.setItem('alert', JSON.stringify({ name: 'error', message: 'Authentication Failed! Login as Provider first.'}));
      
      navigate('/login');

    });

    


  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
  };

  return (
    <div id="publish-main">
        <div id='container' className="heading">
      <h2>Publish Your Coupon</h2><br/><br/>

      <form onSubmit={handleSubmit} id='form' className="sub-heading">
        <label htmlFor='code'>Code</label>
        <input
          type="text"
          id="code"
          className="form-input sub-heading"
          name="code"
          placeholder="Coupon Code"
          value={formData.code}
          onChange={handleChange}
        />
        <label htmlFor='product-id'>Product Id</label>
        <input
          type="number"
          id="product-id"
          className="form-input sub-heading"
          name="productId"
          placeholder="Product Id"
          value={formData.productId}
          onChange={handleChange}
        />
        
        <label htmlFor='price'>Price</label>
        <input
          type="number"
          id="price"
          className="form-input sub-heading"
          name="price"
          placeholder="Price (₹)"
          value={formData.price}
          onChange={handleChange}
        />

        <label htmlFor='discount'>Discount</label>
        <input
          type="number"
          id='discount'
          className="form-input sub-heading"
          name="discount"
          placeholder="Discount (%)"
          value={formData.discount}
          onChange={handleChange}
        />

        <label htmlFor='expiry-date'>Expiry Date</label>
        <input
          type="date"
          id='expiry-date'
          className="form-input sub-heading"
          name="expirationDate"
          value={formData.expirationDate}
          onChange={handleChange}
        />

        <label htmlFor='merchant'>Merchant Name</label>
        <input
          type="text"
          id="merchant"
          className="form-input sub-heading"
          name="merchant"
          placeholder="Merchant (Amazon, Flipkart...)"
          value={formData.merchant}
          onChange={handleChange}
        />

        <label htmlFor='description'>Description</label>
        <textarea
          type="text"
          id='description'
          className="form-input sub-heading"
          name="description"
          placeholder="Give description of your coupon."
          value={formData.description}
          onChange={handleChange}
        />

        <Button variant="contained" onClick={ handleClick } sx={{marginTop: '1rem'}}>Publish</Button>

        
      </form>
    </div>
    </div>
    
  );
};

const styles = {
  container: {
    width: "420px",
    margin: "60px auto",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    background: "#fff"

  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    
  }
};

export default Main;