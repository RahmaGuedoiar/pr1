import React from 'react'
import './Breadcrums.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
export const Breadcrums = (props) => {

    const {product}=props;
  return (
    <div>
        <div className='breadcrum'>
            Home <img src={arrow_icon}></img> SHOP <img src={arrow_icon}></img>{product.category}<img src={arrow_icon}></img>{product.name}
        </div>
    </div>
  )
}
