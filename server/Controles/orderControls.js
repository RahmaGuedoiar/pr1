const Order = require ('../modles/orderSchema')
const createOrder=async(req,res)=>{
    try {
      const {cartproduct,userId}=req.body  
      const newOrder=await Order.create({cartproduct,owner:userId})
      res.status(201).json({msg:"Order created",newOrder})
    } catch (error) {
        res.status(500).json({msg:"somthing went wrong"})
        console.log(error)
    }
}
const getOrders=async(req,res)=>{
    try {
      const {userId}=req.body  
    
      const Orders=await Order.find({owner:userId})
      res.status(201).json({msg:"get Orders",Orders})
    } catch (error) {
        res.status(500).json({msg:"somthing went wrong"})
        console.log(error)
    }
}
const deleteOrder=async(req,res)=>{
    try {
     
      const Orders=await Order.findByIdAndDelete({_id:req.params.id})
      res.status(201).json({msg:" Order deleted",Orders})
    } catch (error) {
        res.status(500).json({msg:"somthing went wrong"})
        console.log(error)
    }
}

const updateOrder=async(req,res)=>{
    try {
     
      const updateOrders=await Order.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
      res.status(201).json({msg:" Order updated",updateOrders})
    } catch (error) {
        res.status(500).json({msg:"somthing went wrong"})
        console.log(error)
    }
}
module.exports={createOrder,getOrders,deleteOrder,updateOrder}

