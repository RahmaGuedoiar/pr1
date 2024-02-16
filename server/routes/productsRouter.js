const express=require('express')
const router =express.Router()
const  { userMiddelware, verifyRole }=require("../middleware/usermiddelware");
const {AddProduct,getProducts,deleteProduct,updateProduct}=require('../Controles/ProductControles')
router.post("/addproduct", userMiddelware,verifyRole('admin'),AddProduct)
router.get("/getProducts",getProducts)
router.delete("/deleteProduct/:id",userMiddelware,verifyRole('admin'),deleteProduct)
router.put("/updateProduct/:id",userMiddelware,verifyRole('admin'),updateProduct)
module.exports=router