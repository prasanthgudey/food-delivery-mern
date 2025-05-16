import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Carts from './pages/Carts/Cart'
import PlaceOrder from './pages/PlaceOrders/PlaceOrder'
import Footer from './components/footer/Footer'
import LoginPopup from './components/loginpopup/LoginPopup'
import Verify from './pages/verify/Verify'
import MyOrders from './pages/myorders/MyOrders'

const App = () => {
  const [showLogin,setShowLogin]=useState(false);
  return (   

    <>
     {showLogin? <LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Carts/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
        <Route path='/verify' element={<Verify/>}/>
        <Route path='/myorders' element={<MyOrders/>}/>
      </Routes>
    </div>
    <Footer/></>
  )
}

export default App
