const userSchema = require("./user.model");
const { encryption, decryption } = require("../../utils/bcrypt");
const { mailler } = require("../../services/nodemailer");
const { checkRole } = require("../../utils/sessionManager");
const { signJWT, verifyJWT } = require("../../utils/token");

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

const registerUser = async (payload) => {
  const { password } = payload;
  // bcrypt the password
  const hashPass = await encryption(password);
  payload.password = hashPass;

  // store payload into the database
  const registeredUsers = await userSchema.create(payload);

  // send mail if successfull
  if (!registeredUsers) throw new Error("Registration Failed");
  const { email } = payload;
  const message = mailler(email);
  // else throw new Error("registration failed");
  if (!message) throw new Error("Regsitration Failed");
  return "Registration successfull";
};

const loginUser = async (payload) => {
  const { email, password } = payload;
  //check whether payload contains email and password or not if empty throw error else seach detail of users using the email
  if (!email || !password)
    throw new Error("Please enter username and password");
  const user = await userSchema.findOne({ email }).select("+password");
  // if user is found then extract the hashed password
  if (!user) throw new Error("Email is invalid");
  const { password: hash } = user;
  // compare the password using bcryptjs package
  const comparePassword = decryption(password, hash);
  // if comparePassword is false then throw error else move to next steps where you need to create a json body to send specific user's data to client
  if (!comparePassword) throw new Error("Password does not matched");
  //return access tokemn
  const userPayload = {
    name: user.name,
    email: user.email,
    role: user.role,
  };

  const token = await signJWT(userPayload);
  return token;
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUsersDetails,
  deleteUser,
  registerUser,
  loginUser,
};
