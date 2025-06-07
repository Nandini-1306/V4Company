const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  service_name: { type: String, required: true },
  description: { type: String },
  service_type: { type: String },
  availability: [{ type: String }],
  avg_rate_per_hr: { type: Number },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Service', serviceSchema);
