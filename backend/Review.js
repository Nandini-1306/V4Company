const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  provider_id: { type: mongoose.Schema.Types.ObjectId, ref: 'ServiceProvider', required: true },
  comment: { type: String },
  ratings: { type: Number, min: 1, max: 5, required: true },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Review', reviewSchema);
