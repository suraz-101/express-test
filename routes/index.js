// importing router to handle route matching, requests, and seding responses
const router = require("express").Router();
const blogRouter = require("../modules/blogs/blog.route");
const tagRouter = require("../modules/tags/tag.route");
const userRouter = require("../modules/users/user.route");
const roleRouter = require("../modules/roles/role.route");
//using Http get method

router.use("/blogs", blogRouter);
router.use("/tags", tagRouter);
router.use("/users", userRouter);
router.use("/roles", roleRouter);

// router.get("/", (req, res) => {
//   fs.readFile("../users.txt", "utf8", (error, data) => {
//     if (error) {
//       res.json({ message: error });
//     } else {
//       res.status(200).json({ data });
//       console.log(data);
//     }
//   });
//   // res.status(200).json(users);
// });

// router.get("/:id", (req, res) => {
//   // console.log(req);
//   //   const { id } = req.params;
//   //   console.log("The id is :" + id);
//   //   const data = users.filter((object) => {
//   //     return object.id == id;
//   //   });

//   res.json({
//     message: ` the data of the user with id ${id} are ${JSON.stringify(data)}}`,
//   });
// });

// //using Http post method
// router.post("/", (req, res) => {
//   // const data = req.query;
//   const data = req.body;
//   console.log(data);

//   fs.appendFile("../users.txt", JSON.stringify(data) + "\n", (error) => {
//     if (error) {
//       res.json({
//         message: error,
//       });
//     } else {
//       res.status(200).json({
//         message: `Data written successfully into the file!! `,
//       });
//     }
//   });
// });

// // using HTTP put method
// router.put("/:id", (req, res) => {
//   const { id } = req.params;
//   console.log(id);
//   // Read data from database and update the data of the specific id
//   res.status(200).json({ message: `The data to be updated are ${id}` });
// });

// //using HTTP delete method
// router.delete("/:id", (req, res) => {
//   const { id } = req.params;
//   res
//     .status(200)
//     .json({ message: `Data with id ${id} has been deleted from the database` });
// });

// //using HTTP patch method
// router.patch("/:id", (req, res) => {
//   res.status(200).json({ message: "Hello patch World!" });
// });

module.exports = router; // exporting router that can be accessible to other files in the project
