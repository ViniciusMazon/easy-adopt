exports.up = function (knex) {
  return knex.schema.createTable('access_code', (table) => {
    table.string('id').primary();
    table.string('access_code').notNullable();
    table.date('creation_date').notNullable();
    table
      .string('created_by')
      .nullable()
      .references('id')
      .inTable('collaborators')
      .onDelete('CASCADE');
    table.date('date_use').nullable();
    table
      .string('used_by')
      .nullable()
      .references('id')
      .inTable('collaborators')
      .onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('access_code');
};
