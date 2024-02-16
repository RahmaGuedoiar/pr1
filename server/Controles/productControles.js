
const PRODUCT= require('../modles/productSchema')

const AddProduct = async (req, res) => {
  try {
      // Validate incoming data
      const { name, image, category, new_price, old_price } = req.body;
      if (!name || !image || !category || !new_price || !old_price) {
          return res.status(400).json({ msg: "Missing required fields" });
      }
      
      // Generate unique ID (assuming MongoDB does not support auto-increment)
      const productsCount = await PRODUCT.countDocuments();
      const id = productsCount > 0 ? productsCount + 1 : 1;
      
      // Create new product
      const newProduct = await PRODUCT.create({ id, name, image, category, new_price, old_price });
      console.log(newProduct);
      
      // Return success response
      res.status(201).json({ msg: "Product added", newProduct });
  } catch (error) {
      // Log specific error for debugging
      console.error("Error adding product:", error);
      // Return error response
      res.status(500).json({ msg: "Something went wrong" });
  }
}
// creating API for getting all product 
const getProducts=async(req,res)=>{
    try {
        
      const Products=await PRODUCT.find({})
      res.status(201).json({msg:"get Products",Products})
   
    } catch (error) {
        res.status(500).json({msg:"somthing went wrong"})
        console.log(error)
    }
}
// creating API for remove product 
const deleteProduct=async(req,res)=>{
    try {
     
      const deleteProduct=await PRODUCT.findByIdAndDelete({_id:req.params.id})
      res.status(201).json({msg:"Product deleted",deleteProduct})
    } catch (error) {
        res.status(500).json({msg:"somthing went wrong"})
        console.log(error)
    }
}
// creating API for update product 
const updateProduct=async(req,res)=>{
    try {
     
      const updateProduct=await PRODUCT.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
      res.status(201).json({msg:" Product updated",updateProduct})
    } catch (error) {
        res.status(500).json({msg:"somthing went wrong"})
        console.log(error)
    }
}

module.exports = { AddProduct,getProducts,deleteProduct,updateProduct}