const express = require("express");
const UserModel = require("../models/User.Model");
const passport = require("passport");
const lodash = require("lodash");
const router = express.Router();
const { hashPassword, checkHashed } = require("../lib/hashing");
const { isLoggedIn, isLoggedOut } = require("../lib/loggedMidleware");

router.post("/signup", async (req, res) => {
  const { username, password, email } = req.body;

  // Check if user is created

  const existUser = await UserModel.findOne({ username });

  if (!existUser) {
    const newUser = await UserModel.create({
      username,
      password: hashPassword(password),
      email
    });

    req.logIn(newUser, err => {
      res.json(
        lodash.pick(req.user, ["username", "_id", "createdAt", "updatedAt"])
      );
    });
  } else {
    res.json({ status: "User Exist, try again!" });
  }
});

router.post("/login", (req, res) => {
  passport.authenticate("local", (err, user, failureDetails) => {
    if (err) {
      console.log("err:", err);
      return res.json({ status: "Error en la Autentificación" });
    }
    if (!user) {
      return res.json({ status: "No existe el usuario" });
    }
    req.login(user, err => {
      if (err) {
        return res.status(500).json({ status: "Sesión mal guardada" });
      }

      return res.json(
        lodash.pick(req.user, ["username", "email", "createdAt", "updatedAt"])
      );
    });
  })(req, res);
});

router.post("logout", isLoggedIn(), async (req, res) => {
  if (req.user) {
    req.logout();
    return res.json({ status: "Logout OK" });
  } else {
    res.status(401).json({ status: "Debes estar logeado para logout" });
  }
});

module.exports = router;