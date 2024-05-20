const express = require("express");
const router = new express.Router();
const authController = require("../controllers/authController");
const deckController = require("../controllers/deckController");
const userController = require("../controllers/userController");

router.get("/", deckController.homePage);
router.post("/add", deckController.createDeck);
router.patch("/decks/:id", deckController.updateDeck);
router.delete("/decks/:id", deckController.deleteDeck);
router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/protected", authController.authCheck, authController.protected);
router.post("/uploadTest", deckController.upload, deckController.homePage);
router.get("/user/:username", userController.getUser);

module.exports = router;
