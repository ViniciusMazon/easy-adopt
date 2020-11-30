const keyGenerator = require('../../utils/keyGenerator');
const accessCodeModel = require('../models/AccessCode');
const collaboratorsModel = require('../models/Collaborators');
const { format } = require('date-fns');


module.exports = {
  async create(request, response) {
    try {
      const { collaborator_id } = request.body;
      const isValid = await collaboratorsModel.show(collaborator_id);
      if (isValid) {
        const access_code_data = {
          id: keyGenerator(),
          access_code: keyGenerator().toUpperCase(),
          creation_date: format(new Date(), 'yyyy/MM/dd'),
          created_by: collaborator_id,
        };
        await accessCodeModel.create(access_code_data);
        return response.status(201).json(access_code_data.access_code);
      }

      return response
        .status(401)
        .json({ message: 'Desculpe, o colaborador informado não é válido' });
    } catch (error) {
      console.error(error);
      return response
        .status(500)
        .json({ message: 'Ocorreu um erro, tente novamente mais tarde' });
    }
  },
  async show(request, response) {
    try {
      const { access_code } = request.params;

      const access_code_data = await accessCodeModel.show(access_code);

      if (access_code_data && access_code_data.used_by === null) {
        return response.status(200).json({ isValid: true });
      } else {
        return response.status(200).json({ isValid: false });
      }
    } catch (error) {
      console.error(error);
      return response
        .status(500)
        .json({ message: 'Ocorreu um erro, tente novamente mais tarde' });
    }
  },
};
