exports.up = function (knex) {
  return knex.schema.createTable('tutors', (table) => {
    table.string('id').primary();
    table.string('avatar_url').notNullable();
    table.string('name').notNullable();
    table.date('birth_date').notNullable();
    table.string('cpf').notNullable();
    table.string('email').notNullable();
    table.string('hash_password').notNullable();
    table.string('phone').notNullable();
    table
      .string('address_id')
      .references('id')
      .inTable('addresses')
      .onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('tutors');
};
