// Schema for Creating Products
const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema(
    {
        id: {
            type:Number,
            required: true,
           
        },
        name: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },

        Date: {
            type: Date, 
            default: Date.now()
        },
        avilable: {
            type: Boolean,
             default: true
        },
      
        new_price: {
            type: Number,
            required: true,
            default: 0
        },
        old_price: {
            type: Number,
            required: true,
            default: 0,

        }
       
   
        
    })
    
const PRODUCT = mongoose.model("Products", ProductSchema)
module.exports = PRODUCT