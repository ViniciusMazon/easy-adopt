const connection = require('../../database/connection');

module.exports = {
  async create(animal) {
    await connection('animals').insert(animal);
    return;
  },
  async index() {
    const animals = await connection('animals').select('*');
    return animals;
  },
  async show(id) {
    const animal = await connection('animals')
      .where('id', id)
      .select('*')
      .first();

    return animal;
  },
};
