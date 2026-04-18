import { useState } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';

import { useNavigate } from "react-router-dom";

import './Main.css';

const Main = () => {

  const navigate = useNavigate();

  const [file, setFile] = useState(null);

  const [formData, setFormData] = useState({
    code: "",
    price: "",
    discountValue: "",
    expiry: "",
    brand: "",
    description: "",
    productId: "",
    title:"",
    discountType:"Percentage",
    category:"Food"
  });

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  }
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if(file){

      const imageData = new FormData();
      imageData.append('image', file);
      axios.post('http://localhost:5050/cb/v1/api/upload',imageData)
      .then(res=>{
        const updatedFormData = {
          ...formData,
          image: res.data.data.imageUrl
        };
        
        axios.post('http://localhost:5050/cb/v1/api/coupons', updatedFormData, {
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
          console.log(err.response);
          localStorage.setItem('alert', JSON.stringify({ name: 'error', message: 'Authentication Failed! Login as Provider first.'}));
          
          navigate('/login');

        });
        

      }).catch(err=>{
        console.log(err.response);
      })
    }

    else {

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
        console.log(err.response);
        localStorage.setItem('alert', JSON.stringify({ name: 'error', message: 'Authentication Failed! Login as Provider first.'}));
        
        navigate('/login');

      });

    }
    
  
  };

  return (
    <div className="publish-main">
    <div className="publish-container text">
        <p className="heading" style={{display:'flex', alignItems: 'center'}}>
          <SellOutlinedIcon sx={{marginRight: '0.5rem', color:'var(--color-accent)'}}/>
          <span>Publish Your Coupon</span>
        </p>
        <p className="sub-heading">Fill in the details below to list your coupon on the marketplace</p>
        <form className="publish-coupon-details" onSubmit={handleSubmit}>
          <div className="publish-coupon-two-column">
            <div className="publish-coupon-two-column-item">
              <label
                htmlFor="brand"
              >
                Brand Name
              </label>
              <input
                id='brand'
                name='brand'
                value={formData.brand}
                placeholder="e.g. Amazon, Nike"
                onChange={handleChange}
                required
              />
            </div>

            <div className="publish-coupon-two-column-item">
              <label
                htmlFor="title"
              >
                Coupon Title
              </label>
              <input
                id='title'
                name='title'
                placeholder="e.g. 20% Off Electronics"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <label
            htmlFor="productId"
          >
            Product Id
          </label>
          <input
            id='productId'
            name='productId'
            placeholder="Enter the Product Id number"
            type='number'
            value={formData.productId}
            onChange={handleChange}
            required
          />

          <label
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id='description'
            className="text"
            name='description'
            placeholder="Describe the coupon details, terms and conditions."
            value={formData.description}
            onChange={handleChange}
            required
          />
          <label
            htmlFor="price"
          >
            Price
          </label>
          <input
            id='price'
            name='price'
            placeholder="Enter the cost of coupon for sell"
            type='number'
            value={formData.price}
            onChange={handleChange}
            required
          />
          <div className="publish-coupon-two-column">
            <div className="publish-coupon-two-column-item">
              <label
                htmlFor="discountType"
              >
                Discount Type
              </label>
              <select
                id='discountType'
                name='discountType'
                value={formData.discountType}
                onChange={handleChange} 
                required
              >
                <option>Percentage</option>
                <option>Flat</option>
              </select>
            </div>

            <div className="publish-coupon-two-column-item">
              <label
                htmlFor="discountValue"
              >
                Discount Value
              </label>
              <input
                id='discountValue'
                name='discountValue'
                type='number'
                placeholder="e.g. 20"
                value={formData.discountValue}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="publish-coupon-two-column">
            <div className="publish-coupon-two-column-item">
              <label
                htmlFor="category"
              >
                Category
              </label>
              <select
                id='category'
                name='category'
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option>Food</option>
                <option>Fashion</option>
                <option>Electronics</option>
                <option>Travel</option>
                <option>Health</option>
                <option>Entertainment</option>
                <option>Home</option>
                <option>Other</option>
              </select>
            </div>

            <div className="publish-coupon-two-column-item">
              <label
                htmlFor="expiry"
              >
                Expiry Date
              </label>
              <input
                id='expiry'
                name='expiry'
                type='date'
                value={formData.expiry}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <label
            htmlFor="code"
          >
            Coupon Code
          </label>
          <input
            id='code'
            name='code'
            value={formData.code}
            placeholder="e.g., SAVE20"
            onChange={handleChange}
            required
          />

          <label
                htmlFor="img"
              >
                Image (Optional)
              </label>
              <input
                id='img'
                name='img'
                type='file'
                onChange={handleFileChange}
              />
              <span>Provide an image of the coupon or related product</span>

              <Button type='submit' variant="contained" sx={{width: '100%',marginTop:'1.5rem'}}>Publish</Button>
          
        </form>
    </div>
    </div>
  );
}       
export default Main;