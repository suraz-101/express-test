// require("dotenv").config();
const JWT = require("jsonwebtoken");
const crypt = require("crypto");

const signJWT = (payload) => {
  return JWT.sign(
    {
      data: payload,
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_DURATION }
  );
};

const verifyJWT = (token) => {
  return JWT.verify(token, process.env.JWT_SECRET);
};

const otpCode = () => {
  return crypto.randomInt(100000, 999999);
};

module.exports = { signJWT, verifyJWT, otpCode };
