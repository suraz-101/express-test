const router = require("express").Router();
const blogController = require("./blog.controler");
const { validate } = require("./blog.validator");
const { checkRole } = require("../../utils/sessionManager");

router.get("/", checkRole(["user", "admin"]), async (req, res, next) => {
  try {
    const result = await blogController.getAll();
    res.json({ data: result });
  } catch (error) {
    next(error);
  }
});

router.get("/getBlod", async (req, res, next) => {
  try {
    const { id } = req.body;
    const result = await blogController.getById(id);
    res.json({ data: result });
  } catch (error) {
    next(error);
  }
});

router.post("/", validate, checkRole(["admin"]), async (req, res, next) => {
  try {
    const data = req.body;
    const result = await blogController.create(data);
    res.json({ data: result });
  } catch (err) {
    next(err);
  }
});

router.put("/updateBlog", checkRole(["admin"]), async (req, res, next) => {
  try {
    const { id, ...rest } = req.body;
    console.log(rest);
    const result = await blogController.updateById(id, rest);
    res.json({ message: result });
  } catch (err) {
    next(err);
  }
});

router.patch("/:id", checkRole(["admin"]), (req, res, next) => {
  try {
    const { id } = req.params;
    res.json({ message: `We are inside patch request and the id is ${id}` });
  } catch (err) {
    next(err);
  }
});

router.delete("/deleteBlog", checkRole(["admin"]), async (req, res, next) => {
  try {
    const { id } = req.body;
    const result = await blogController.deleteById(id);
    res.json({ message: result });
  } catch (error) {
    next();
  }
});

module.exports = router;
