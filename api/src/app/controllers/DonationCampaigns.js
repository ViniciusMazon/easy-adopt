const { format } = require('date-fns');
const keyGenerator = require('../../utils/keyGenerator');

const validations = require('../../validations/donationCampaignsSchema');
const donationCampaignsModel = require('../models/DonationCampaigns');
const donationCampaignsView = require('../views/DonationCampaigns');

module.exports = {
  async create(request, response) {
    try {
      const { title, description, goal, collaborator_id } = request.body;

      const donationCampaign = {
        id: keyGenerator(),
        creation_date: format(new Date(), 'yyyy/MM/dd'),
        status: 'ativa',
        title,
        description,
        goal,
        current: 0.0,
        created_by: collaborator_id,
      };

      await validations.create(response, donationCampaign);
      await donationCampaignsModel.create(donationCampaign);
      return response.status(201).send();
    } catch (error) {
      console.error(error);
      return response
        .status(500)
        .json({ message: 'Ocorreu um erro, tente novamente mais tarde' });
    }
  },
  async index(request, response) {
    try {
      const donationCampaigns = await donationCampaignsModel.index();
      return response
        .status(200)
        .json(donationCampaignsView.renderMany(donationCampaigns));
    } catch (error) {
      console.error(error);
      return response
        .status(500)
        .json({ message: 'Ocorreu um erro, tente novamente mais tarde' });
    }
  },
  async delete(request, response) {
    try {
      const { id } = request.params;
      await donationCampaignsModel.delete(id);
      return response.status(200).send();
    } catch (error) {
      console.error(error);
      return response
        .status(500)
        .json({ message: 'Ocorreu um erro, tente novamente mais tarde' });
    }
  },
};
