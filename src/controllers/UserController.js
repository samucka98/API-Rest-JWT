const knex = require('../models/connection');
const bcrypt = require('bcryptjs');

class UserController {

  async register(request, response) {
    const { avatar, firstName, lastName, email, password } = request.body;

    const user = {
      avatar,
      firstName,
      lastName,
      email,
      password: bcrypt.hashSync(password, bcrypt.genSaltSync(12)),
      date: new Date
    }

    try {
      await knex('User').insert(user);
      response.send(user);
    } catch (error) {
      response.status(400).send(error);
    }
  }

}

module.exports = UserController;