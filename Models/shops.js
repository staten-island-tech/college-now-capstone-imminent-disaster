const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Please create a Deck nName",
  },
  description: {
    type: String,
    trim: true,
  },
  tags: { String },
});

mongoose.model.exports = mongose.model("Deck", deckSchema);
