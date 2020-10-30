import React, { useState, useEffect, useRef } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import api from '../../services/api';

import Header from '../../components/Header';
import Procedure from '../../components/Procedure';

import { Input, Select, ImageInput } from '../../components/Form';
import { useMenuBar } from '../../context/MenuBar';
import { useAlert } from '../../context/Alert';
import { useProcedures } from '../../context/Procedures';
import LoadingAnimalEditForm from '../../components/Shimmer/LoadingAnimalEditForm';

import {
  Container,
  DeleteIcon,
  Gallery,
  ButtonSave,
  SaveIcon,
  ProcedureList,
  AddIcon,
} from './styles';

export default function AnimalEdit({ match }) {
  const history = useHistory();
  const editRef = useRef(null);
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const { setIsCompacted } = useMenuBar();
  const { alert, setAlert } = useAlert();
  const [animal, setAnimal] = useState({});
  const { procedures } = useProcedures();

  const [animalData, setAnimalData] = useState({});
  const [proceduresData, setProceduresData] = useState([]);

  useEffect(() => {
    setIsCompacted(true);

    api.get(`/animals/${params.id}`).then((response) => {
      setAnimal(response.data);
    });
  }, [params.id, setIsCompacted]);

  useEffect(() => {
    setIsLoading(false);

    if (editRef.current !== null) {
      editRef.current.setData({
        name: animal.name,
        gender: animal.gender,
        size: animal.size,
        specie: animal.specie,
        age: animal.age,
        status:
          animal.status === 'disponível'
            ? 'Disponível para adoção'
            : 'Indisponível para adoção',
        image1: animal.image1_url,
        image2: animal.image2_url,
        image3: animal.image3_url,
      });
    }
  }, [
    animal.age,
    animal.gender,
    animal.image1_url,
    animal.image2_url,
    animal.image3_url,
    animal.name,
    animal.size,
    animal.specie,
    animal.status,
  ]);

  useEffect(() => {
    if (alert === '') {
      return;
    }

    toast.success(alert);
    setAlert('');
  }, [alert, setAlert]);

  // useEffect(() => {
  //   const proceduresOfThisAnimal = procedures.filter((item) => {
  //     if (item.animal_id === Number(match.params.id)) {
  //       return item;
  //     }
  //   });
  //   setProceduresData(proceduresOfThisAnimal);
  // }, [match.params.id, procedures]);

  function handleDeleteAnimal() {
    api.delete(`/animals/${params.id}`);

    setAlert('🐶 Animal excluído com sucesso!');
    history.push('/');
  }

  // function handleAddProcedure() {
  //   history.push(`/edit-animal/${animalData.id}/add-procedure`, {
  //     animalName: animalData.name,
  //   });
  // }

  async function handleSubmit(data) {
    try {
      // const schema = Yup.object().shape({
      //   // image1: Yup.mixed().required('A imagem é obrigatória'),
      //   // image2: Yup.mixed().required('A imagem é obrigatória'),
      //   // image3: Yup.mixed().required('A imagem é obrigatória'),
      //   name: Yup.string().required('O nome é obrigatório'),
      //   specie: Yup.string().required('A espécie é obrigatória'),
      //   gender: Yup.string().required('O gênero é obrigatório'),
      //   size: Yup.string().required('O tamanho é obrigatório'),
      //   age: Yup.string().required('A idade é obrigatória'),
      //   status: Yup.string().required('O status é obrigatório'),
      // });

      // await schema.validate(data, {
      //   abortEarly: false,
      // });

      const formattedStatusName =
        data.status === 'Disponível para adoção'
          ? 'disponível'
          : 'indisponível';

      const formData = new FormData();
      formData.append('images', data.image1);
      formData.append('images', data.image2);
      formData.append('images', data.image3);
      formData.append('name', data.name);
      formData.append('specie', data.specie);
      formData.append('gender', data.gender);
      formData.append('size', data.size);
      formData.append('age', data.age);
      formData.append('status', formattedStatusName);

      api.put(`/animals/${params.id}`, formData);

      editRef.current.setErrors({});
      setAlert('🐱 Animal editado com sucesso!');
      history.push('/');
      setIsCompacted(false);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });

        editRef.current.setErrors(errorMessages);
      }
    }
  }

  return (
    <Container>
      {isLoading ? (
        <Header title={'Carregando informações do animal...'} />
      ) : (
        <Header title={'Informações da '} animalName={animalData.name} />
      )}

      {isLoading ? (
        <LoadingAnimalEditForm />
      ) : (
        <Form ref={editRef} onSubmit={handleSubmit}>
          <fieldset>
            <legend>Fotos</legend>
            <Gallery>
              <ImageInput name="image1" />
              <ImageInput name="image2" />
              <ImageInput name="image3" />
            </Gallery>
          </fieldset>

          <fieldset>
            <legend>
              Sobre o animal
              <button type="button" onClick={handleDeleteAnimal}>
                <DeleteIcon />
                Excluir animal permanentemente
              </button>
            </legend>

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
          </fieldset>

          <fieldset>
            <legend>
              Procedimentos realizados
              <button type="button" onClick={() => {}}>
                <AddIcon />
                Adicionar procedimento
              </button>
            </legend>

            <ProcedureList>
              {proceduresData.map((item, index) => (
                <Procedure
                  key={index}
                  userName={item.user_name}
                  procedureName={item.name}
                  date={item.date}
                  comments={item.comments}
                />
              ))}
            </ProcedureList>
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
      )}
    </Container>
  );
}
