import './App.css'
import Home from './views/home/Home.jsx';
import Coupons from './views/coupons/Coupons.jsx';
import CouponDetails from './views/coupon-details/CouponDetails.jsx';
import SignUp from './views/signup/SignUp.jsx';
import Login from './views/login/Login.jsx';
import PublishCoupon from './views/coupon-form/PublishCoupon.jsx';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProfile from './views/user-profile/UserProfile.jsx';
import Cart from './views/cart/Cart.jsx';
import Favourites from './views/favourites/Favourites.jsx'
import Checkout from './views/checkout/Checkout.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home />}/>
        <Route path='/coupons' element= {<Coupons />}/>
        <Route path='/coupons/:id' element={<CouponDetails/>}/>
        <Route path='/signup' element = { <SignUp/>}/>
        <Route path='/login' element = { <Login/> }/>
        <Route path='/publish' element = { <PublishCoupon/> }/>
        <Route path='/users/:id' element = {<UserProfile/>}/>
        <Route path='/cart' element = {<Cart/>}/>
        <Route path='/users/:id/favourites' element = {<Favourites/>}/>
        <Route path='/users/:id/checkout' element = {<Checkout/>}/>
      </Routes>
    </BrowserRouter>
  )
}


