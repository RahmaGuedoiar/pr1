import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/nav-dropdown.png'
const Navbar = () => {
    const [menu,setMenu]=useState('shop')
    const {getTotalCartItems}=useContext(ShopContext)
    const menuRef=useRef()
    const dropdown_toggle = (e) =>{
        menuRef.current.classList.toggle('nav-menu-visible')
        e.target.classList.toggle('open')
    }
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                {/* <img src={logo} alt='' /> */}
              
            </div>
            <img  className='nav-dropdown'onClick={dropdown_toggle } src={nav_dropdown} alt=''></img>
            <ul ref={menuRef} className='nav-menu'>
                <li onClick={()=>{setMenu('shop')}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==='shop'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu('Menus')}}> <Link style={{textDecoration:'none'}} to='/mens'>Men </Link>{menu==='Menus'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu('Womens')}}><Link style={{textDecoration:'none'}} to='/womens'>Womens</Link> {menu==='Womens'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu('Kids')}}><Link style={{textDecoration:'none'}} to='/Kids'>Kids</Link>{menu==='Kids'?<hr/>:<></>} </li>
            </ul>
          <div className='nav-login-cart'>
            <Link to='/login'> <button>login</button></Link>
            <Link to='/register'> <button>register</button></Link>
            <Link to='/cart'> <img src={cart_icon} alt=''/></Link>
             
          <div className='nav-cart-count'>{getTotalCartItems()}</div>  
          </div>
         

        </div>
    )
}

export default Navbar