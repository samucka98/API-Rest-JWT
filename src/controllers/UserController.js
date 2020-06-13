const knex = require('../models/connection');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class UserController {

  async register(req, res) {
    const { avatar, firstName, lastName, email, password } = req.body;

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
      res.send(user);
    } catch (error) {
      res.status(400).send(error);
    }
  }

}

module.exports = UserController;