const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// const apiRoutes = require('./routes/apiRoutes');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
const corsOptions = {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Routes
// app.use('/api', apiRoutes);
app.use("/api/cart", require("./routes/cart"));



// MongoDB connection
const MONGODB_URI = 'mongodb+srv://V4:Nan%40%261234@v4.lo8j7.mongodb.net/?retryWrites=true&w=majority&appName=V4';

mongoose.connect(MONGODB_URI)
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});
