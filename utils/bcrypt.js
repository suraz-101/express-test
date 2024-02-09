require("dotenv").config();
const bcrypt = require("bcryptjs");

const encryption = (password) => {
  return bcrypt.hashSync(password, process.env.Salt);
};

const decryption = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword);
};
module.exports = { encryption, decryption };
