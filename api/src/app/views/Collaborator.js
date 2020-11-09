const { format } = require('date-fns');

module.exports = {
  renter(collaborator) {
    return {
      id: collaborator.id,
      name: collaborator.name,
      birth_date: format(new Date(collaborator.birth_date), 'dd/MM/yyyy'),
      cpf: collaborator.cpf,
      email: collaborator.email,
      phone: collaborator.phone,
      address: {
        id: collaborator.address_id,
        street: collaborator.street,
        number: collaborator.number,
        neighborhood: collaborator.neighborhood,
        city: collaborator.city,
        state: collaborator.state,
        cep: collaborator.cep,
      },
    };
  },
};
