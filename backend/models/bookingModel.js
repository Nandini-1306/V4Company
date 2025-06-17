const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  service_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
  provider_id: { type: mongoose.Schema.Types.ObjectId, ref: 'ServiceProvider', required: true },
  booking_date: { type: Date, required: true },
  duration: { type: String, enum: ['hourly', 'weekly', 'monthly'], required: true },
  status: { type: String, enum: ['pending', 'confirmed', 'completed', 'cancelled'], default: 'pending' },
  payment_status: { type: String, enum: ['paid', 'pending', 'unsuccessful'], default: 'pending' },
  price: { type: Number },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', bookingSchema);
