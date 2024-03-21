const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slugify = require("slugify");

const deckSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Please create a deck name",
  },
  slug: String,
  description: {
    type: String,
    trim: true,
  },
  photo: String,
});

deckSchema.pre("save", function (next) {
  if (!this.isModified("name")) {
    next();
    return;
  }
  this.slug = slugify(this.name);
  next();
});

module.exports = mongoose.model("Deck", deckSchema);
