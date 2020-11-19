const { format } = require('date-fns');

module.exports = {
  render(tutor) {
    return {
      id: tutor.id,
      avatar: `${process.env.CDN_URL}/uploads/${tutor.avatar}`,
      gender: tutor.gender,
      name: tutor.name,
      birth_date: format(new Date(tutor.birth_date), 'dd/MM/yyyy'),
      cpf: tutor.cpf,
      email: tutor.email,
      phone: tutor.phone,
      address: {
        id: tutor.address_id,
        street: tutor.street,
        number: tutor.number,
        neighborhood: tutor.neighborhood,
        city: tutor.city,
        state: tutor.state,
        cep: tutor.cep,
      },
    };
  },
};
