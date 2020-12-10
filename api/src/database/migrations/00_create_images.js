exports.up = function (knex) {
  return knex.schema.createTable('images', (table) => {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('type').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('images');
};
