const connection = require('../../database/connection');

module.exports = {
  async create(animal) {
    await connection('animals').insert(animal);
  },
};
