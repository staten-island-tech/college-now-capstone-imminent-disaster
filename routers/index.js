const express = require("express");
const router = new express.Router();
const userController = require("../controllers/userController");
const shopController = require("../controllers/shopController");

router.get("/", shopController.homePage);
router.post("/add", shopController.createShop);
router.post("/user/add", userController.createUser);
router.get("/user/profile", userController.getProfile);
router.patch("/user/:username", userController.updateUser);

module.exports = router;
