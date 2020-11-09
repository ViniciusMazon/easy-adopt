const yup = require('yup');

async function checkout(response, purchaseOrder) {
  const schema = yup.object().shape({
    items: yup.array(
      yup.object().shape({
        id: yup.string().required('Este campo é obrigatório'),
        title: yup.string().required('Este campo é obrigatório'),
        description: yup.string().required('Este campo é obrigatório'),
        quantity: yup.number().required(),
        currency_id: yup.string().required(),
        unit_price: yup.number().required(),
      })
    ),
    payer: yup.object().shape({
      email: yup.string().required(),
    }),
    auto_return: yup.string().required(),
    external_reference: yup.string().required(),
    back_urls: yup.object().shape({
      success: yup.string().required(),
      pending: yup.string().required(),
      failure: yup.string().required(),
    }),
  });

  try {
    await schema.validate(purchaseOrder, { abortEarly: false });
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return response
        .status(400)
        .json({ message: 'Solicitação negada, erro de validação' });
    }
  }
}

module.exports = { checkout };
