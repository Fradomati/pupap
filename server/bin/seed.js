const { withDbConnection } = require("../lib/withDbConnection");
const Location = require("../models/Location.Model");
const Users = require("../models/User.Model");
withDbConnection(async () => {
  await Location.create({
    coordinates: [],
  });
});
