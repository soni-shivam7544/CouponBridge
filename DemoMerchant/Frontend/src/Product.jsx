import './product.css';
import Button from '@mui/material/Button';
import products from './productsData';
import { useNavigate } from 'react-router-dom';

const Product = ( { data } ) => {
    const navigate = useNavigate();
    const handleClick = (e)=> {

        let items = localStorage.getItem('cartItems');
        items = items !== null ? JSON.parse(items) : {};
        items[data.id] = data;
        localStorage.setItem('cartItems', JSON.stringify(items)); 
        console.log(JSON.parse(localStorage.getItem('cartItems')));
        navigate('/cart');
    }
  return (  
    <>
        <div className="product">
            <div className='product-header sub-heading'>
                {data.name}
            </div>
            <div className='product-body text'>
                {data.description}
            </div>
            <div className='product-footer text'>
                <div className='product-price sub-heading'>Rs. {data.price}</div>
                
                <Button data-btn-id={data.id} className='add-to-cart' variant="contained" onClick={ handleClick }>Add to Cart</Button>
                
            </div>
            <Button data-buy-id={data.id} className='buy-now' variant="contained" onClick={ ()=> navigate(`/products/${data.id}`)}>Buy Now!</Button>
        </div>
    </>
  )
}

export default Product