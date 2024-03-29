const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "variables.env" });

exports.authMiddleware = (req, res, next) => {
  if (req.body.user) {
    next();
  } else {
    res.json("Please sign in.");
  }
};

exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getProfile = async (req, res) => {
  try {
    const profile = await user.find({ username: user.username });
    res.json(profile);
  } catch (error) {
    console.log(error);
    console.log("get error");
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await user.findById(req.params.id);
    const updates = Object.keys(req.body);
    console.log(updates);
    res.json(updates);
  } catch (error) {
    console.log(error);
    console.log("update error");
  }
};
