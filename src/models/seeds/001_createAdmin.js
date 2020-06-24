const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '..', '..', '.env') });
const bcrypt = require('bcryptjs');
const knex = require('knex');

exports.seed = async function(knex) {
  return await knex('User').insert({
    avatar: process.env.ADM_AVATAR,
    active: true,
    firstName: process.env.ADM_FNAME,
    lastName: process.env.ADM_LNAME,
    email: process.env.ADM_MAIL,
    password: bcrypt.hashSync(process.env.ADM_PASS, bcrypt.genSaltSync(12)),
    date: new Date,
    update: new Date
  });
}