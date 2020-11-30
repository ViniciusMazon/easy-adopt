const keyGenerator = require('../../utils/keyGenerator');
const AddressesModel = require('../models/Addresses');
const validations = require('../../validations/addressesSchema');

module.exports = {
  async create(request, response) {
    try {
      const { street, number, neighborhood, city, state, cep } = request.body;
      const address = {
        id: keyGenerator(),
        street,
        number,
        neighborhood,
        city,
        state,
        cep,
      };
      await validations.create(response, address);
      await AddressesModel.create(address);
      return response.status(201).json({ address_id: address.id });
    } catch (error) {
      console.error(error);
      return response
        .status(500)
        .json({ message: 'Ocorreu um erro, tente novamente mais tarde' });
    }
  },
  async update(request, response) {
    try {
      const { id } = request.params;
      const { street, number, neighborhood, city, state, cep } = request.body;
      const address = {
        street,
        number,
        neighborhood,
        city,
        state,
        cep,
      };

      await AddressesModel.edit(id, address);
      return response.status(200).send();
    } catch (error) {
      console.error(error);
      return response
        .status(500)
        .json({ message: 'Ocorreu um erro, tente novamente mais tarde' });
    }
  },
};
