import { configureStore } from "@reduxjs/toolkit";
import ProductSlices from "./Slices/ProductSlices";
import UserSlices from './Slices/UserSlices'
export default configureStore({reducer:{Product:ProductSlices,User:UserSlices}})