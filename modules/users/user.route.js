const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ message: "We are inside users get method" });
});

router.post("/", (req, res) => {
  res.json({ message: `we are inside post method of user` });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ message: `We are inside put method of user` });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ message: `We are inside delete method of user` });
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ message: `We are inside patch method of user` });
});
module.exports = router;
