const { format } = require('date-fns');

module.exports = {
  render(procedure) {
    return {
      id: procedure.id,
      name: procedure.procedure,
      comments: procedure.comments,
      date: format(procedure.date, 'dd/MM/yyyy'),
      user_name: procedure.name,
    };
  },
  renderMany(procedures) {
    return procedures.map((procedure) => this.render(procedure));
  },
};
