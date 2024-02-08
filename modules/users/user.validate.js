const Joi = require("joi");

const Schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  phoneNumber: Joi.number().required(),
});

const validate = (req, res, next) => {
  const { error } = Schema.validate(req.body);

  error ? res.status(400).json({ message: error.details[0].message }) : next();
};

module.exports = { validate };
