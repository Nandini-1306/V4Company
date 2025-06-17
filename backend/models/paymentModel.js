const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  booking_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  payment_method: { type: String, enum: ['credit card', 'debit card', 'paypal', 'upi', 'cash'], required: true },
  payment_status: { type: String, enum: ['paid', 'pending', 'unsuccessful'], default: 'pending' },
  transaction_id: { type: String },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Payment', paymentSchema);
