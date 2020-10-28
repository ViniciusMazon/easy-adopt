module.exports = {
  render(procedure) {
    return {
      id: procedure.id,
      date: procedure.date,
      procedure: procedure.procedure,
      comments: procedure.comments,
    };
  },
  renderMany(procedures) {
    return procedures.map((procedure) => this.render(procedure));
  },
};
