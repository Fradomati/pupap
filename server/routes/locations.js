const express = require("express");
const LocationModel = require("../models/Location.Model");
const router = express.Router();

// Quiero recibir las coordenadas y almacenarlas en la BBDD, para ello necesitaré hacer un script con axios que llame a esta ruta:

router.post("/add", async (req, res) => {
  const { id } = req.body;
  await LocationModel.findOneAndUpdate({
    $push: {
      coordinates: id
    }
  });
  res.json({ status: `Location ${id} added` });
});

// Quedaría una ruta para eliminar el id. que contiene la localización

module.exports = router;
