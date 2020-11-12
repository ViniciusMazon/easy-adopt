const { format } = require('date-fns');

module.exports = {
  render(procedure) {
    return {
      id: procedure.id,
      name: procedure.name,
      comments: procedure.comments,
      date: format(new Date(procedure.date), 'dd/MM/yyyy'),
      user_name: procedure.collaborator_name,
    };
  },
  renderMany(procedures) {
    return procedures.map((procedure) => this.render(procedure));
  },
};
