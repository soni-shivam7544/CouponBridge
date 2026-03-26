import { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const Main = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    code: "",
    price: "",
    discount: "",
    expirationDate: "",
    merchant: "",
    description: ""
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
    .then(res => console.log(res))
    .catch(err => console.log(err));

    navigate('/coupons');


  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (
    //   !formData.code ||
    //   !formData.price ||
    //   !formData.discount ||
    //   !formData.expirationDate ||
    //   !formData.merchant
    // ) {
    //   return setMessage("Please fill all required fields");
    // }

    

    
  };

  return (
    <div style={styles.container}>
      <h2>Publish Coupon</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        
        <input
          type="text"
          name="code"
          placeholder="Coupon Code"
          value={formData.code}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Price (₹)"
          value={formData.price}
          onChange={handleChange}
        />

        <input
          type="number"
          name="discount"
          placeholder="Discount (%)"
          value={formData.discount}
          onChange={handleChange}
        />

        <input
          type="date"
          name="expirationDate"
          value={formData.expirationDate}
          onChange={handleChange}
        />

        <input
          type="text"
          name="merchant"
          placeholder="Merchant (Amazon, Flipkart...)"
          value={formData.merchant}
          onChange={handleChange}
        />

        <textarea
          type="text"
          name="description"
          placeholder="Give description of your coupon."
          value={formData.description}
          onChange={handleChange}
        />

        <button type="submit" onClick={ handleClick }>
          Publish
        </button>

        
      </form>
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
    gap: "12px"
  }
};

export default Main;