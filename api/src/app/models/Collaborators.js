const connection = require('../../database/connection');

module.exports = {
  async create(collaborator) {
    await connection('collaborators').insert(collaborator);
    return;
  },
  async edit(id, collaborator) {
    await connection('collaborators').where('id', id).update(collaborator);
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
