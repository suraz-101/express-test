const router = require("express").Router();
const blogController = require("./blog.controler");
const { validate } = require("./blog.validator");
const { checkRole } = require("../../utils/sessionManager");

router.get("/", checkRole(["user", "admin"]), async (req, res, next) => {
  try {
    const { title, author, page, limit } = req.query;
    const search = { title, author };
    const result = await blogController.getAll(search, page, limit);
    res.json({ message: result });
  } catch (error) {
    next(error);
  }
});

router.get(
  "/getPublishedBlogs",
  checkRole(["user"]),
  async (req, res, next) => {
    try {
      const result = await blogController.getPublishedBlogs();
      res.status(200).json({ message: result });
    } catch (error) {
      nect(error);
    }
  }
);

router.get("/:slug", async (req, res, next) => {
  try {
    const { slug } = req.params;
    console.log(slug);
    const result = await blogController.getById(slug);
    res.json({ data: result });
  } catch (error) {
    next(error);
  }
});

router.post("/", checkRole(["user"]), validate, async (req, res, next) => {
  try {
    const result = await blogController.create(req.body);
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

router.patch("/:id", checkRole(["user"]), (req, res, next) => {
  try {
    const { id } = req.params;
    res.json({ message: `We are inside patch request and the id is ${id}` });
  } catch (err) {
    next(err);
  }
});

router.delete("/deleteBlog", checkRole(["user"]), async (req, res, next) => {
  try {
    const { id } = req.body;
    const result = await blogController.deleteById(id);
    res.json({ message: result });
  } catch (error) {
    next();
  }
});

module.exports = router;
