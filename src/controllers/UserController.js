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
        .select('active')
        .select('firstName')
        .select('lastName')
        .select('email')
        .select('date')
        .select('update');

      const serializedUsers = data.map(user => {
        return {
          id: user.id,
          image_url: `http://${process.env.DOMAIN}:${process.env.PORT}/uploads/${user.avatar}`,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          date: user.date,
          update: user.update
        }
      })
      
      response.json(serializedUsers);

    } catch (error) {
      response.status(400).send(error);
    }
  }

  async register(request, response) {

    const { error } = validateController.registerUser(request.body);

    if (error) {
      return response.status(400).send(error.message);
    }

    const { avatar, active, firstName, lastName, email, password } = request.body;

    const user = {
      avatar,
      active,
      firstName,
      lastName,
      email,
      password: bcrypt.hashSync(password, bcrypt.genSaltSync(12)),
      date: new Date,
      update: new Date
    }

    try {
      await knex('User').insert(user);
      response.send(user);
    } catch (error) {
      response.status(400).send(error);
    }
  }

  async update(request, response) {
    const { id } = request.params;
    const user = await knex('User').where('id', id).first();

    if (user) {
      const { error } = validateController.registerUser(request.body);

      if (error) {
        return response.status(400).send(error.message);
      }

      const { avatar, active, firstName, lastName, email, password } = request.body;

      try {
        await knex('User')
        .where('id', '=', id)
        .update({
          avatar,
          active,
          firstName,
          lastName,
          email,
          password: bcrypt.hashSync(password, bcrypt.genSaltSync(12)),
          update: new Date()
        });

        response.status(200).send('Usuario atualizado!');
      } catch (error) {
        response.status(500).send('Erro ao atualizar, entre em contato com o suporte!');
      }

    } else {
      response.status(400).send('Usuário não encontrado!');
    }
  }

  async delete(request, response) {
    const { id } = request.params;

    if (id == 1) {
      return response.status(401).send('Este usuário não pode ser excluido sem acionar o suporte!');
    } else {
      const user = await knex('User')
        .where('id', id)
        .first();

        await knex('User').where('id', id).first().delete();
        response.status(200).send('Usuario deletado com sucesso!');
    }
  }
}

module.exports = UserController;