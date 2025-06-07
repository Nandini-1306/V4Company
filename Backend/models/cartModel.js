// models/cartModel.js
const mongoose = require('mongoose');

const CartItemSchema = new mongoose.Schema({
  // service_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' },
  service_id:{type: String, required:true},
  name: String,
  price: Number,
  originalPrice: Number,
  image: String,
  duration: String,
  quantity: { type: Number, default: 1 }
}, { _id: false });

const CartSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: { type: [CartItemSchema], default: [] }
}, { timestamps: true });

module.exports = mongoose.model('Cart', CartSchema);
