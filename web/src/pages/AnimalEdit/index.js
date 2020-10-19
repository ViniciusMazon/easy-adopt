import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import Header from '../../components/Header';
import Procedure from '../../components/Procedure';

import { Input, Select, ImageInput } from '../../components/Form';
import { useMenuBar } from '../../context/MenuBar';
import { useAnimals } from '../../context/Animals';
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
  const [isLoading, setIsLoading] = useState(true);
  const { setIsCompacted } = useMenuBar();
  const { alert, setAlert } = useAlert();
  const { animals, setAnimals } = useAnimals();
  const { procedures } = useProcedures();

  const [animalData, setAnimalData] = useState({});
  const [proceduresData, setProceduresData] = useState([]);

  useEffect(() => {
    setIsCompacted(true);

    setTimeout(() => {
      setIsLoading(false);
      const [animalSelected] = animals.filter((item) => {
        if (item.id === Number(match.params.id)) {
          return item;
        }
      });
      setAnimalData(animalSelected);

      if (editRef.current !== null) {
        editRef.current.setData({
          name: animalSelected.name,
          gender: animalSelected.gender,
          size: animalSelected.size,
          specie: animalSelected.specie,
          age: animalSelected.age,
          status:
            animalSelected.status === 'disponível'
              ? 'Disponível para adoção'
              : 'Indisponível para adoção',
          image1: animalSelected.image1,
          image2: animalSelected.image2,
          image3: animalSelected.image3,
        });
      }
    }, 3000);
  });

  useEffect(() => {
    if (alert === '') {
      return;
    }

    toast.success(alert);
    setAlert('');
  }, [alert, setAlert]);

  useEffect(() => {
    const proceduresOfThisAnimal = procedures.filter((item) => {
      if (item.animal_id === Number(match.params.id)) {
        return item;
      }
    });
    setProceduresData(proceduresOfThisAnimal);
  }, [match.params.id, procedures]);

  function handleDeleteAnimal() {
    const newAnimalsArray = animals.filter((item) => {
      if (item.id !== Number(match.params.id)) {
        return item;
      }
    });

    setAlert('🐶 Animal excluído com sucesso!');
    setAnimals(newAnimalsArray);
    history.push('/');
  }

  function handleAddProcedure() {
    history.push(`/edit-animal/${animalData.id}/add-procedure`, {
      animalName: animalData.name,
    });
  }

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

      const newAnimalData = {
        id: Number(match.params.id),
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

      const newArrayAnimals = animals.map((item) => {
        if (item.id === Number(match.params.id)) {
          return newAnimalData;
        } else {
          return item;
        }
      });
      setAnimals(newArrayAnimals);

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
              <button type="button" onClick={handleAddProcedure}>
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
