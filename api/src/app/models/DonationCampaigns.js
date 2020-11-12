const connection = require('../../database/connection');

module.exports = {
  async create(donationCampaign) {
    await connection('donation_campaigns').insert(donationCampaign);
    return;
  },
  async edit(id) {
    const [data] = await connection('donations')
      .innerJoin(
        'donation_campaigns',
        'donations.donation_campaign_id',
        'donation_campaigns.id'
      )
      .where('donations.id', id)
      .select(
        'donation_campaigns.current',
        'donation_campaigns.id',
        'donations.amount'
      );

    const currentNew = data.current + data.amount;

    await connection('donation_campaigns')
      .where('id', data.id)
      .update('current', currentNew);
    return;
  },
  async index() {
    const campaigns = await connection('donation_campaigns').where(
      'donation_campaigns.status',
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
