const connection = require('../../database/connection');

module.exports = {
  async create(tutor) {
    await connection('tutors').insert(tutor);
    return;
  },
  async show(id) {
    const [tutor] = await connection('tutors')
      .where('id', id)
      .select('name', 'email');
    return tutor;
  },
};
