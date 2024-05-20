const User = require("../models/user");
const bcrypt = require("bcryptjs");
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

exports.getUser = async (req, res) => {
  try {
    const profile = await User.find({ username: req.body.username });
    const answer = res.json(profile);
    return answer;
  } catch (error) {
    console.log(error);
    console.log("get error");
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const updates = Object.keys(req.body);
    console.log(updates);
    res.json(updates);
  } catch (error) {
    console.log(error);
    console.log("update error");
  }
};
