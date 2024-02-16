import React, { createContext, useState } from 'react';
import { useSelector } from 'react-redux';

export const ShopContext = createContext(null);



const ShopContextProvider = (props) => {
    const getDefaulCart = () => {
    
        let cart = {};
        for (let index = 0; index < Array.isArray(PData).length + 1; index++) {
            cart[index] = 0;
    
        } return cart;
    
    }
    const getTotalCartAmount = () => {
        
        let totalAmount = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let itemInfo = TaskData.find((product) => product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItem[item]
            }
        } return totalAmount;
    }
    const { TaskData } = useSelector(state => state.Order)
    const [cartItem, setCartItem] = useState(getDefaulCart())
    console.log('cart', cartItem)

    const addToCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))

    }
    console.log('add', cartItem)

    const removefromCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))

    }
   
    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                totalItem += cartItem[item]

            }
        } return totalItem;
    }
    const contextValue = {cartItem,addToCart, removefromCart, getTotalCartAmount, getTotalCartItems };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;