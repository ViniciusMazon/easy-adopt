const { format } = require('date-fns');
const keyGenerator = require('../../utils/keyGenerator');
const validations = require('../../validations/proceduresSchema');
const proceduresModel = require('../models/Procedures');

module.exports = {
  async create(request, response) {
    try {
      const { name, comments, animal_id, collaborator_id } = request.body;

      const newProcedure = {
        id: keyGenerator(),
        name,
        date: format(new Date(), 'yyyy/MM/dd'),
        comments,
        animal_id,
        collaborator_id,
      };

      await validations.create(response, newProcedure);
      await proceduresModel.create(newProcedure);
      return response.status(201).send();
    } catch (error) {
      console.log(error);
      return response
        .status(500)
        .json({ message: 'Ocorreu um erro, tente novamente mais tarde' });
    }
  },
};