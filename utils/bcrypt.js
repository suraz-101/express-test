require("dotenv").config();
const bcrypt = require("bcryptjs");

const encryption = (password) => {
  return bcrypt.hashSync(password, process.env.SALT);
};

const decryption = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword);
};
module.exports = { encryption, decryption };
