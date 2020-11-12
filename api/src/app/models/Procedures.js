const connection = require('../../database/connection');

module.exports = {
  async create(procedure) {
    await connection('procedures').insert(procedure);
    return;
  },
  async index(animal_id) {
    const procedures = await connection('procedures')
      .innerJoin(
        'collaborators',
        'procedures.collaborator_id',
        'collaborators.id'
      )
      .where('animal_id', animal_id)
      .select('procedures.*', 'collaborators.name as collaborator_name');
    return procedures;
  },
};
