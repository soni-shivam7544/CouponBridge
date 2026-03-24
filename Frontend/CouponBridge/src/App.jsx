import './App.css'
import Home from './views/home/Home.jsx';
import Coupons from './views/coupons/Coupons.jsx';
import CouponDetails from './views/coupon-details/CouponDetails.jsx';
import SignUp from './views/signup/SignUp.jsx';
import Login from './views/login/Login.jsx';

import { BrowserRouter, Routes, Route } from "react-router-dom";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home />}/>
        <Route path='/coupons' element= {<Coupons />}/>
        <Route path='/coupons/:id' element={<CouponDetails/>}/>
        <Route path='/signup' element = { <SignUp/>}/>
        <Route path='/login' element = { <Login/> }/>
      </Routes>
    </BrowserRouter>
  )
}


