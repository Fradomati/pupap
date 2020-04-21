const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    email: String,
    allTimes: [{ type: Number }],
    lastTime: { type: Number, default: 0 },
    countTimes: { type: Number, default: 0 },
    dayWeek: [{ type: Number }],
    hours: [{ type: Number }],
    totalWeight: { type: Number, default: 0 },
    contentFav: { type: Array, default: [] },
    coordinates: { type: Array },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
