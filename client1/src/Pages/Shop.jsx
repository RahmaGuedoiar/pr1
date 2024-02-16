import React from 'react'
import Hero from '../Components/Hero/Hero'
import SLideCard from '../Components/Slide/SlideCard'
import Item from '../Components/Item/Item'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollectionsc/NewCollections'
import NewSell from '../Components/NewSell/NewSell'
import Video from '../Components/Video/Video'



const Shop = () => {
  return (
    <div>
      <Video></Video>
     {/* <Video></Video>
     <SLideCard></SLideCard> */}
     <Hero></Hero>
     <Item></Item>
     <Offers></Offers>
     <NewCollections></NewCollections>
     <NewSell></NewSell>
  
     
    </div>
  )
}

export default Shop