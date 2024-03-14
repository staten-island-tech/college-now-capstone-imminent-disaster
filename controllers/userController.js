const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "variables.env" });

const generateToken = async function (user) {
  const token = jwt.sign({ _id: user._id }, `${process.env.SECRET}`, {
    expiresIn: 60 * 60,
  });
  return token;
};

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
    rees.json(updates);
  } catch (error) {
    console.log(error);
    console.log("update error");
  }
};

exports.register = async function (req, res) {
  if (!req.body.username || !req.body.password) {
    res.json({ success: false, msg: "Please pass username and password." });
  } else {
    console.log(req.body.password);
    let newUser = new User({
      username: req.body.username,
      password: req.body.password,
    });
    const token = await generateToken(newUser);
    await newUser.save();
    res.json({
      success: true,
      msg: "Successfully created new user.",
      newUser,
      token,
    });
  }
};

exports.login = async (req, res) => {
  try {
    let username = req.body.username;
    let password = req.body.password;
    const user = await User.findOne({ username });

    if (!user) {
      throw new Error("Unable to login");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    const token = await generateToken(user);
    if (!isMatch) {
      throw new Error("Unable to login");
    }

    res.send({ user, token });
  } catch (error) {
    console.log(error);
    res.status(400).send("user not found");
  }
};
exports.authCheck = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, `${process.env.SECRET}`);
    const user = await User.findOne({
      _id: decoded._id,
    });

    if (!user) {
      throw new Error();
    }
    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate." });
  }
};

exports.protected = async (req, res) => {
  let user = req.user;
  try {
    res.json({ user });
  } catch (error) {
    res.status(500).json(error);
  }
};
