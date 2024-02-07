const userSchema = require("./user.model");

const createUser = (payload) => {
  return userSchema.create(payload);
};

const getAllUsers = () => {
  return userSchema.find();
};

const getUserById = (_id) => {
  return userSchema.findOne(_id);
};

const updateUsersDetails = (_id, payload) => {
  return userSchema.updateOne({ _id }, payload);
};

const deleteUser = (_id) => {
  return userSchema.deleteOne({ _id });
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUsersDetails,
  deleteUser,
};
