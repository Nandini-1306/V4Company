const mongoose = require('mongoose');

const serviceProviderSchema = new mongoose.Schema({
  full_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  address: { type: String },
  experience: { type: Number },
  hourly_rate: { type: Number },
  availability: [{ type: String }],
  services: [{ type: String }],
  ratings: { type: Number, min: 1, max: 5 },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ServiceProvider', serviceProviderSchema);
