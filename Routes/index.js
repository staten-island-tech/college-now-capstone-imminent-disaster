const express = require("express");
const router = new express.Router();

router.get("/", async (req, res) => {
  try {
    return res.send("We're live");
  } catch (error) {}
  console.log(error);
});

module.exports = router;
