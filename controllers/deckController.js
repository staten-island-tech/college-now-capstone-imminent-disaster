const Deck = require("../models/decks");
const path = require("path");
const multer = require("multer");
const User = require("../models/user");

const multerOptions = {
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  }),
  fileFilter: function (req, file, next) {
    const isPhoto = file.mimetype.startsWith("image/");
    if (isPhoto) {
      next(null, true);
    } else
      ({
        message: "That filetype is not allowed",
      }),
        false;
  },
};

exports.upload = multer(multerOptions).single("photo");

exports.homePage = async (req, res) => {
  try {
    const decks = await Deck.find({});
    res.json(decks);
  } catch (error) {
    console.log(error);
  }
};

exports.createDeck = async (req, res) => {
  try {
    const deck = new Deck(req.body);
    console.log(deck);
    await deck.save();
    res.json(deck);
    console.log(deck.name);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getDeck = async (req, res) => {
  try {
    const _id = req.body.id;
    const deck = await Deck.findOne({ _id });
    if (!deck) {
      throw new Error("no deck");
    }
    res.send(deck);
  } catch (error) {
    console.error(error);
    res.status(400).send("deck not found");
  }
};

exports.updateDeck = async (req, res) => {
  try {
    const deck = await Deck.findById(req.params.id);
    const updates = Object.keys(req.body);
    updates.forEach((update) => (deck[update] = req.body[update]));
    await deck.save();
    res.json(deck);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteDeck = async (req, res) => {
  try {
    const deck = await Deck.findByIdAndDelete(req.params.id);
    if (!deck) {
      res.status(404).send();
    }
    res.send(`${deck} was removed`);
  } catch (error) {
    res.status(500).send(error);
  }
};
