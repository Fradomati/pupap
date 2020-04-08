const { withDbConnection } = require("../lib/withDbConnection");
const Location = require("../models/Location.Model");

withDbConnection(
  async () =>
    await Location.create({
      coordinates: ["ObjectId(adasd3442342asd)"]
    }),
  console.log("Location Model Create on DB")
);
