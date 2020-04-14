const { withDbConnection } = require("../lib/withDbConnection");
const Location = require("../models/Location.Model");
const Users = require("../models/User.Model");
withDbConnection(async () => {
  await Location.create({
    coordinates: [],
  }),
    await Users.create(
      {
        username: "Bei",
        password: "VickyMola1",
        email: "bei@bei.com",
        coordinates: [{ lat: 40, lng: -2 }],
      },
      {
        username: "Cee",
        password: "VickyMola1",
        email: "bei@bei.com",
        coordinates: [{ lat: 41, lng: -2 }],
      }
    ),
    console.log("Location Model Create on DB");
});
