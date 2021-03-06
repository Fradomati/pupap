const express = require("express");
const LocationModel = require("../models/Location.Model");
const UserModel = require("../models/User.Model");
const router = express.Router();

// Quiero recibir las coordenadas y almacenarlas en la BBDD, para ello necesitaré hacer un script con axios que llame a esta ruta:

router.post("/add", async (req, res) => {
  const { id, lat, lng } = req.body;
  const coords = { lat: lat, lng: lng };
  console.log(req.body);
  await UserModel.findOneAndUpdate(
    { _id: id },
    {
      $push: {
        coordinates: coords,
      },
    }
  );
  res.json({ status: `Added Lat ${lat} y Lng ${lng} to user id ${id}` });
});

router.post("/remove", async (req, res) => {
  const { id } = req.body;
  await UserModel.findOneAndUpdate(
    { _id: id },
    {
      $set: { coordinates: [] },
    }
  );
});

router.get("/getLocations", async (req, res) => {
  const locations = await LocationModel.find().populate(
    "coordinates",
    "coordinates"
  );

  console.log("[BACK] Aquí están las location", locations);
  res.json({ locations });
});
// Quedaría una ruta para eliminar el id. que contiene la localización

module.exports = router;
