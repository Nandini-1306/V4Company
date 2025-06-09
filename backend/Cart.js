const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    service_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
    quantity: { type: Number, default: 1 }
  }],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Cart', cartSchema);
