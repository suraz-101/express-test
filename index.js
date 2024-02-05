require("dotenv").config(); // configuring dotenv file
const express = require("express");
const app = express();
const route = require("./routes/index");

app.use(express.json());
app.use("/", express.static("public"));
// app.use(morgan("dev"));

app.use("/", route);

app.use((err, req, res, next) => {
  err = err ? err.toString() : "something went wrong";
  res.status(500).json({ message: err });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
