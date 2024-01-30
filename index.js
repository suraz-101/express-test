const express = require("express");
const app = express();
// require("dotenv").config();
const PORT = 8000;

//to use body we need to add following code

app.use(express.json());

//using Http get method
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

//using Http post method
app.post("/", (req, res) => {
  //send data to database

  res.status(200).json({ message: "Hello post World!" });
});

// using HTTP put method
app.put("/:id", (req, res) => {
  const { id } = req.params;
  const d = req.body;
  const data = req.headers;
  console.log(data);
  // Read data from database and update the data of the specific id
  res.status(200).json({ message: `The data to be updated are ${id}` });
});

//using HTTP delete method
app.delete("/:id", (req, res) => {
  // delete
  res.status(200).json({ message: "Hello delete World!" });
});

//using HTTP patch method
app.patch("/:id", (req, res) => {
  res.status(200).json({ message: "Hello patch World!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//data sending mechanism (FE to BE)

// PARAMS => /:id
// BODY
//querry
// HEADER
