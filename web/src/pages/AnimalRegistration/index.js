import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { MoonLoader } from 'react-spinners';
import { useMenuBar } from '../../context/MenuBar';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import { Container, Gallery, ButtonSave, SaveIcon } from './styles';

import Header from '../../components/Header';
import InputText from '../../components/InputText';
import SelectInput from '../../components/SelectInput';
import InputImage from '../../components/InputImage';
import { useAlert } from '../../context/Alert';

function AnimalRegistration() {
  const history = useHistory();
  const { setIsCompacted } = useMenuBar();
  const { setAlert } = useAlert();
  const [isSpinning, setIsSpinning] = useState(false);

  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();
  const [preview1, setPreview1] = useState('');
  const [preview2, setPreview2] = useState('');
  const [preview3, setPreview3] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [specie, setSpecie] = useState('');
  const [size, setSize] = useState('');
  const [age, setAge] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    setIsCompacted(true);
  }, [setIsCompacted]);

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

      await schema.validate(
        { name, specie, gender, size, age, status },
        {
          abortEarly: false,
        }
      );

      const formattedStatusName =
        status === 'Disponível para adoção' ? 'disponível' : 'indisponível';

      const formData = new FormData();
      formData.append('name', name);
      formData.append('specie', specie);
      formData.append('gender', gender);
      formData.append('size', size);
      formData.append('age', age);
      formData.append('status', formattedStatusName);
      formData.append('images', image1);
      formData.append('images', image2);
      formData.append('images', image3);

      const response = await api.post('/animals', formData);
      if (response.status === 201) {
        setAlert({ type: 'success', message: 'Animal cadastrado com sucesso' });
        history.push('/');
        setIsCompacted(false);
      } else {
        setAlert({
          type: 'warning',
          message: 'Não foi possível concluir a operação',
        });
        setIsSpinning(false);
      }
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        setAlert({
          type: 'error',
          message: 'Verifique os dados inseridos e tente novamente',
        });
        setIsSpinning(false);
      }
    }
  }

  return (
    <Container>
      <Header title={'Cadastro de animal'} />
      <form onSubmit={handleSubmit}>
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
          <InputText label={'Nome'} value={name} setValue={setName} />

          <div className="input-block">
            <SelectInput
              label="Espécie"
              setValue={setSpecie}
              options={['Cachorro', 'Gato']}
            />
            <SelectInput
              label="Gênero"
              setValue={setGender}
              options={['Macho', 'Fêmea']}
            />
          </div>

          <div className="input-block">
            <SelectInput
              label="Porte"
              setValue={setSize}
              options={['Pequeno', 'Médio', 'Grande']}
            />
            <SelectInput
              label="Idade"
              setValue={setAge}
              options={['Filhote', 'Adulto', 'Sênior']}
            />
          </div>
        </fieldset>

        <fieldset>
          <legend>Sobre a adoção</legend>
          <div className="input-block">
            <SelectInput
              label="Status"
              setValue={setStatus}
              options={['Disponível para adoção', 'Indisponível para adoção']}
            />
          </div>
        </fieldset>

        {isSpinning === false ? (
          <ButtonSave>
            <SaveIcon />
            Salvar
          </ButtonSave>
        ) : (
          <MoonLoader
            className="loading"
            size={45}
            color={'#FF6DA6'}
            css={'align-self: center'}
            loading={isSpinning}
          />
        )}
      </form>
    </Container>
  );
}

export default AnimalRegistration;
