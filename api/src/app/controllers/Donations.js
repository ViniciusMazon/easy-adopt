const { format } = require('date-fns');
const keyGenerator = require('../../utils/keyGenerator');
const sendMail = require('../../lib/mail');

const mercadoPago = require('mercadopago');
const mercadoPagoConfig = require('../../config/mercadoPago');
const donationsModel = require('../models/Donations');
const tutorsModel = require('../models/Tutors');
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
          success: `http://192.168.1.64:3000/donation-success/${donation.id}`,
          pending: 'http://192.168.1.64:3000',
          failure: 'http://192.168.1.64:3000',
        },
      };

      mercadoPago.configure(mercadoPagoConfig);
      await validations.checkout(response, purchaseOrder);
      const preference = await mercadoPago.preferences.create(purchaseOrder);

      return response.status(200).json(preference.body.init_point);
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

      if (process.env.NODE_ENV !== 'test') {
        const donation = await donationsModel.show(id);
        const tutor = await tutorsModel.show(donation.tutor_id);
        await sendMail({
          to: `${tutor.name} <${tutor.email}>`,
          subject: 'Recebemos sua doação!',
          template: 'donationReceived',
          context: {
            tutor_name: tutor.name,
          },
        });
      }

      return response.status(200).send();
    } catch (error) {
      console.log(error);
      return response
        .status(500)
        .json({ message: 'Ocorreu um erro, tente novamente mais tarde' });
    }
  },
};
