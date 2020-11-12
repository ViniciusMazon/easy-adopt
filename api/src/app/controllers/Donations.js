const { format } = require('date-fns');
const keyGenerator = require('../../utils/keyGenerator');

const mercadoPago = require('mercadopago');
const mercadoPagoConfig = require('../../config/mercadoPago');
const donationsModel = require('../models/Donations');
const donationCampaigns = require('../models/DonationCampaigns');

const validations = require('../../validations/donationSchema');

module.exports = {
  async create(request, response) {
    try {
      const { amount, email, tutor_id, donation_campaign_id } = request.body;

      const donation = {
        id: keyGenerator(),
        date: format(new Date(), 'yyyy/MM/dd'),
        status: 'novo',
        amount,
        tutor_id,
        donation_campaign_id,
      };

      await validations.create(response, donation);
      await donationsModel.create(donation);

      const purchaseOrder = {
        items: [
          {
            id: 1,
            title: 'Donation',
            description: 'Donation',
            quantity: 1,
            currency_id: 'BRL',
            unit_price: parseFloat(amount),
          },
        ],
        payer: { email },
        auto_return: 'all',
        external_reference: '1',
        back_urls: {
          success: `http://localhost:3000/donation-success/${donation.id}`,
          pending: 'http://localhost:3000/temp',
          failure: 'http://localhost:3000/temp',
        },
      };

      mercadoPago.configure(mercadoPagoConfig);
      await validations.checkout(response, purchaseOrder);
      const preference = await mercadoPago.preferences.create(purchaseOrder);

      console.log(preference.body.init_point);
      return response.redirect(`${preference.body.init_point}`);
    } catch (error) {
      console.log(error);
      return response
        .status(500)
        .json({ message: 'Ocorreu um erro, tente novamente mais tarde' });
    }
  },
  async update(request, response) {
    try {
      const { id } = request.params;
      await donationsModel.edit(id);
      await donationCampaigns.edit(id);
      return response.status(200).send();
    } catch (error) {
      console.log(error);
      return response
        .status(500)
        .json({ message: 'Ocorreu um erro, tente novamente mais tarde' });
    }
  },
};
