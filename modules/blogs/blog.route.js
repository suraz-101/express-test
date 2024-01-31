const router = require("express").Router();
router.get("/", (req, res) => {
  res.json({ mess: "we are inside blog router" });
});

router.post("/", (req, res) => {
  res.json({ mes: "We are inside blog post methods" });
});
module.exports = router;
