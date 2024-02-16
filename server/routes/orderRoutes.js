const express=require('express')
const router =express.Router()
const  { userMiddelware,}=require("../middleware/usermiddelware");
const {createOrder,getOrders,deleteOrder,updateOrder}=require('../Controles/orderControls')
router.post("/createOrder",userMiddelware,createOrder)
router.get("/getOrders",userMiddelware,getOrders)
router.delete("/deleteOrder/:id",userMiddelware,deleteOrder)
router.put("/updateOrder/:id",userMiddelware,updateOrder)
module.exports=router