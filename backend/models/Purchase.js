const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
  userId: { type: String, ref:'User', required: true,},
  product: {title:String, description:String, price:Number, phoneNumber:String, images:[String],},
  paymentId: {type: String, required: true,},
  createdAt: {type: Date, default: Date.now,},
});

module.exports = mongoose.model("Purchase", purchaseSchema);
