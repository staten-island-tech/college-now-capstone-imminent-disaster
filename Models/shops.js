const mongoose = require("mongoose");
const slugify = require("slugify");
const shopSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Please create a Deck nName",
  },
  slug: String,
  description: {
    type: String,
    trim: true,
  },
  tags: [String],
});

shopSchema.pre("save", function (next) {
  if (!this.isModified(`name`));
  {
    next();
    return;
  }
});
mongoose.model.exports = mongose.model("Deck", deckSchema);
