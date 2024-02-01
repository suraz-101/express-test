const router = require("express").Router();
const fs = require("fs");

router.get("/", (req, res) => {
  res.json({ mess: "we are inside blog router" });
});

router.post("/", (req, res) => {
  res.json({ mes: "We are inside blog post methods" });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ message: `We are inside put request and the id is ${id}` });
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ message: `We are inside patch request and the id is ${id}` });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ message: `We are inside delete folder and the id is ${id}` });
});
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

module.exports = router;
