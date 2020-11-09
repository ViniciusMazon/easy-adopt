exports.up = function (knex) {
  return knex.schema.createTable('schedule', (table) => {
    table.string('id').primary();
    table.date('date').notNullable();
    table.string('time').notNullable();
    table
      .string('tutor_id')
      .notNullable()
      .references('id')
      .inTable('tutors')
      .onDelete('CASCADE');
    table
      .string('animal_id')
      .notNullable()
      .references('id')
      .inTable('animals')
      .onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('schedule');
};
