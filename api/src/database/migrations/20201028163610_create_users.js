exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.string('id').primary();
    table.string('name').notNullable();
    table.date('birth_date').notNullable();
    table.string('cpf').notNullable();
    table.string('email').notNullable();
    table.string('hash_password').notNullable();
    table.string('phone').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
