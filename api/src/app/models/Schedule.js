const connection = require('../../database/connection');
const { format, addDays } = require('date-fns');

module.exports = {
  async create(schedule) {
    await connection('schedule').insert(schedule);
    return;
  },
  async index() {
    const start = format(new Date(), 'yyyy/MM/dd');
    const end = format(addDays(new Date(start), 7), 'yyyy/MM/dd');

    const schedules = await connection('schedule')
      .innerJoin('tutors', 'schedule.tutor_id', 'tutors.id')
      .innerJoin('animals', 'schedule.animal_id', 'animals.id')
      .where('date', '>', start)
      .andWhere('date', '<=', end)
      .select(
        'schedule.*',
        'tutors.name as tutor_name',
        'animals.name as animal_name'
      );
    return schedules;
  },
};
