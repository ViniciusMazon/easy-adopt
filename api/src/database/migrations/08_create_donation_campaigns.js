exports.up = function (knex) {
  return knex.schema.createTable('donation_campaigns', (table) => {
    table.string('id').primary();
    table.date('creation_date').notNullable();
    table.string('status').notNullable();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.float('goal').notNullable();
    table.float('current').notNullable();
    table
      .string('created_by')
      .notNullable()
      .references('id')
      .inTable('collaborators')
      .onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('donation_campaigns');
};
