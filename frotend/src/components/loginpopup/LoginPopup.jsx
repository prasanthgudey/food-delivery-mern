import React, { useContext, useEffect, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const LoginPopup = ({setShowLogin}) => {

  const {url,setToken}=useContext(StoreContext)
    const [currentState, setCurrentState]=useState('Sign up')
  const [data,setData]=useState({
    name:"",
    email:"",
    password:""
  })
  const onChangeHandler =(e)=>{
    const name=e.target.name
    const value=e.target.value
    setData(data=>({...data,[name]:value}))
  }
  
  const onLogin = async (e)=>{
    e.preventDefault()
    let newUrl =url;
    if (currentState==='Login'){
      newUrl+="/api/user/login"
    }
    else{
      newUrl+="/api/user/register"
    }
    const response = await axios.post(newUrl,data);
    if(response.data.success){
        setToken(response.data.token);
        localStorage.setItem("token",response.data.token);
        setShowLogin(false);
    }
    else{
      alert(response.data.message)
    }
  }

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} action="" className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img src={assets.cross_icon} onClick={()=>setShowLogin(false)} alt="" />
        </div>
        <div className="loign-popup-inputs">
            {currentState==='Login'? <></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='your name' required />}
            
            <input type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder='your email' required />
            <input type="password" name='password' onChange={onChangeHandler} value={data.password} placeholder='password' required />
        </div>
        <button type='submit'>{currentState==='Sign up' ?'create account':'Login'}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, i agree to the terms of use and privacy policy</p>
        </div>
        {currentState=="Login"? <p>Create a new Account?
             <span onClick={()=>setCurrentState('Sign up')}>Click Here</span></p>
                :<p>Already have an Account? <span onClick={()=> setCurrentState('Login')}>Login Here</span></p>}
      </form>
    </div>
  )
}

export default LoginPopup
