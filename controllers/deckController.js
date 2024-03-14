const deck = require("../models/decks");
const path = require("path");
const multer = require("multer");

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
  const decks = ["Whalen's Deck", "Meta Deck"];
  try {
    console.log(req.name);
    res.json([decks, req.name]);
    return res.send("We're live");
  } catch (error) {}
  console.log(error);
};

exports.createDeck = async (res, req) => {
  try {
    const deck = new deck(req.body);
    deck.photo = req.file.path;
    await deck.save();
  } catch (error) {
    res.status(500).json(error);
  }
};
