// importing router to handle route matching, requests, and seding responses
const router = require("express").Router();
const blogRouter = require("../modules/blogs/blog.route"); // importing apis of blogs
const tagRouter = require("../modules/tags/tag.route");
const userRouter = require("../modules/users/user.route");
const roleRouter = require("../modules/roles/role.route");

const apiVersion = "/api/v1";

//using Http get method

router.use(`${apiVersion}/blogs`, blogRouter);
router.use(`${apiVersion}/tags`, tagRouter);
router.use(`${apiVersion}/users`, userRouter);
router.use(`${apiVersion}/roles`, roleRouter);

module.exports = router; // exporting router that can be accessible to other files in the project
