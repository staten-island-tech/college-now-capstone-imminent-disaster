const mongoose = require("mongoose");
const slugify = require("slugify");
const deckSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Please create a Deck Name",
  },
  slug: String,
  description: {
    type: String,
    trim: true,
  },
});


mongoose.model.exports = mongose.model("Deck", deckSchema);
