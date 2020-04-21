const express = require("express");
const router = express.Router();
const UserModel = require("../models/User.Model");

router.post("/add", async (req, res) => {
  const { id, secs, day, hour } = req.body;

  console.log("asdasd asfaf", id, secs);
  await UserModel.findOneAndUpdate(
    {
      _id: id,
    },
    {
      $push: {
        allTimes: secs,
        dayWeek: day,
        hours: hour,
      },
    }
  );
  await UserModel.findOneAndUpdate(
    {
      _id: id,
    },
    {
      $set: { lastTime: secs },
    }
  );
  console.log("ASDAASCA", bla);
  res.json({ status: `Added ${secs}scs al id ${id}` });
});

module.exports = router;
