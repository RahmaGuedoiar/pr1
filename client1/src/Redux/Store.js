import { configureStore } from "@reduxjs/toolkit";
import ProductSlices from "./Slices/ProductSlices";
import UserSlices from "./Slices/UserSlices";
import OrderSlices from "./Slices/OrderSclies"
export default configureStore({reducer:{Product:ProductSlices,User: UserSlices,Order:OrderSlices}})