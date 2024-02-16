const mongoose = require("mongoose")

const OrderSchema = mongoose.Schema({
  cartproduct:{
    type:[{}],
    required:true
  },
  owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user',
    required:true
}



})
const Order = mongoose.model(" Orders", OrderSchema)
module.exports = Order