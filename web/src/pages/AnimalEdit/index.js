import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import Header from '../../components/Header';
import { Input, Select, ImageInput } from '../../components/Form';
import { useMenuBar } from '../../context/MenuBar';

import {
  Container,
  Profile,
  AvatarContainer,
  DeleteIcon,
  Avatar,
  AnimalInfo,
  Gallery,
  ButtonSave,
  SaveIcon,
} from './styles';

import fakeDB from '../../tempData/animals';

export default function AnimalEdit() {
  const formRef = useRef(null);
  const history = useHistory();
  const { setIsCompacted } = useMenuBar();

  const [animal, setAnimal] = useState({});

  useEffect(() => {
    setIsCompacted(true);
    setTimeout(() => {
      const data = fakeDB[0];
      setAnimal(data);

      const formattedStatus =
        data.status === 'disponível'
          ? 'Disponível para adoção'
          : 'Indisponível para adoção';

      formRef.current.setData({
        id: data.id,
        name: data.name,
        gender: data.gender,
        size: data.size,
        specie: data.specie,
        age: data.age,
        status: formattedStatus,
        image1: data.image1,
        image2: data.image2,
        image3: data.image3,
      });
    }, 2000);
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

      // const formData = new FormData();
      // data.append('image1', image1);
      // data.append('image2', image2);
      // data.append('image3', image3);
      // formData.append('name', data.name);
      // formData.append('specie', data.specie);
      // formData.append('gender', data.gender);
      // formData.append('size', data.size);
      // formData.append('age', data.age);
      // formData.append('status', formattedStatusName);

      const tempData = {
        id: data.id,
        image1:
          'https://imagens.brasil.elpais.com/resizer/emY0sddaFt0rRsVdyjNGpIW6VHg=/768x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/POGGID5U7HB5OEVIB32OGG7ZWY.jpg',
        image2:
          'https://www.petz.com.br/blog/wp-content/uploads/2020/06/animais-com-sindrome-de-down.jpg',
        image3:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpoCo75Kbrsqf4OpRN4P49gALW4Ei_wnj0dg&usqp=CAU',
        name: data.name,
        specie: data.specie,
        gender: data.gender,
        size: data.size,
        age: data.age,
        status: formattedStatusName,
      };

      formRef.current.setErrors({});
      history.push('/');
      setIsCompacted(false);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  return (
    <Container>
      <Header title={'Informações da '} animalName={animal.name} />

      <Form ref={formRef} onSubmit={handleSubmit}>
        <fieldset>
          <legend>
            Sobre o animal
            <button>
              <DeleteIcon />
              Excluir animal permanentemente
            </button>
          </legend>

          <Profile>
            <AvatarContainer>
              <Avatar avatarURL={animal.image1} />
            </AvatarContainer>

            <AnimalInfo>
              <Input name="name" label="Nome" />

              <div className="input-block">
                <Select
                  name="specie"
                  label="Espécie"
                  options={['Cachorro', 'Gato']}
                />
                <Select
                  name="gender"
                  label="Gênero"
                  options={['Macho', 'Fêmea']}
                />
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
            </AnimalInfo>
          </Profile>
        </fieldset>

        <fieldset>
          <legend>Fotos</legend>
          <Gallery>
            <ImageInput name="image1" previewURL={animal.image1} />
            <ImageInput name="image2" previewURL={animal.image2} />
            <ImageInput name="image3" previewURL={animal.image3} />
          </Gallery>
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
