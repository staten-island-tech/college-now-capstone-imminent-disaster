const express = require("express");
const router = new express.Router();
const authController = require("../controllers/authController");
const shopController = require("../controllers/shopController");

router.get("/", shopController.homePage);
router.post("/add", shopController.createShop);
router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/protected", authController.authCheck, authController.protected);

module.exports = router;
