const { format } = require('date-fns');
const keyGenerator = require('../../utils/keyGenerator');

const adoptionRequestsModel = require('../models/AdoptionRequests');
const validations = require('../../validations/adoptionRequestsSchema');
const adoptionRequestView = require('../views/AdoptionRequests');

module.exports = {
  async create(request, response) {
    try {
      const {
        residence_type,
        adults_home,
        children_home,
        smokers_home,
        adopted_before,
        other_animals,
        sick_animals,
        aware_cost,
        why_want_adopt,
        animal_id,
        tutor_id,
      } = request.body;

      const adoptionRequest = {
        id: keyGenerator(),
        opening_date: format(new Date(), 'yyyy/MM/dd'),
        status: 'novo',
        residence_type,
        adults_home,
        children_home,
        smokers_home,
        adopted_before,
        other_animals,
        sick_animals,
        aware_cost,
        why_want_adopt,
        animal_id,
        tutor_id,
      };

      await validations.create(response, adoptionRequest);

      await adoptionRequestsModel.create(adoptionRequest);
      return response
        .status(201)
        .json(adoptionRequestView.render(adoptionRequest));
    } catch (error) {
      console.error(error);
      return response
        .status(500)
        .json({ message: 'Ocorreu um erro, tente novamente mais tarde' });
    }
  },
};
