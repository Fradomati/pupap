const mongoose = require("mongoose");
const { Schema } = mongoose;

const locations = new mongoose.Schema(
  {
    coordinates: [{ type: Schema.Types.ObjectId, ref: "User" }]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Location", locations);
