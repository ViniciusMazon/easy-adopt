const connection = require('../../database/connection');

module.exports = {
  async create(adoptionRequest) {
    await connection('adoption_requests').insert(adoptionRequest);
    return;
  },
  async update(id, evaluate) {
    await connection('adoption_requests').where('id', id).update(evaluate);
    return;
  },
  async index() {
    const adoptionRequests = await connection('adoption_requests')
      .innerJoin('animals', 'adoption_requests.animal_id', 'animals.id')
      .innerJoin('tutors', 'adoption_requests.tutor_id', 'tutors.id')
      .select(
        'adoption_requests.id',
        'adoption_requests.status',
        'animals.id as animal_id',
        'animals.name as animal_name',
        'animals.gender as animal_gender',
        'animals.image1 as animal_avatar',
        'tutors.id as tutor_id',
        'tutors.name as tutor_name',
        'tutors.gender as tutor_gender',
        'tutors.avatar as tutor_avatar'
      );

    return adoptionRequests;
  },
  async show(id) {
    const [adoptionRequest] = await connection('adoption_requests')
      .innerJoin('animals', 'adoption_requests.animal_id', 'animals.id')
      .innerJoin('tutors', 'adoption_requests.tutor_id', 'tutors.id')
      .innerJoin('addresses', 'tutors.address_id', 'addresses.id')
      .where('adoption_requests.id', id)
      .select(
        'adoption_requests.id',
        'adoption_requests.status',
        'adoption_requests.residence_type',
        'adoption_requests.adults_home',
        'adoption_requests.children_home',
        'adoption_requests.smokers_home',
        'adoption_requests.adopted_before',
        'adoption_requests.other_animals',
        'adoption_requests.sick_animals',
        'adoption_requests.aware_cost',
        'adoption_requests.why_want_adopt',

        'animals.id as animal_id',
        'animals.image1 as animal_avatar',
        'animals.name as animal_name',
        'animals.specie as animal_specie',
        'animals.age as animal_age',
        'animals.gender as animal_gender',
        'animals.size as animal_size',

        'tutors.id as tutor_id',
        'tutors.avatar as tutor_avatar',
        'tutors.name as tutor_name',
        'tutors.gender as tutor_gender',
        'tutors.email as tutor_email',
        'tutors.birth_date as tutor_birth_date',
        'tutors.phone as tutor_phone',
        'tutors.cpf as tutor_cpf',

        'addresses.street',
        'addresses.number',
        'addresses.neighborhood',
        'addresses.city',
        'addresses.state',
        'addresses.cep'
      );

    return adoptionRequest;
  },
};
