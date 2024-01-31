const express = require("express");
// const { json } = require("express/lib/response");
const app = express();
const indexRouter = require("./routes/index");
// require("dotenv").config();
const PORT = 8000;

//to use body we need to add following code
app.use(express.json());

app.use("/", indexRouter);

// server listening port main gateway to the server through which request and response are propagate to an fromt the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
