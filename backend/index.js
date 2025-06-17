const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('./models/userModel.js');

const app = express();
const PORT = 5000;
const JWT_SECRET = 'your_secret_key'; // Use a secure key in production

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://V4:Nan%40%261234@v4.lo8j7.mongodb.net/V4?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error('MongoDB connection error:', err));

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

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
