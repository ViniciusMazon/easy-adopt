exports.up = function (knex) {
  return knex.schema.createTable('donations', (table) => {
    table.string('id').primary();
    table.date('date').notNullable();
    table.float('amount').notNullable();
    table.string('status').notNullable();
    table
      .string('donation_campaign_id')
      .notNullable()
      .references('id')
      .inTable('donation_campaigns')
      .onDelete('CASCADE');
    table
      .string('tutor_id')
      .notNullable()
      .references('id')
      .inTable('tutors')
      .onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('donations');
};
