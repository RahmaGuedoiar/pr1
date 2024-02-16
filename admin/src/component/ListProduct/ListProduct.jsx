import React, { useEffect, useRef } from 'react'
import './ListProduct.css'
import cross_icon from '../../assets/cross_icon.png'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, getAllproduct, updateProduct } from '../../Redux/Slices/ProductSlices'
const ListProduct = () => {
  const [allproducts, setAllproducts] = useState()
  const { ProductData } = useSelector(state => state.Product)
  console.log('product', ProductData)
  console.log('typ', typeof (ProductData))
  const dispatch = useDispatch()
  const [Name, setName] = useState()
  const [image, setImage] = useState()
  const [category, setCategory] = useState()
  const [new_price, setNew_price] = useState()
  const [old_price, setOld_price] = useState()
  const name = useRef()
  const Image = useRef()
  const Category = useRef()
  const New_price = useRef()
  const Old_price = useRef()
  useEffect(() => {
    dispatch(getAllproduct())
  }, [])

  
  return (


    <div className='list-product'>
      <div className="listproduct-format-main">
        <div><p>Product</p></div>
        <div><p>Title</p></div>
        <div><p>Old Price</p></div>
        <div><p>New Price</p></div>
        <div><p>Category</p></div>
        <div><p>Remove</p></div>
        <div><p>Update</p></div>

      </div>
      <div className="listproduct-allproducts">


        {Array.isArray(ProductData) && ProductData.map((el, index) => {

          return <>
            <div className='product'>
              <div className='IMAGE'><img className='listproduct-image' src={el.image}></img></div>
              <div className='STRING'><h1>{el.name}</h1></div>
              <div className='STRING' ><h1>${el.old_price}</h1></div>
              <div className='STRING'><h1>${el.new_price}</h1></div>
              <div className='STRING'><h1>{el.category}</h1></div>

              {/* <button onClick={()=>{dispatch(deleteProduct(el._id))}}>delete</button> */}
              <div className='IMAGE'><img className='list-product.remove-icon' src={cross_icon} onClick={() => { dispatch(deleteProduct(el._id)) }}></img></div>

              <div className='updateProduct'>
                <input type='text' ref={name} onChange={() => { setName(name.current.value) }} ></input>
                <input type='text' ref={Category} onChange={() => { setCategory(Category.current.value) }} ></input>
                <input type='text' ref={Image} onChange={() => { setImage(Image.current.value) }} ></input>
                <input type='number' ref={New_price} onChange={() => { setNew_price(New_price.current.value) }} ></input>
                <input type='number' ref={Old_price} onChange={() => { setOld_price(Old_price.current.value) }}></input>
                <button onClick={() => { dispatch(updateProduct({ id: el._id, data: { name: Name, image: image, category: category, new_price: new_price, old_price: old_price } })) }}>update</button>
              </div>

             
            </div>
          </>
        })}


      </div>
    </div>

  )
}

export default ListProduct