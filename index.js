require("dotenv").config(); // configuring dotenv file
const express = require("express");
const middleware = require("./middleware");
const morgan = require("morgan"); //logger
const mongoose = require("mongoose");
const PORT = Number(process.env.PORT);
const route = require("./routes/index");

const app = express();

mongoose.connect("");

app.use(morgan("dev")); // checking log
app.use(express.json());
app.use("/", express.static("public"));
// app.use(morgan("dev"));

app.use(middleware.applicationLevelMiddleware); // implementation of middleware
app.use("/", route);

app.use((err, req, res, next) => {
  err = err ? err.toString() : "something went wrong";
  res.status(500).json({ message: err });
  // next();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
