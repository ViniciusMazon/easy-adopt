const yup = require('yup');

async function create(response, animal) {
  const schema = yup.object().shape({
    id: yup.string().required('Este campo é obrigatório'),
    name: yup.string().required('Este campo é obrigatório'),
    gender: yup.string().required('Este campo é obrigatório'),
    specie: yup.string().required('Este campo é obrigatório'),
    size: yup.string().required('Este campo é obrigatório'),
    age: yup.string().required('Este campo é obrigatório'),
    status: yup.string().required('Este campo é obrigatório'),
    // registration_date,
    image1: yup.string().required('Este campo é obrigatório'),
    image2: yup.string().required('Este campo é obrigatório'),
    image3: yup.string().required('Este campo é obrigatório'),
  });

  try {
    await schema.validate(animal, { abortEarly: false });
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return response
        .status(400)
        .json({ message: 'Solicitação negada, erro de validação' });
    }
  }
}

module.exports = { create };
