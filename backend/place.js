const mongoose = require("mongoose");

const place = new mongoose.Schema({
  name: { type: String, required: true },
  location: {
    type: {
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],  // [longitude, latitude]
      required: true,
    },
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",   // Reference to the User model
    required: true,
  },
});

place.index({ location: "2dsphere" });

const Place = mongoose.model("Place", place);
module.exports = Place;
