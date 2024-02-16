import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
         <div className='offers-left'></div>
         <h1>Exclusive</h1>
         <h1>Offers for You </h1>
         <p>ONLY ON BEST SELLERS PRODUCTS</p>
         <button>Chek Now</button>
       <div className='offers-right'>
        <img src={exclusive_image} alt=''></img>
       </div>
    </div>
  )
}

export default Offers