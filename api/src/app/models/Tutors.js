const connection = require('../../database/connection');

module.exports = {
  async show(id) {
    const [tutor] = await connection('tutors')
      .where('id', id)
      .select('name', 'email');
    return tutor;
  },
};
