exports.up = function (knex) {
  return knex.schema.createTable('addresses', (table) => {
    table.string('id').primary();
    table.string('street').notNullable();
    table.string('neighborhood').notNullable();
    table.string('city').notNullable();
    table.string('state').notNullable();
    table.string('cep').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('addresses');
};
