const express = require("express");
const router = express.Router();
const User = require("../models/users");

router.get("/", async (req, res) => {
  try {
    // us = new User("PP", 26, "ds@ds");
    us = new User();
    const user = await us.getAllUsers();
    res.json(user);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.post("/", async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  });

  try {
    const a1 = await user.save();
    // console.log(a1);
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user.sub = req.body.sub;
    const a1 = await user.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

module.exports = router;
