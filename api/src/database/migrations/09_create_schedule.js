exports.up = function (knex) {
  return knex.schema.createTable('schedule', (table) => {
    table.string('id').primary();
    table.date('date').notNullable();
    table.string('period').notNullable();
    table
      .string('adoption_request_id')
      .notNullable()
      .references('id')
      .inTable('adoption_requests')
      .onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('schedule');
};
