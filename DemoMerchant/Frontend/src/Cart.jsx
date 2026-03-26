import Product from "./Product";
import './Products.css';

const Cart = () => {
  const products = JSON.parse(localStorage.getItem('cartItems'));
  let array = [];
  return (
    <div id="products">
      { Object.keys(products).forEach( key => {
          array.push(products[key]);
      })}
      { array.map((product) => {
        return <Product data={{
          id: product.id,
          name: product.name,
          description: product.description,
          price: product.price,
          code: product.code,
          discount: product.discount
        }}/>
      })}
    </div>
  )
}

export default Cart