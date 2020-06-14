const knex = require('../models/connection');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class AccessController {

  async login(request, response) {

    const user = await knex('User').select('*').where('email', request.body.email).first();

    if (!user) {
      return response.status(400).send('Email não encontrado!');
    }

    const authorization = bcrypt.compareSync(request.body.password, user.password);

    if (authorization) {
      const token = jwt.sign({ id: user.id, email: user.email }, process.env.TOKEN_SECRET, { expiresIn: process.env.TOKEN_EXPIRED_TIME });

      response.header('authorization-token', token);
      response.send(`${ user.email } está logado!`);
    } else {
      response.send('Senha inválida');
    }
  }
}

module.exports = AccessController;