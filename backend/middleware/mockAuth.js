const mongoose = require("mongoose");

const mockAuth = (req, res, next) => {
  // Use a real MongoDB ObjectId string
  req.user = {
    id: new mongoose.Types.ObjectId("683c7b510bf73a64cd44d0b8") // Replace with a valid ObjectId from your Users collection if needed
  };
  next();
};

module.exports = mockAuth;
