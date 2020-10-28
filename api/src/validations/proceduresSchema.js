const yup = require('yup');

async function create(response, procedure) {
  const schema = yup.object().shape({
    id: yup.string().required('Este campo é obrigatório'),
    procedure: yup.string().required('Este campo é obrigatório'),
    date: yup.date().required('Este campo é obrigatório'),
    comments: yup.string().required('Este campo é obrigatório'),
    animal_id: yup.string().required('Este campo é obrigatório'),
    collaborator_id: yup.string().required('Este campo é obrigatório'),
  });

  try {
    await schema.validate(procedure, { abortEarly: false });
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return response
        .status(400)
        .json({ message: 'Solicitação negada, erro de validação' });
    }
  }
}

module.exports = { create };
