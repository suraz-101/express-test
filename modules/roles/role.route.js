const router = require("express").Router();

router.get("/", (req, res) => {
  try {
    res.json({ message: `We are inside get method of role` });
  } catch (error) {
    next(error);
  }
});

router.post("/", (req, res) => {
  try {
    res.json({ message: `We are inside post method of role` });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", (req, res) => {
  try {
    const { id } = req.params;
    res.json({
      message: `We are inside put request of roles and the id is ${id}`,
    });
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", (req, res) => {
  try {
    const { id } = req.params;
    res.json({
      message: `We are inside patch request of roles and the id is ${id}`,
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", (req, res) => {
  try {
    const { id } = req.params;
    res.json({
      message: `We are inside delete request of roles and the id is ${id}`,
    });
  } catch (error) {
    next(error);
  }
});
module.exports = router;
