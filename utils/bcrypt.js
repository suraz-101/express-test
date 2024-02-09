require("dotenv").config();
const bcrypt = require("bcryptjs");

const encryption = (password) => {
  return bcrypt.hashSync(password, process.env.Salt);
};

module.exports = { encryption };
