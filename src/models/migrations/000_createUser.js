const knex = require('knex');

exports.up = async function(knex) {
  return await knex.schema.createTable('User', table => {
    table.increments('id').primary();
    table.string('avatar').notNullable();
    table.boolean('active').notNullable();
    table.string('firstName').notNullable();
    table.string('lastName').notNullable();
    table.string('email').unique().notNullable();
    table.string('password').notNullable();
    table.dateTime('date').notNullable();
  });
}

exports.down = async function(knex) {
  return await knex.schema.dropTable('User');
}