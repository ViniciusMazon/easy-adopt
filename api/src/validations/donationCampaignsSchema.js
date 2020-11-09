const yup = require('yup');

async function create(response, donationCampaign) {
  const schema = yup.object().shape({
    id: yup.string().required('Este campo é obrigatório'),
    creation_date: yup.date().required('Este campo é obrigatório'),
    status: yup.string().required('Este campo é obrigatório'),
    title: yup.string().required('Este campo é obrigatório'),
    description: yup.string().required('Este campo é obrigatório'),
    goal: yup.number().required('Este campo é obrigatório'),
    current: yup.number().required('Este campo é obrigatório'),
    created_by: yup.string().required('Este campo é obrigatório'),
  });

  try {
    await schema.validate(donationCampaign, { abortEarly: false });
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return response
        .status(400)
        .json({ message: 'Solicitação negada, erro de validação' });
    }
  }
}

module.exports = { create };
