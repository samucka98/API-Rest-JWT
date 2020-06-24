const knex = require('../models/connection');
const bcrypt = require('bcryptjs');

const ValidateController = require('./ValidadeController');
const validateController = new ValidateController();

class UserController {

  async index(request, response) {
    try {
      
      const data = await knex('User')
        .select('id')
        .select('avatar')
        .select('firstName')
        .select('lastName')
        .select('email');
      
      response.send(data);

    } catch (error) {
      response.status(400).send(error);
    }
  }

  async register(request, response) {

    const { error } = validateController.register(request.body);

    if (error) {
      return response.status(400).send(error.message);
    }

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

  async delete(request, response) {
    const { id } = request.params;
    const auth = request.headers;

    const user = await knex('User')
      .where('id', id)
      .first();

      await knex('User').where('id', id).first().delete();
  }

}

module.exports = UserController;