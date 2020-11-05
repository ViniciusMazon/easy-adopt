import React, { useState, useEffect, useRef } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import api from '../../services/api';

import Header from '../../components/Header';
import Procedure from '../../components/Procedure';

import { Input, Select } from '../../components/Form';
import InputImage from '../../components/InputImage';
import { useMenuBar } from '../../context/MenuBar';
import { useAlert } from '../../context/Alert';
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

export default function AnimalEdit() {
  const history = useHistory();
  const editRef = useRef(null);
  const params = useParams();
  const { setIsCompacted } = useMenuBar();
  const { alert, setAlert } = useAlert();

  const [isLoading, setIsLoading] = useState(true);
  const [animal, setAnimal] = useState({});
  const [procedures, setProcedures] = useState([]);

  const [preview1, setPreview1] = useState('');
  const [preview2, setPreview2] = useState('');
  const [preview3, setPreview3] = useState('');

  useEffect(() => {
    setIsCompacted(true);

    api.get(`/animals/${params.id}`).then((response) => {
      setAnimal(response.data);
      setProcedures(response.data.procedures);
      setPreview1(response.data.image1_url);
      setPreview2(response.data.image2_url);
      setPreview3(response.data.image3_url);
    });
  }, [params.id, setIsCompacted]);

  useEffect(() => {
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
      });
    }

    setIsLoading(false);
  }, [
    animal.age,
    animal.gender,
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

  function handleDeleteAnimal() {
    api.delete(`/animals/${params.id}`);

    setAlert('🐶 Animal excluído com sucesso!');
    history.push('/');
  }

  function handleAddProcedure() {
    history.push(`/edit-animal/${animal.id}/${animal.name}/add-procedure`);
  }

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
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

      const animal = {
        name: data.name,
        specie: data.specie,
        gender: data.gender,
        size: data.size,
        age: data.age,
        status: formattedStatusName,
      };

      api.put(`/animals/${params.id}`, animal);

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
        <Header title={'Informações da '} animalName={animal.name} />
      )}

      {isLoading ? (
        <LoadingAnimalEditForm />
      ) : (
        <Form ref={editRef} onSubmit={handleSubmit}>
          <fieldset>
            <legend>Fotos</legend>
            <Gallery>
              <InputImage
                isEditable={false}
                preview={preview1}
                changePreview={setPreview1}
              />
              <InputImage
                isEditable={false}
                preview={preview2}
                changePreview={setPreview2}
              />
              <InputImage
                isEditable={false}
                preview={preview3}
                changePreview={setPreview3}
              />
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
              <button type="button" onClick={handleAddProcedure}>
                <AddIcon />
                Adicionar procedimento
              </button>
            </legend>

            <ProcedureList>
              {procedures.map((procedure) => (
                <Procedure
                  key={procedure.id}
                  userName={procedure.user_name}
                  procedureName={procedure.name}
                  date={procedure.date}
                  comments={procedure.comments}
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
