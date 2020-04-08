const mongoose = require("mongoose");

const locations = new mongoose.Schema(
  {
    coordinates: [String]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Location", locations);
