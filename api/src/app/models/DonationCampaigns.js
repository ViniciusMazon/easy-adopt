const { create } = require('./Collaborators');

const connection = require('../../database/connection');
module.exports = {
  async create(donationCampaign) {
    await connection('donation_campaigns').insert(donationCampaign);
    return;
  },
  async index() {
    const campaigns = await connection('donation_campaigns').where(
      'status',
      'ativa'
    );
    return campaigns;
  },
  async delete(id) {
    await connection('donation_campaigns')
      .where('id', id)
      .update('status', 'inativo');
    return;
  },
};
