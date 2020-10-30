exports.up = function (knex) {
  return knex.schema.createTable('procedures', (table) => {
    table.string('id').primary();
    table.date('date').notNullable();
    table.string('name').notNullable();
    table.string('comments').notNullable();
    table
      .string('animal_id')
      .notNullable()
      .references('id')
      .inTable('animals')
      .onDelete('CASCADE');
    table
      .string('collaborator_id')
      .notNullable()
      .references('id')
      .inTable('collaborators');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('procedures');
};
