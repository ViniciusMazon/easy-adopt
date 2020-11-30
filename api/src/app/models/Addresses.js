const connection = require('../../database/connection');

module.exports = {
  async create(address) {
    await connection('addresses').insert(address);
    return;
  },
  async edit(id, address) {
    await connection('addresses').where('id', id).update(address);
    return;
  },
};
