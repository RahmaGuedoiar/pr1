import React, { useEffect } from "react";
import './Shopcategory.css'
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
import { useDispatch, useSelector } from "react-redux";
import { getAllproduct } from "../Redux/Slices/ProductSlices";


const ShopCategory = (props) => {
  const ProductData=useSelector(state=>state.Product)
  console.log('product',ProductData)
 const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getAllproduct())
 }, [])
  return (
    <div className="shop-category">
      <img className="shopcategorybanner" src={props.banner}></img>
      <div className="shopcategory-indexShort">
        <p>
          <span> Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-short">
          sort by
          <img src={dropdown_icon}></img>
        </div>
      </div>
      
      <div className="shopcategory-products">
        {Array.isArray(ProductData)&&ProductData.map((el, i) => {
          if (props.category === el.category) {
            return (
              <Item
                key={i}
                id={el._id}
                name={el.name}
                image={el.image}
                new_price={el.new_price}
                old_price={el.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More 
      </div>
      </div>
   
  );
};

export default ShopCategory;