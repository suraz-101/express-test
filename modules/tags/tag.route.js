// const { Router  = require('express');

const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ mess: "we are inside tags router" });
});
module.exports = router;
