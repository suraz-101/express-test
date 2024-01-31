// importing router to handle route matching, requests, and seding responses
const router = require("express").Router();
const blogRouter = require("../modules/blogs/blog.route"); // importing apis of blogs
const tagRouter = require("../modules/tags/tag.route");
const userRouter = require("../modules/users/user.route");
const roleRouter = require("../modules/roles/role.route");
//using Http get method

router.use("/blogs", blogRouter);
router.use("/tags", tagRouter);
router.use("/users", userRouter);
router.use("/roles", roleRouter);

module.exports = router; // exporting router that can be accessible to other files in the project
