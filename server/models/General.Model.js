const mongoose = require("mongoose");

const GlobalData = new mongoose.Schema(
  {
    global_half_time: { type: Number, default: 0 },
    global_times_week: { type: Number, default: 0 },
    global_half_hour: { type: Number, default: 0 }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("GlobalData", GlobalData);
