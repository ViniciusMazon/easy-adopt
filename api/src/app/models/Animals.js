const { destroy } = require('../../database/connection');
const connection = require('../../database/connection');

module.exports = {
  async create(animal) {
    await connection('animals').insert(animal);
    return;
  },
  async edit(id, animal) {
    await connection('animals').where('id', id).update(animal);
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
  async destroy(id) {
    await connection('animals').where('id', id).delete();
    return;
  },
};
