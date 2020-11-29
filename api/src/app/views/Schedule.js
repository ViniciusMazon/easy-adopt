const { format } = require('date-fns');

module.exports = {
  render(schedule) {
    return {
      id: schedule.schedule_id,
      date: format(new Date(schedule.schedule_date), 'dd/MM/yyyy'),
      period: schedule.schedule_period,
      adoption_request_id: schedule.adoption_request_id,
      tutor: {
        tutor_id: schedule.tutor_id,
        tutor_name: schedule.tutor_name,
      },
      animal: {
        animal_id: schedule.animal_id,
        animal_name: schedule.animal_name,
      },
    };
  },
  renderMany(schedules) {
    return schedules.map((schedule) => this.render(schedule));
  },
};
