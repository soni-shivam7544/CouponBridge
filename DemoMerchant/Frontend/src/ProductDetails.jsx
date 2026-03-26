import products from './productsData';
import './productDetails.css';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import StarIcon from '@mui/icons-material/Star';

const ProductDetails = () => {
    const { id } = useParams();
    const product = products[id-1];
    console.log(product);

    const [data, setData] = useState('');

    const handleChange = (e)=> {
        setData(()=>{
            return e.target.value;
        })
    }

    const handleVerify = ()=> {
        const div = document.getElementById('result');
        if(data === product.code){
           
           div.innerText = 'Applied';
        }
        else {
            div.innerText = 'Failed';
        }
    }

  return (

    <div className="details">
            
            <div className="coupon-details">
                <div className="left-column">
                    <div className="card-details">
                        <div className="coupon-logo sub-heading">{product.name[0]}</div>
                        <div className="coupon-info">
                            <div className="coupon-title heading">{product.name}</div>
                            <div className="coupon-desc text"> {product.description}</div>
                        </div>
                    </div>
                    
                </div>
                <div className="right-column">
                    <div className="navigate-options">
                        <div className="coupon-price sub-heading">Rs. {product.price}</div>
                        
                        <Button variant="contained" sx={ { margin: '0.5rem 0'}} className='buy-now'>Buy Now</Button>
                        <Button variant="outlined" sx={ { margin: '0.5rem 0'}} className='add-cart'><AddShoppingCartIcon/>Remove from cart</Button>
                        <input id='coupon' type='password' name='coupon' value={data} placeholder='Have Coupon?' onChange={handleChange}/>
                        <Button variant="outlined" sx={ { margin: '0.5rem 0'}} className='verify' onClick={handleVerify}><ElectricBoltIcon/>Apply coupon</Button>
                        <div id="result" name='result'></div>
                        <div className="coupon-handle">
                            <Button variant="text"><FavoriteBorderIcon sx={ { marginRight: '1rem'}} />save</Button>
                            <Button variant="text"><ShareIcon sx={ { marginRight: '1rem'}} />share</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ProductDetails