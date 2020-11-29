const yup = require('yup');

async function create(response, schedule) {
  const schema = yup.object().shape({
    id: yup.string().required(),
    date: yup.date().required('Este campo é obrigatório'),
    period: yup.string().required('Este campo é obrigatório'),
    adoption_request_id: yup.string().required('Este campo é obrigatório'),
  });

  try {
    await schema.validate(schedule, { abortEarly: false });
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return response
        .status(400)
        .json({ message: 'Solicitação negada, erro de validação' });
    }
  }
}

module.exports = { create };
