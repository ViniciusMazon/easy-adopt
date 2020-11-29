const keyGenerator = require('../../utils/keyGenerator');
const { format } = require('date-fns');
const sendMail = require('../../lib/mail');

const scheduleModel = require('../models/Schedule');
const AdoptionRequestsModel = require('../models/AdoptionRequests');
const AnimalsModel = require('../models/Animals');
const scheduleView = require('../views/Schedule');
const validations = require('../../validations/scheduleSchema');

module.exports = {
  async create(request, response) {
    try {
      const { date, period, adoption_request_id } = request.body;

      const schedule = {
        id: keyGenerator(),
        date,
        period,
        adoption_request_id,
      };

      await validations.create(response, schedule);
      await scheduleModel.create(schedule);

      const {
        tutor_name,
        tutor_email,
        animal_name,
        animal_id,
      } = await AdoptionRequestsModel.show(adoption_request_id);

      await AdoptionRequestsModel.update(adoption_request_id, {
        status: 'adotado',
      });
      await AnimalsModel.edit(animal_id, { status: 'adotado' });

      await await sendMail({
        to: `${tutor_name} <${tutor_email}>`,
        subject: 'Agendamento realizado!',
        template: 'scheduling',
        context: {
          tutor_name: tutor_name,
          animal_name: animal_name,
          schedule_date: `${format(
            new Date(date),
            'dd/MM/yyyy'
          )} entre ${period}`,
        },
      });

      return response.status(201).send(schedule);
    } catch (error) {
      console.error(error);
      return response
        .status(500)
        .json({ message: 'Ocorreu um erro, tente novamente mais tarde' });
    }
  },
  async index(request, response) {
    try {
      const schedules = await scheduleModel.index();
      return response.status(200).json(scheduleView.renderMany(schedules));
    } catch (error) {
      console.error(error);
      return response
        .status(500)
        .json({ message: 'Ocorreu um erro, tente novamente mais tarde' });
    }
  },
};
