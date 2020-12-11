exports.up = function (knex) {
  return knex.schema.createTable('animals', (table) => {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('gender').notNullable();
    table.string('specie').notNullable();
    table.string('size').notNullable();
    table.string('age').notNullable();
    table.string('status').notNullable();
    table.date('registration_date').notNullable();
    table
      .string('image1_id')
      .references('id')
      .inTable('images')
      .onDelete('CASCADE');
    table
      .string('image2_id')
      .references('id')
      .inTable('images')
      .onDelete('CASCADE');
    table
      .string('image3_id')
      .references('id')
      .inTable('images')
      .onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('animals');
};
