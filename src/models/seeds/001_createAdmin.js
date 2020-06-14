const knex = require('knex');
const bcrypt = require('bcryptjs');

const pass = 'admin';

exports.seed = async function(knex) {
  return await knex('User').insert({
    avatar: 'photo',
    firstName: 'root',
    lastName: 'master',
    email: 'root@master.br',
    password: bcrypt.hashSync(pass, bcrypt.genSaltSync(12)),
    date: new Date
  });
}