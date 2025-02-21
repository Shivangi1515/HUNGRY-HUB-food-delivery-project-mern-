import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam asperiores inventore officia mollitia laudantium ea quaerat sed id architecto! Optio quo beatae expedita veniam culpa nulla nobis pariatur dicta voluptatibus.</p>
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
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                 </ul>
            </div>
            <div className="footer-content-right">
                <h2>
                    GET IN TOUCH 
                    <ul>
                        <li>+1-212-456-7890</li>
                        <li>contact@hungryhub.com</li>
                    </ul>
                </h2>

            </div>
        </div>
        <hr/>
        <p className="footer-copyright">
            Copyright 2025 Hungryhub-All Right Reserved
        </p>

    </div>
  )
}

export default Footer