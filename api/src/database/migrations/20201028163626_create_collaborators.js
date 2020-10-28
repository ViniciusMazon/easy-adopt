exports.up = function (knex) {
  return knex.schema.createTable('collaborators', (table) => {
    table.string('id').primary();
    table.string('access_code').notNullable();
    table.string('user_id').notNullable().references('id').inTable('users');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('collaborators');
};
