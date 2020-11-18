const keyGenerator = require('../../utils/keyGenerator');
const hash = require('../../utils/hash');
const { format } = require('date-fns');

const tutorsModel = require('../models/Tutors');
const validations = require('../../validations/tutorsSchema');

module.exports = {
  async create(request, response) {
    try {
      const {
        gender,
        name,
        birth_date,
        cpf,
        email,
        password,
        phone,
        address_id,
      } = request.body;

      const tutor = {
        id: keyGenerator(),
        avatar: 'blankAvatar.png',
        gender,
        name,
        birth_date: format(new Date(birth_date), 'yyyy/MM/dd'),
        cpf,
        email,
        hash_password: await hash.encrypt(password),
        phone,
        address_id,
      };

      await validations.create(response, tutor);
      await tutorsModel.create(tutor);
      return response.status(201).json(tutor);
    } catch (error) {
      console.error(error);
      return response
        .status(500)
        .json({ message: 'Ocorreu um erro, tente novamente mais tarde' });
    }
  },
};
