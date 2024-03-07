const express = require("express");
const router = new express.Router();
const userController = require("../controllers/userController");

router.post("/user/add", userController.createUser);
router.get("/user/profile", userController.getProfile);
router.patch("/user/:username", userController.updateUser);

module.exports = router;
