const knex = require('knex');

exports.up = async function(knex) {
  return knex.schema.createTable('User', table => {
    table.increments('id').primary();
    table.string('avatar');
    table.string('firstName').notNullable();
    table.string('lastName').notNullable();
    table.string('email').unique().notNullable();
    table.string('password').notNullable();
    table.dateTime('date').notNullable();
    table.boolean('admin').notNullable().defaultTo(false);
  });
}

exports.down = async function(knex) {
  return knex.schema.dropTable('User');
}