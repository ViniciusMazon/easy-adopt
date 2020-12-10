import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import api from '../../services/api';

import Header from '../../components/Header';
import Procedure from '../../components/Procedure';

import InputText from '../../components/InputText';
import SelectInput from '../../components/SelectInput';
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
  const params = useParams();
  const { setIsCompacted } = useMenuBar();
  const { alert, setAlert } = useAlert();

  const [isLoading, setIsLoading] = useState(true);
  const [animal, setAnimal] = useState({});
  const [procedures, setProcedures] = useState([]);

  const [imagesIds, setImagesIds] = useState([]);
  const [preview1, setPreview1] = useState('');
  const [preview2, setPreview2] = useState('');
  const [preview3, setPreview3] = useState('');
  const [newImage1, setNewImage1] = useState();
  const [newImage2, setNewImage2] = useState();
  const [newImage3, setNewImage3] = useState();

  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [specie, setSpecie] = useState('');
  const [size, setSize] = useState('');
  const [age, setAge] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (alert === '') {
      return;
    }

    toast.success(alert);
    setAlert('');
  }, [alert, setAlert]);

  useEffect(() => {
    setIsCompacted(true);

    api.get(`/animals/${params.id}`).then((response) => {
      setAnimal(response.data);
      setProcedures(response.data.procedures);
      setPreview1(response.data.images[0].image1_url);
      setPreview2(response.data.images[1].image2_url);
      setPreview3(response.data.images[2].image3_url);
      setImagesIds([
        response.data.images[0].image1_id,
        response.data.images[1].image2_id,
        response.data.images[2].image3_id,
      ]);
      setIsLoading(false);
    });
  }, [params.id, setIsCompacted]);

  function handleDeleteAnimal() {
    api.delete(`/animals/${params.id}`);

    setAlert('🐶 Animal excluído com sucesso!');
    history.push('/');
  }

  function handleAddProcedure() {
    history.push(`/edit-animal/${animal.id}/${animal.name}/add-procedure`);
  }

  async function updateImage(imageId, newImageNumber) {
    const formData = new FormData();
    formData.append('image', newImageNumber);
    await api.put(`/images/${imageId}`, formData);
    return;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        specie: Yup.string().required('A espécie é obrigatória'),
        gender: Yup.string().required('O gênero é obrigatório'),
        size: Yup.string().required('O tamanho é obrigatório'),
        age: Yup.string().required('A idade é obrigatória'),
        status: Yup.string().required('O status é obrigatório'),
      });

      const animalData = {
        name: name ? name : animal.name,
        specie: specie ? specie : animal.specie,
        gender: gender ? gender : animal.gender,
        age: age ? age : animal.age,
        size: size ? size : animal.size,
        status: status ? status : animal.status,
      };

      await schema.validate(animalData, {
        abortEarly: false,
      });

      if (newImage1) {
        await updateImage(imagesIds[0], newImage1);
      }
      if (newImage2) {
        await updateImage(imagesIds[1], newImage2);
      }
      if (newImage3) {
        await updateImage(imagesIds[2], newImage3);
      }

      await api.put(`/animals/${params.id}`, animalData);

      setAlert('🐱 Animal editado com sucesso!');
      history.push('/');
      setIsCompacted(false);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        setAlert(
          'Erro de validação: verifique as informações inseridas no formulário'
        );
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
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Fotos</legend>
            <Gallery>
              <InputImage
                isEditable={true}
                preview={preview1}
                changePreview={setPreview1}
                changeFile={setNewImage1}
              />
              <InputImage
                isEditable={true}
                preview={preview2}
                changePreview={setPreview2}
                changeFile={setNewImage2}
              />
              <InputImage
                isEditable={true}
                preview={preview3}
                changePreview={setPreview3}
                changeFile={setNewImage3}
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

            <InputText
              label={'Nome'}
              value={name}
              setValue={setName}
              placeholder={animal.name}
            />

            <div className="input-block">
              <SelectInput
                label="Espécie"
                setValue={setSpecie}
                options={['Cachorro', 'Gato']}
                placeholder={animal.specie}
              />
              <SelectInput
                label="Gênero"
                setValue={setGender}
                options={['Macho', 'Fêmea']}
                placeholder={animal.gender}
              />
            </div>

            <div className="input-block">
              <SelectInput
                label="Porte"
                setValue={setSize}
                options={['Pequeno', 'Médio', 'Grande']}
                placeholder={animal.size}
              />
              <SelectInput
                label="Idade"
                setValue={setAge}
                options={['Filhote', 'Adulto', 'Sênior']}
                placeholder={animal.age}
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
              <SelectInput
                label="Status"
                setValue={setStatus}
                options={['Disponível para adoção', 'Indisponível para adoção']}
                placeholder={animal.status}
              />
            </div>
          </fieldset>

          <ButtonSave>
            <SaveIcon />
            Salvar
          </ButtonSave>
        </form>
      )}
    </Container>
  );
}
