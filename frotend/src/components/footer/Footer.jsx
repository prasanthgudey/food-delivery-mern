import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>this is the footer left ......................................   ..................................</p>
                <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Dellivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>prasanthkumargudey</li>
                        <li>prasanthkumargudey@gmail.com</li>
                    </ul>
            </div>
            
        </div>
      <hr />
      <p className="footer-copyright">copyright 2025 pk.com - All Right Resrved</p>
    </div>
  )
}

export default Footer
