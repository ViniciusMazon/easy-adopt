const yup = require('yup');

async function create(response, adoptionRequest) {
  const schema = yup.object().shape({
    id: yup.string().required('Este campo é obrigatório'),
    opening_date: yup.string().required('Este campo é obrigatório'),
    status: yup.string().required('Este campo é obrigatório'),
    residence_type: yup.string().required('Este campo é obrigatório'),
    adults_home: yup.string().required('Este campo é obrigatório'),
    children_home: yup.string().required('Este campo é obrigatório'),
    smokers_home: yup.string().required('Este campo é obrigatório'),
    adopted_before: yup.string().required('Este campo é obrigatório'),
    other_animals: yup.string().required('Este campo é obrigatório'),
    sick_animals: yup.string().required('Este campo é obrigatório'),
    aware_cost: yup.string().required('Este campo é obrigatório'),
    why_want_adopt: yup.string().required('Este campo é obrigatório'),
    animal_id: yup.string().required('Este campo é obrigatório'),
    tutor_id: yup.string().required('Este campo é obrigatório'),
  });

  try {
    await schema.validate(adoptionRequest, { abortEarly: false });
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return response
        .status(400)
        .json({ message: 'Solicitação negada, erro de validação' });
    }
  }
}

async function update(response, evaluate) {
  const schema = yup.object().shape({
    collaborator_id: yup.string().required('Este campo é obrigatório'),
    status: yup.string().required('Este campo é obrigatório'),
  });

  try {
    await schema.validate(evaluate, { abortEarly: false });
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return response
        .status(400)
        .json({ message: 'Solicitação negada, erro de validação' });
    }
  }
}

module.exports = { create, update };
