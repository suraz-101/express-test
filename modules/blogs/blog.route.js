const router = require("express").Router();
const blogController = require("./blog.controler");
const { validate } = require("./blog.validator");

const checkRole = (req, res, next) => {
  const role = req.headers.role;

  role != "admin" ? res.json({ message: "You are not allowed!!" }) : next();
};

router.get("/", async (req, res, next) => {
  try {
    const result = await blogController.getAll();
    res.json({ data: result });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await blogController.getById(id);
    res.json({ data: result });
  } catch (error) {
    next(error);
  }
});

router.post("/", validate, async (req, res, next) => {
  try {
    const data = req.body;
    const result = await blogController.create(data);
    res.json({ data: result });
  } catch (err) {
    next(err);
  }
});

router.put("/:id", validate, async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    console.log(data);
    const result = await blogController.updateById(id, data);
    res.json({ message: result });
  } catch (err) {
    next(err);
  }
});

router.patch("/:id", validate, (req, res, next) => {
  try {
    const { id } = req.params;
    res.json({ message: `We are inside patch request and the id is ${id}` });
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    // console.log(id);
    const result = await blogController.deleteById(id);
    res.json({ message: result });
  } catch (error) {
    next();
  }
});

module.exports = router;
