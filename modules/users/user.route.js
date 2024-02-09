const router = require("express").Router();
const userController = require("./user.controller");
const { validate } = require("./user.validate");
const nodemailer = require("nodemailer");

router.get("/", async (req, res) => {
  const result = await userController.getAllUsers();
  res.json({ data: result });
});

router.post("/", validate, async (req, res) => {
  const userData = req.body;
  // console.log(userData);

  const result = await userController.createUser(userData);
  res.json({ data: result });
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  const result = await userController.updateUsersDetails(id, updatedData);
  res.json({ message: result });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await userController.deleteUser(id);

  res.json({ message: result });
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ message: `We are inside patch method of user` });
});

router.post("/register", async (req, res, next) => {
  try {
    const result = await userController.registerUser(req.body);
    res.status(200).json({ message: result });
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const result = await userController.loginUser(req.body);
    res.status(200).json({ message: result });
  } catch (error) {
    next(error);
  }
});
module.exports = router;
