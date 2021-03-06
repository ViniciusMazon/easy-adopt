const connection = require('../../database/connection');

module.exports = {
  async create(donation) {
    await connection('donations').insert(donation);
    return;
  },
  async edit(id) {
    await connection('donations').where('id', id).update({ status: 'pago' });
    return;
  },
  async show(id) {
    const [donation] = await connection('donations').where('id', id);
    return donation;
  },
};
