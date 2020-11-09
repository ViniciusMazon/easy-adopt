const { format } = require('date-fns');
const keyGenerator = require('../../utils/keyGenerator');

const adoptionRequestsModel = require('../models/AdoptionRequests');
const validations = require('../../validations/adoptionRequestsSchema');
const adoptionRequestView = require('../views/AdoptionRequests');
const adoptionRequestsWithAnimalAndTutor = require('../views/AdoptionRequestsWithAnimalAndTutor');
const adoptionRequestsAnalysis = require('../views/AdoptionRequestsAnalysis');

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
  async update(request, response) {
    try {
      const { id } = request.params;
      const { collaborator_id, status } = request.body;
      const evaluation_date = format(new Date(), 'yyyy/MM/dd');

      const evaluate = {
        collaborator_id,
        status,
        evaluation_date,
      };
      await validations.update(response, evaluate);
      await adoptionRequestsModel.update(id, evaluate);
      return response.status(200).send();
    } catch (error) {
      console.error(error);
      return response
        .status(500)
        .json({ message: 'Ocorreu um erro, tente novamente mais tarde' });
    }
  },
  async index(request, response) {
    try {
      const adoptionRequests = await adoptionRequestsModel.index();
      return response
        .status(200)
        .json(adoptionRequestsWithAnimalAndTutor.renderMany(adoptionRequests));
    } catch (error) {
      console.error(error);
      return response
        .status(500)
        .json({ message: 'Ocorreu um erro, tente novamente mais tarde' });
    }
  },
  async show(request, response) {
    try {
      const { id } = request.params;

      const adoptionRequest = await adoptionRequestsModel.show(id);
      return response
        .status(200)
        .json(adoptionRequestsAnalysis.render(adoptionRequest));
    } catch (error) {
      console.error(error);
      return response
        .status(500)
        .json({ message: 'Ocorreu um erro, tente novamente mais tarde' });
    }
  },
};
