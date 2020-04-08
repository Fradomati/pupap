const mongoose = require("mongoose");

const user = new mongoose.Schema(
  {
    username: String,
    password: String,
    email: String,
    timesWeek: { type: Number, default: 0 },
    halfTime: { type: Number, default: 0 },
    halfHour: { type: Number, default: 0 },
    totalTime: { type: Number, default: 0 },
    totalWeight: { type: Number, default: 0 },
    contentFav: { type: Array, default: [] }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", user);
