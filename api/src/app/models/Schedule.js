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
      .innerJoin(
        'adoption_requests',
        'schedule.adoption_request_id',
        'adoption_requests.id'
      )
      .innerJoin('tutors', 'adoption_requests.tutor_id', 'tutors.id')
      .innerJoin('animals', 'adoption_requests.animal_id', 'animals.id')
      .where('schedule.date', '>', start)
      .andWhere('schedule.date', '<=', end)
      .select(
        'schedule.id as schedule_id',
        'schedule.date as schedule_date',
        'schedule.period as schedule_period',
        'schedule.adoption_request_id as adoption_request_id',
        'tutors.id as tutor_id',
        'tutors.name as tutor_name',
        'animals.id as animal_id',
        'animals.name as animal_name'
      );

    return schedules;
  },
};
