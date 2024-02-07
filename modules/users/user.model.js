const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Name is mandatory"] },
  email: { type: String, required: [true, "Please provide the email"] },
  phoneNumber: {
    type: Number,
    required: [true, "Please provide contact details"],
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const userModel = new mongoose.model("Users", userSchema);

module.exports = userModel;
