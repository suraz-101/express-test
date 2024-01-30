const express = require("express");
const { json } = require("express/lib/response");
const app = express();
// require("dotenv").config();
const PORT = 8000;

//to use body we need to add following code

app.use(express.json());

let users = [
  {
    id: 1,
    name: "suraj",
    email: "surajpandey101@gmail.com",
  },
  {
    id: 2,
    name: "sandesh",
    email: "sandesh12@gmail.com",
  },
  {
    id: 3,
    name: "sandesh",
    email: "sandygiri@gmail.com",
  },
  {
    id: 4,
    name: "nabin",
    email: "nabin123@gmail.com",
  },
];

//using Http get method
app.get("/", (req, res) => {
  res.status(200).json(users);
});

app.get("/:id", (req, res) => {
  console.log(req);
  const { id } = req.params;
  console.log("The id is :" + id);

  const data = users.filter((object) => {
    return object.id == id;
  });

  res.json({
    message: ` the data of the user with id ${id} are ${JSON.stringify(data)}}`,
  });
});

//using Http post method
app.post("/", (req, res) => {
  //send data to database
  // const paramsData = req.query;
  // console.log(paramsData);
  const data = req.body;

  console.log(data);
  users.push(data);
  setTimeout(() => {
    console.log(users);
    res.status(200).json({
      message: `blog add with data ${JSON.stringify(users)} `,
    });
  }, 2000);
});

// using HTTP put method
app.put("/:id", (req, res) => {
  // console.log(req);
  const { id } = req.params;

  // const d = req.body;
  // const data = req.headers;
  console.log(id);
  // Read data from database and update the data of the specific id
  res.status(200).json({ message: `The data to be updated are ${id}` });
});

//using HTTP delete method
app.delete("/:id", (req, res) => {
  const { id } = req.params;

  // delete
  res
    .status(200)
    .json({ message: `Data with id ${id} has been deleted from the database` });
});

//using HTTP patch method
app.patch("/:id", (req, res) => {
  res.status(200).json({ message: "Hello patch World!" });
});

// server listening port main gateway to the server through which request and response are propagate to an fromt the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//data sending mechanism (FE to BE)

// PARAMS => /:id
// BODY
//querry
// HEADER
