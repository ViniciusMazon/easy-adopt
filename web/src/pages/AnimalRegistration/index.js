import React, { useState, useEffect } from 'react';
import { useMenuBar } from '../../context/MenuBar';
import { useHistory } from 'react-router-dom';

import {
  Container,
  Main,
  Gallery,
  Input,
  Select,
  ButtonSave,
  SaveIcon,
} from './styles';

import Header from '../../components/Header';
import Dropzone from '../../components/Dropzone';

import fakeDB from '../../tempData/animals';

function AnimalRegistration() {
  const history = useHistory();
  const { setIsCompacted } = useMenuBar();

  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();
  const [name, setName] = useState();
  const [specie, setSpecie] = useState();
  const [gender, setGender] = useState();
  const [size, setSize] = useState();
  const [age, setAge] = useState();
  const [status, setStatus] = useState();

  useEffect(() => {
    setIsCompacted(true);
  }, [setIsCompacted]);

  function handleSubmit(e) {
    e.preventDefault();

    const formattedStatusName =
      status === 'Disponível para adoção' ? 'disponível' : 'indisponível';

    const data = new FormData();
    data.append('image1', image1);
    data.append('image2', image2);
    data.append('image3', image3);
    data.append('name', name);
    data.append('specie', specie);
    data.append('gender', gender);
    data.append('size', size);
    data.append('age', age);
    data.append('status', formattedStatusName);

    const tempData = {
      image1:
        'https://imagens.brasil.elpais.com/resizer/emY0sddaFt0rRsVdyjNGpIW6VHg=/768x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/POGGID5U7HB5OEVIB32OGG7ZWY.jpg',
      image2:
        'https://www.petz.com.br/blog/wp-content/uploads/2020/06/animais-com-sindrome-de-down.jpg',
      image3:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpoCo75Kbrsqf4OpRN4P49gALW4Ei_wnj0dg&usqp=CAU',
      name,
      specie,
      gender,
      size,
      age,
      status: formattedStatusName,
    };

    fakeDB.push(tempData);
    history.push('/');
    setIsCompacted(false);
  }

  return (
    <Container>
      <Header title={'Cadastro de animal'} />
      <Main onSubmit={handleSubmit}>
        <fieldset>
          <legend>Fotos</legend>
          <Gallery>
            <Dropzone onFileUploaded={setImage1} />
            <Dropzone onFileUploaded={setImage2} />
            <Dropzone onFileUploaded={setImage3} />
          </Gallery>
        </fieldset>

        <fieldset>
          <legend>Sobre o animal</legend>
          <Input>
            <label>Nome</label>
            <input
              placeholder="Nome"
              onChange={(e) => setName(e.target.value)}
            />
          </Input>

          <div className="input-block">
            <Select>
              <label>Espécie</label>
              <select onChange={(e) => setSpecie(e.target.value)}>
                <option hidden>Selecione uma espécie</option>
                <option>Cachorro</option>
                <option>Gato</option>
              </select>
            </Select>

            <Select>
              <label>Gênero</label>
              <select onChange={(e) => setGender(e.target.value)}>
                <option hidden>Selecione um gênero</option>
                <option>Macho</option>
                <option>Fêmea</option>
              </select>
            </Select>
          </div>

          <div className="input-block">
            <Select>
              <label>Porte</label>
              <select onChange={(e) => setSize(e.target.value)}>
                <option hidden>Selecione um porte</option>
                <option>Pequeno</option>
                <option>Médio</option>
                <option>Grande</option>
              </select>
            </Select>

            <Select>
              <label>Idade</label>
              <select onChange={(e) => setAge(e.target.value)}>
                <option hidden>Selecione uma idade</option>
                <option>Filhote</option>
                <option>Adulto</option>
                <option>Sênior</option>
              </select>
            </Select>
          </div>
        </fieldset>

        <fieldset>
          <legend>Sobre a adoção</legend>
          <div className="input-block">
            <Select>
              <label>Status</label>
              <select onChange={(e) => setStatus(e.target.value)}>
                <option hidden>Selecione um status</option>
                <option>Disponível para adoção</option>
                <option>Indisponível para adoção</option>
              </select>
            </Select>
          </div>
        </fieldset>

        <ButtonSave>
          <SaveIcon />
          Salvar
        </ButtonSave>
      </Main>
    </Container>
  );
}

export default AnimalRegistration;
