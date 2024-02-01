const router = require("express").Router();
const checkRole = (req, res, next) => {
  const role = req.headers.role;

  role != "admin" ? res.json({ message: "You are not allowed!!" }) : next();
};
router.get("/", checkRole, (req, res) => {
  res.json({ mess: "we are inside get method of blog router" });
});

router.post("/", checkRole, (req, res, next) => {
  try {
    console.log(req.body);

    const { title } = req.body;
    const data = req.body;
    if (!title) throw new Error("Title is miising ");
    res.json({
      mes: `We are inside blog post methods ${JSON.stringify(data)}`,
    });
  } catch (err) {
    next(err);
  }
});

router.put("/:id", checkRole, (req, res, next) => {
  try {
    const { id } = req.params;
    // const { title } = req.body;
    // if (!title) throw new Error("Title is miising ");
    res.json({ message: `We are inside put request and the id is ${id}` });
  } catch (err) {
    next(err);
  }
});

router.patch("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    res.json({ message: `We are inside patch request and the id is ${id}` });
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    res.json({ message: `We are inside delete folder and the id is ${id}` });
  } catch (error) {
    next();
  }
});

module.exports = router;
