const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
  orderId: { type: String, required: true },
  paymentId: { type: String, required: true },
  upiTransactionId: { type: String, required: false, unique: false },
  signature: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, default: "pending" }, // pending, success, failed
}, { timestamps: true });

module.exports = mongoose.model("Payment", PaymentSchema);
