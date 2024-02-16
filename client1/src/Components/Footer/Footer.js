import React from 'react'
import footer_logo from '../Assets/logo_big.png'
import instagram_icom from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import  whatsapp_icon from '../Assets/whatsapp_icon.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo}></img>
            <p>SHOPPER</p>
        </div>
        <div>
        <ul className='footer-links'>
            <li>Campany</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Cantact</li>

        </ul>
        </div>
        <div className='footer-social-icon'>
          <div className='footer-icons-container'>
            <img src={instagram_icom}></img>
          </div>
          <div className='footer-icons-container'>
            <img src={pintester_icon}></img>
          </div>
          <div className='footer-icons-container'>
            <img src={whatsapp_icon}></img>
          </div>
        </div>
        <div className='footr-copyright'>
            <hr/>
            <p>Copyriht @2024 -All Right Reserve </p>
        </div>

    </div>
  )
}

export default Footer