const connection = require('../../database/connection');
const { show } = require('../controllers/Collaborators');

module.exports = {
  async create(collaborator) {
    await connection('collaborators').insert(collaborator);
    return;
  },
  async show(id) {
    const collaborator = await connection('collaborators')
      .innerJoin('addresses', 'collaborators.address_id', 'addresses.id')
      .where('collaborators.id', id)
      .select('*')
      .first();

    return collaborator;
  },
};
