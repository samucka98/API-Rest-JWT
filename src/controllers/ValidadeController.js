const Joi = require('@hapi/joi');

class ValidateController {

  register(data) {
    const schema = Joi.object({
      avatar: Joi.string(),
      active: Joi.boolean().required(),
      firstName: Joi.string().required().min(2).max(50),
      lastName: Joi.string().required().min(2).max(50),
      email: Joi.string().email().required(),
      password: Joi.string().required().min(6).max(100)
    });

    return schema.validate(data);
  }

  login(data) {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required().min(6).max(100)
    });

    return schema.validate(data);
  }
}

module.exports = ValidateController;