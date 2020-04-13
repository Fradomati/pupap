const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationsSchema = new Schema(
  {
    coordinates: [{ type: Schema.ObjectId, ref: "User" }]
  },
  {
    timestamps: true
  }
);

const Location = mongoose.model("Location", locationsSchema);
module.exports = Location;
