const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  useremail: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/\S+@\S+\.\S+/, 'Please enter a valid email']
  },
  userpassword: {
    type: String,
    required: true,
    minlength: [8, 'Password must be at least 8 characters']
  },
  phone: { type: String },
  address: { type: String },
  profile_picture: { type: String },
  profession: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
