require("dotenv").config(); // configuring dotenv file
const express = require("express");
const app = express();

const route = require("./routes/index");

//to use body we need to add following code
app.use(express.json());

app.use("/", express.static("public"));

//middleware
// app.use((req, res, next) => {
//   req.body.published = "yes";
//   next();
// });

//Routing
app.use("/", route);

//Error Handling
app.use((err, req, res, next) => {
  err = err ? err.toString() : "something went wrong";
  res.status(500).json({ message: err });
});

// server listening port main gateway to the server through which request and response are propagate to an fromt the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
