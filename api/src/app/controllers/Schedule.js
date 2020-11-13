const keyGenerator = require('../../utils/keyGenerator');
const { format } = require('date-fns');
const sendMail = require('../../lib/mail');

const scheduleModel = require('../models/Schedule');
const tutorsModel = require('../models/Tutors');
const animalsModel = require('../models/Animals');
const scheduleView = require('../views/Schedule');
const validations = require('../../validations/scheduleSchema');

module.exports = {
  async create(request, response) {
    try {
      const { date, time, tutor_id, animal_id } = request.body;

      const schedule = {
        id: keyGenerator(),
        date: format(new Date(date), 'yyyy/MM/dd'),
        time,
        tutor_id,
        animal_id,
      };

      await validations.create(response, schedule);
      await scheduleModel.create(schedule);

      const tutor = await tutorsModel.show(tutor_id);
      const animal = await animalsModel.show(animal_id);

      await sendMail({
        to: `${tutor.name} <${tutor.email}>`,
        subject: 'Agendamento realizado!',
        template: 'scheduling',
        context: {
          tutor_name: tutor.name,
          animal_name: animal.name,
          schedule_date: `${format(new Date(date), 'dd/MM/yyyy')} às ${time}`,
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
