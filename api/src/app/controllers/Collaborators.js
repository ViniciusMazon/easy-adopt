const { format } = require('date-fns');
const keyGenerator = require('../../utils/keyGenerator');
const hash = require('../../utils/hash');

const validations = require('../../validations/collaboratorsSchema');
const collaboratorsModel = require('../models/Collaborators');
const collaboratorsView = require('../views/Collaborator');
const accessCodeModel = require('../models/AccessCode');

module.exports = {
  async create(request, response) {
    try {
      const {
        name,
        birth_date,
        cpf,
        email,
        password,
        phone,
        access_code,
        address_id,
      } = request.body;

      const accessCodeIsValid = await accessCodeModel.show(access_code);

      if (!accessCodeIsValid || accessCodeIsValid.used_by !== null) {
        return response
          .status(200)
          .json({ message: 'Código de acesso inválido' });
      }

      const collaborator = {
        id: keyGenerator(),
        name,
        birth_date: format(new Date(birth_date), 'yyyy/MM/dd'),
        cpf,
        email,
        hash_password: await hash.encrypt(password),
        phone,
        access_code,
        address_id,
      };

      await validations.create(response, collaborator);
      await collaboratorsModel.create(collaborator);
      const updateAccessCode = {
        date_use: format(new Date(), 'yyyy/MM/dd'),
        used_by: collaborator.id,
      };
      await accessCodeModel.edit(access_code, updateAccessCode);

      return response.status(201).send();
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
      const { name, cpf, email, phone } = request.body;

      const date = format(new Date(request.body.birth_date), 'yyyy/MM/dd');

      const collaborator = {
        name,
        birth_date: date,
        cpf,
        email,
        phone,
      };

      const isValid = await collaboratorsModel.show(id);

      if (!isValid) {
        return response.status(400).json({
          message:
            'Não foi possível encontrar um colaborador com o id informado',
        });
      }

      await validations.update(response, collaborator);
      await collaboratorsModel.edit(id, collaborator);
      return response.status(200).send();
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
      const collaborator = await collaboratorsModel.show(id);
      return response.status(200).json(collaboratorsView.renter(collaborator));
    } catch (error) {
      console.error(error);
      return response
        .status(500)
        .json({ message: 'Ocorreu um erro, tente novamente mais tarde' });
    }
  },
};
