const Deck = require("../models/shops");
exports.homePage = async (req, res) => {
  const decks = ["Whalen's Deck", "Meta Deck"];
  try {
    console.log(req.name);
    return res.send("We're live");
  } catch (error) {}
  console.log(error);
};

exports.createShop = async (res, req) => {
  try {
    const deck = new Deck(req.body);
    await deck.save();
  } catch (error) {
    res.status(500).json(error);
  }
};
