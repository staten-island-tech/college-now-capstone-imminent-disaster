const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    unique: true,
    required: [true, "Please choose a username"],
  },
  password: {
    type: String,
    trim: true,
    required: [true, "Please choose a password"],
  },
});

userSchema.plugin(uniqueValidator, { message: "is already taken" });

module.exports = mongoose.model("User", userSchema);
