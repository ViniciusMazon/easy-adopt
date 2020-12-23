exports.up = function (knex) {
  return knex.schema.createTable('collaborators', (table) => {
    table.string('id').primary();
    table.string('name').notNullable();
    table.date('birth_date').notNullable();
    table.string('cpf').notNullable();
    table.string('email').notNullable();
    table.string('hash_password').notNullable();
    table.string('password_reset_token').nullable();
    table.date('password_reset_expires').nullable();
    table.string('phone').notNullable();
    table.string('access_code').notNullable();
    table.string('role').notNullable();
    table
      .string('address_id')
      .references('id')
      .inTable('addresses')
      .onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('collaborators');
};
