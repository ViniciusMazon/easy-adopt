const mercadoPago = require('mercadopago');
const mercadoPagoConfig = require('../../config/mercadoPago');

module.exports = {
  async checkout(request, response) {
    mercadoPago.configure(mercadoPagoConfig);

    const { email, amount } = request.body;

    const item = {
      id: 1,
      title: 'Donation',
      description: 'Donation',
      quantity: 1,
      currency_id: 'BRL',
      unit_price: parseFloat(amount),
    };

    const purchaseOrder = {
      items: [item],
      payer: { email },
      auto_return: 'all',
      external_reference: '1',
      back_urls: {
        success: '',
        pending: '',
        failure: '',
      },
    };

    const preference = await mercadoPago.preferences.create(purchaseOrder);
    return response.redirect(`${preference.body.init_point}`);
  },
};
