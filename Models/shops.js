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
  tags: [String],
});

shopSchema.pre("save", function (next) {
  if (!this.isModified("name")) {
    next();
    return;
  }
  this.slug = slugify(this.name);
  next();
});

mongoose.model.exports = mongoose.model("Deck", deckSchema);
