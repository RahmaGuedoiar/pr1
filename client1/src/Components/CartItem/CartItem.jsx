import React from 'react'
import './CartItem.css'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import './CartItem.css'
import { useSelector } from 'react-redux';
const CartItem = () => {
    const { cartItem, removefromCart, getTotalCartAmount } = useContext(ShopContext)
    const {ProductData}=useSelector(state=>state.Product)
    return (
        <div className='cartItem'>
            <div className="cartItem-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr/>
            {Array.isArray(ProductData)&& ProductData.map((e) => {


                if (cartItem[e._id] >= 1) {

                    return < div >

                        <div className='cartItems-format'>
                            <img src={e.image} className='carticon-product-icon'></img>
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartItems-quantity'>{cartItem[e._id]}</button>

                            <p>${e.new_price * cartItem[e._id]}</p>
                            <img className='artItems-remove-icon' src={remove_icon} onClick={() => { removefromCart(e.id) }}></img>
                            <hr />
                        </div>



                    </div>
                }
                return null

            })}
        <div className='down'>
            <div className='cartitems-down'>
                <div className="cartitems-total">
                    <h1>cart Totals</h1>
                    <div className='cartitems-total-item'>
                        <p>Subtatal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className='cartitems-total-item'>
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <div className='cartitems-total-item'>
                        <p>Total</p>
                        <p>${getTotalCartAmount()}</p>
                        <button>PROCEED TO CHEKOUT</button>
                    </div>
                </div>

                

            </div>
            <div className='cartitems-promocode'>
                <p>IF you have a promo code,enter it here</p>
                <div className='cartitems-promobox'>
                    <input type='text' placeholder='promo code'></input>
                    <button>Submit</button>
                </div>
            </div>

          </div>
        </div >
    )
}

export default CartItem