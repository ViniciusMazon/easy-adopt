const connection = require('../../database/connection');

module.exports = {
  async create(procedure) {
    await connection('procedures').insert(procedure);
    return;
  },
  async index(animal_id) {
    const procedures = await connection('procedures').where('animal_id', animal_id).select('*');
    return procedures;
  },
};
