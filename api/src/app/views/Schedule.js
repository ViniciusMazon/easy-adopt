const { format } = require('date-fns');

module.exports = {
  render(schedule) {
    return {
      id: schedule.id,
      date: format(new Date(schedule.date),'dd/MM/yyyy'),
      time: schedule.time,
      tutor_id: schedule.tutor_id,
      animal_id: schedule.animal_id,
      tutor_name: schedule.tutor_name,
      animal_name: schedule.animal_name,
    };
  },
  renderMany(schedules) {
    return schedules.map((schedule) => this.render(schedule));
  },
};
