import React from 'react'
import './NewCollections.css'
import new_collctions from '../Assets/new_collections'
import Item from '../Item/Item'


const NewCollections = () => {
  return (
    <div className='new-collctions'>
        <h1>NEW COLECTIONS</h1>
        <hr/>
        <div className='collections'>
          {new_collctions.map((it,i)=>{
            return <Item key={i} id={it.id} name={it.name} image={it.image} new_price={it.new_price} old_price={it.old_price} ></Item>
          })}
        </div>
    </div>
  )
}

export default NewCollections