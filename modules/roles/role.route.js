const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ message: `We are inside get method of role` });
});

router.post("/", (req, res) => {
  res.json({ message: `We are inside post method of role` });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: `We are inside put request of roles and the id is ${id}`,
  });
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: `We are inside patch request of roles and the id is ${id}`,
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: `We are inside delete request of roles and the id is ${id}`,
  });
});
module.exports = router;
