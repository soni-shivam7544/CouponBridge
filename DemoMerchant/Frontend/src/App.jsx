import './App.css'
import Products from './Products';
import Cart from './Cart';
import ProductDetails from './ProductDetails';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path='/products' element={<Products/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/products/:id' element={<ProductDetails/>}/>
    </Routes>
  )
}

export default App
