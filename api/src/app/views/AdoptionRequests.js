const { format } = require('date-fns');

module.exports = {
  render(adoptionRequest) {
    return {
      id: adoptionRequest.id,
      opening_date: format(
        new Date(adoptionRequest.opening_date),
        'dd/MM/yyyy'
      ),
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
      animal_id: adoptionRequest.animal_id,
      tutor_id: adoptionRequest.tutor_id,
    };
  },
};
