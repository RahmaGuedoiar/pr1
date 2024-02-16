import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Breadcrums } from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

import { useDispatch, useSelector } from 'react-redux';
import { getAllproduct } from '../Redux/Slices/ProductSlices';
const Product = () => {
  const dispatch = useDispatch()
  const { ProductData } = useSelector(state => state.User)
  console.log(ProductData)
  const { id } = useParams();
  const product = Array.isArray(ProductData) && ProductData.find((e) => e._id === Number(id))
  useEffect(() => {
    dispatch(getAllproduct())
  }, [])
  return (

    <div>

      <Breadcrums product={product}></Breadcrums>
      <ProductDisplay product={product}></ProductDisplay>
      <DescriptionBox></DescriptionBox>
      <RelatedProducts></RelatedProducts>



    </div>
  )
}

export default Product