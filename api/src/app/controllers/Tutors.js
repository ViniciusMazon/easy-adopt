const keyGenerator = require('../../utils/keyGenerator');
const hash = require('../../utils/hash');
const { format } = require('date-fns');

const tutorsModel = require('../models/Tutors');
const imagesModel = require('../models/Images');
const validations = require('../../validations/tutorsSchema');
const tutorsViews = require('../views/Tutors');

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

      const avatar_id = await imagesModel.create({
        id: keyGenerator(),
        name: 'blankAvatar.png',
        type: 'tutor',
      });

      const tutor = {
        id: keyGenerator(),
        avatar_id: avatar_id,
        gender,
        name,
        birth_date: format(new Date(birth_date), 'yyyy/MM/dd'),
        cpf,
        email,
        hash_password: await hash.encrypt(password),
        phone,
        role: 'tutor',
        address_id,
      };

      await validations.create(response, tutor);
      await tutorsModel.create(tutor);
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
      const id = request.params.id;
      const { gender, name, birth_date, cpf, email, phone } = request.body;
      const tutor = {
        gender,
        name,
        birth_date,
        cpf,
        email,
        phone,
      };
      await tutorsModel.edit(id, tutor);
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
      const tutor = await tutorsModel.showByEmail(request.params.email);
      if (tutor) {
        return response.status(200).json(tutorsViews.render(tutor));
      } else {
        return response
          .status(200)
          .json({ message: 'Não existe um tutor cadastrado com esse e-mail' });
      }
    } catch (error) {
      console.error(error);
      return response
        .status(500)
        .json({ message: 'Ocorreu um erro, tente novamente mais tarde' });
    }
  },
};
