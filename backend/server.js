const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/userModel.js');
const cartRoutes = require('./routes/cart');
const Razorpay = require("razorpay");
const crypto = require("crypto");
const { Pool } = require('pg'); 
require('dotenv').config();  

console.log("Razorpay Key ID:", process.env.RAZORPAY_KEY_ID); // 👈 Move these here
console.log("Razorpay Key Secret:", process.env.RAZORPAY_KEY_SECRET);

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Debugging output to ensure values are loaded
console.log("Razorpay Key ID:", process.env.RAZORPAY_KEY_ID); // Should not be undefined
console.log("Razorpay Key Secret:", process.env.RAZORPAY_KEY_SECRET); // Should not be undefined

const app = express();
const PORT = process.env.PORT || 8080;
const JWT_SECRET = 'your_secret_key'; // ⚠️ Move this to .env in production

// CORS options
const corsOptions = {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT','PATCH', 'DELETE', 'OPTIONS'],
  credentials: true,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = 'mongodb+srv://V4:Nan%40%261234@v4.lo8j7.mongodb.net/V4?retryWrites=true&w=majority&appName=V4';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB Atlas');
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
})
.catch(err => {
  console.error('MongoDB connection error:', err);
});

// Routes
app.use('/api/cart', cartRoutes);

// Signup route
app.post('/signup', async (req, res) => {
  const { username, useremail, userpassword } = req.body;

  try {
    const existingUser = await User.findOne({ useremail });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    const hashedPassword = await bcrypt.hash(userpassword, 10);

    const newUser = new User({
      username,
      useremail,
      userpassword: hashedPassword,
    });

    await newUser.save();

    const token = jwt.sign({ id: newUser._id, email: newUser.useremail }, JWT_SECRET, {
      expiresIn: '1d',
    });

    res.status(201).json({ message: 'User created successfully', token });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { useremail, userpassword } = req.body;

  try {
    const user = await User.findOne({ useremail });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(userpassword, user.userpassword);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id, email: user.useremail }, JWT_SECRET, {
      expiresIn: '1d',
    });

    res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});



app.post("/pay", async (req, res) => {
    try {
      const { amount } = req.body;
      console.log(process.env.RAZORPAY_KEY_ID);
      console.log(process.env.RAZORPAY_KEY_SECRET);
  
      const options = {
        amount: amount, 
        currency: "INR",
        receipt: `receipt_${Date.now()}`,
      };
      console.log(options)
  
      const order = await razorpay.orders.create(options);
      console.log(order);
  
      if (!order || !order.id) {
        return res.status(500).send("Error creating order");
      }
  
      res.json({ order });
    } catch (err) {
      console.error("Razorpay Error:", err);
  
      res.status(500).json({
        error: "Internal Server Error",
        details: err.message,
      });
    }
  });
  
  
  app.post("/verify-payment", (req, res) => {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;
  
    const generated_signature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");
  
    if (generated_signature === razorpay_signature) {
      
      res.json({ success: true, message: "Payment verified successfully" });

    } else {
      res.status(400).json({ success: false, message: "Payment verification failed" });
    }
  });
