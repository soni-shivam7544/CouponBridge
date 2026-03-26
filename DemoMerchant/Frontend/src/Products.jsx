import Product from "./Product";
import products from './productsData';
import './Products.css';

const Products = () => {
  
      
  return (
    
    <div id="products">
      { products.map( product => {
        return <Product key={product.id} data={{
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

export default Products