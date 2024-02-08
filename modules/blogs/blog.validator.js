const Joi = require("joi");

const Schema = Joi.object({
  title: Joi.string().required(),
  tags: [Joi.string()], //["Science", "mern-stack"] ??
  content: Joi.string(),
  author: Joi.string(),
  words: Joi.number(),
  status: Joi.string(),
});

const validate = (req, res, next) => {
  const { error } = Schema.validate(req.body);

  if (error) {
    res.status(400).json({ message: error.details[0].message });
  } else {
    next();
  }
};

module.exports = { validate };
