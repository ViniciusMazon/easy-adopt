const yup = require('yup');

async function create(response, collaborator) {
  const schema = yup.object().shape({
    id: yup.string().required('Este campo é obrigatório'),
    name: yup.string().required('Este campo é obrigatório'),
    birth_date: yup.date().required('Este campo é obrigatório'),
    cpf: yup.string().required('Este campo é obrigatório'),
    email: yup.string().required('Este campo é obrigatório'),
    hash_password: yup.string().required('Este campo é obrigatório'),
    phone: yup.string().required('Este campo é obrigatório'),
    access_code: yup.string().required('Este campo é obrigatório'),
    address_id: yup.string().required('Este campo é obrigatório'),
  });

  try {
    await schema.validate(collaborator, { abortEarly: false });
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return response
        .status(400)
        .json({ message: 'Solicitação negada, erro de validação' });
    }
  }
}

async function update(response, collaborator) {
  const schema = yup.object().shape({
    name: yup.string().required('Este campo é obrigatório'),
    birth_date: yup.date().required('Este campo é obrigatório'),
    cpf: yup.string().required('Este campo é obrigatório'),
    email: yup.string().required('Este campo é obrigatório'),
    phone: yup.string().required('Este campo é obrigatório'),
  });

  try {
    await schema.validate(collaborator, { abortEarly: false });
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return response
        .status(400)
        .json({ message: 'Solicitação negada, erro de validação' });
    }
  }
}

module.exports = { create, update };