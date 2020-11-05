import React, { useState, useEffect, useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useMenuBar } from '../../context/MenuBar';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import { Container, Gallery, ButtonSave, SaveIcon } from './styles';

import Header from '../../components/Header';
import { Input, Select } from '../../components/Form';
import InputImage from '../../components/InputImage';
import { useAlert } from '../../context/Alert';

function AnimalRegistration() {
  const registrationRef = useRef(null);
  const history = useHistory();
  const { setIsCompacted } = useMenuBar();
  const { setAlert } = useAlert();

  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();
  const [preview1, setPreview1] = useState('');
  const [preview2, setPreview2] = useState('');
  const [preview3, setPreview3] = useState('');

  useEffect(() => {
    setIsCompacted(true);
  }, [setIsCompacted]);

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        // image1: Yup.mixed().required('A imagem é obrigatória'),
        // image2: Yup.mixed().required('A imagem é obrigatória'),
        // image3: Yup.mixed().required('A imagem é obrigatória'),
        name: Yup.string().required('O nome é obrigatório'),
        specie: Yup.string().required('A espécie é obrigatória'),
        gender: Yup.string().required('O gênero é obrigatório'),
        size: Yup.string().required('O tamanho é obrigatório'),
        age: Yup.string().required('A idade é obrigatória'),
        status: Yup.string().required('O status é obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const formattedStatusName =
        data.status === 'Disponível para adoção'
          ? 'disponível'
          : 'indisponível';

      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('specie', data.specie);
      formData.append('gender', data.gender);
      formData.append('size', data.size);
      formData.append('age', data.age);
      formData.append('status', formattedStatusName);
      formData.append('images', image1);
      formData.append('images', image2);
      formData.append('images', image3);

      const response = await api.post('/animals', formData);
      if (response.status === 201) {
        setAlert('Animal cadastrado com sucesso');
        history.push('/');
        setIsCompacted(false);
      } else {
        setAlert('Não foi possível concluir a operação');
      }
      registrationRef.current.setErrors({});
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });

        registrationRef.current.setErrors(errorMessages);
      }
    }
  }

  return (
    <Container>
      <Header title={'Cadastro de animal'} />
      <Form ref={registrationRef} onSubmit={handleSubmit}>
        <fieldset>
          <legend>Fotos</legend>
          <Gallery>
            <InputImage
              changeFile={setImage1}
              preview={preview1}
              changePreview={setPreview1}
            />
            <InputImage
              changeFile={setImage2}
              preview={preview2}
              changePreview={setPreview2}
            />
            <InputImage
              changeFile={setImage3}
              preview={preview3}
              changePreview={setPreview3}
            />
          </Gallery>
        </fieldset>

        <fieldset>
          <legend>Sobre o animal</legend>
          <Input name="name" label="Nome" />

          <div className="input-block">
            <Select
              name="specie"
              label="Espécie"
              options={['Cachorro', 'Gato']}
            />
            <Select name="gender" label="Gênero" options={['Macho', 'Fêmea']} />
          </div>

          <div className="input-block">
            <Select
              name="size"
              label="Porte"
              options={['Pequeno', 'Médio', 'Grande']}
            />
            <Select
              name="age"
              label="Idade"
              options={['Filhote', 'Adulto', 'Sênior']}
            />
          </div>
        </fieldset>

        <fieldset>
          <legend>Sobre a adoção</legend>
          <div className="input-block">
            <Select
              name="status"
              label="Status"
              options={['Disponível para adoção', 'Indisponível para adoção']}
            />
          </div>
        </fieldset>

        <ButtonSave>
          <SaveIcon />
          Salvar
        </ButtonSave>
      </Form>
    </Container>
  );
}

export default AnimalRegistration;
