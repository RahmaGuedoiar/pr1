import React from 'react'
import './RelatedProducts.css'

import Item from '../Item/Item'
import { useSelector } from 'react-redux'

const RelatedProducts = () => {
  const {ProductData}=useSelector(state=>state.Product)
 
  return (
    
    <div className='RelatedProducts'>
        <h1>Telated products</h1>
        <hr/>
        <div className="relatedproducts-item">
            {Array.isArray(ProductData)&& ProductData.map((it,i)=>{
                return <Item  key={i} id={it._id} name={it.name} image={it.image} new_price={it.new_price} old_price={it.old_price}></Item>
            })}
        </div>
    </div>
  )
}

export default RelatedProducts