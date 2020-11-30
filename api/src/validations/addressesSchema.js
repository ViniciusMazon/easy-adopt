const yup = require('yup');

async function create(response, address) {
  const schema = yup.object().shape({
    id: yup.string().required('Este campo é obrigatório'),
    street: yup.string().required('Este campo é obrigatório'),
    number: yup.string().required('Este campo é obrigatório'),
    neighborhood: yup.string().required('Este campo é obrigatório'),
    city: yup.string().required('Este campo é obrigatório'),
    state: yup.string().required('Este campo é obrigatório'),
    cep: yup.string().required('Este campo é obrigatório'),
  });

  try {
    await schema.validate(address, { abortEarly: false });
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return response
        .status(400)
        .json({ message: 'Solicitação negada, erro de validação' });
    }
  }
}

module.exports = { create };
