exports.up = function (knex) {
  return knex.schema.createTable('adoption_requests', (table) => {
    table.string('id').primary();
    table.date('opening_date').notNullable();
    table.date('evaluation_date').nullable();
    table.string('status').notNullable();
    table.string('residence_type').notNullable();
    table.string('adults_home').notNullable();
    table.string('children_home').notNullable();
    table.string('smokers_home').notNullable();
    table.string('adopted_before').notNullable();
    table.string('other_animals').notNullable();
    table.string('sick_animals').notNullable();
    table.string('aware_cost').notNullable();
    table.string('why_want_adopt').notNullable();
    table
      .string('animal_id')
      .references('id')
      .inTable('animals')
      .onDelete('CASCADE');
    table.string('tutor_id').references('id').inTable('tutors');
    table
      .string('collaborator_id')
      .nullable()
      .references('id')
      .inTable('collaborators');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('adoption_requests');
};
