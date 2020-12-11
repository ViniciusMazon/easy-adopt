const connection = require('../../database/connection');

module.exports = {
  async create(tutor) {
    await connection('tutors').insert(tutor);
    return;
  },
  async edit(id, tutor) {
    await connection('tutors').where('id', id).update(tutor);
    return;
  },
  async show(id) {
    const [tutor] = await connection('tutors')
      .where('id', id)
      .select('name', 'email');
    return tutor;
  },
  async showByEmail(email) {
    const [tutor] = await connection('tutors')
      .innerJoin('addresses', 'tutors.address_id', 'addresses.id')
      .innerJoin('images', 'tutors.avatar_id', 'images.id')
      .where('tutors.email', email)
      .select(
        'tutors.id',
        'images.name as avatar',
        'images.id as avatar_id',
        'tutors.gender',
        'tutors.name',
        'tutors.birth_date',
        'tutors.cpf',
        'tutors.email',
        'tutors.phone',
        'tutors.address_id',
        'addresses.street',
        'addresses.number',
        'addresses.neighborhood',
        'addresses.city',
        'addresses.state',
        'addresses.cep'
      );

    return tutor;
  },
};
