const { format } = require('date-fns');

module.exports = {
  render(adoptionRequest) {
    return {
      request: {
        id: adoptionRequest.id,
        status: adoptionRequest.status,
        residence_type: adoptionRequest.residence_type,
        adults_home: adoptionRequest.adults_home,
        children_home: adoptionRequest.children_home,
        smokers_home: adoptionRequest.smokers_home,
        adopted_before: adoptionRequest.adopted_before,
        other_animals: adoptionRequest.other_animals,
        sick_animals: adoptionRequest.sick_animals,
        aware_cost: adoptionRequest.aware_cost,
        why_want_adopt: adoptionRequest.why_want_adopt,
      },
      animal: {
        avatar: `${process.env.CDN_URL}/uploads/${adoptionRequest.animal_avatar}`,
        name: adoptionRequest.animal_name,
        specie: adoptionRequest.animal_specie,
        age: adoptionRequest.animal_age,
        gender: adoptionRequest.animal_gender,
        size: adoptionRequest.animal_size,
      },
      tutor: {
        avatar: `${process.env.CDN_URL}/uploads/${adoptionRequest.tutor_avatar}`,
        name: adoptionRequest.tutor_name,
        gender: adoptionRequest.tutor_gender,
        email: adoptionRequest.tutor_email,
        birth_date: format(
          new Date(adoptionRequest.tutor_birth_date),
          'dd/MM/yyyy'
        ),
        phone: adoptionRequest.tutor_phone,
        cpf: adoptionRequest.tutor_cpf,
        address: `${adoptionRequest.street}, ${adoptionRequest.number}, ${adoptionRequest.neighborhood} - ${adoptionRequest.city}/${adoptionRequest.state} `,
        cep: adoptionRequest.cep,
      },
    };
  },
};
