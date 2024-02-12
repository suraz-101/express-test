// require("dotenv").config();
const JWT = require("jsonwebtoken");

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
  var minm = 100000;
  var maxm = 999999;
  return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
};

module.exports = { signJWT, verifyJWT, otpCode };
