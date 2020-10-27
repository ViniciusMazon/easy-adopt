import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../services/api';

import { useAnimals } from '../../context/Animals';
import { useAlert } from '../../context/Alert';

import {
  Container,
  Header,
  PlusIcon,
  SearchBox,
  SearchIcon,
  AnimalsCards,
} from './styles';

import AnimalCard from '../../components/AnimalCard';
import LoadingAnimalCard from '../../components/Shimmer/LoadingAnimalCard';

function Animals() {
  const { alert, setAlert } = useAlert();
  const [animals, setAnimals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const [searchFor, setSearchFor] = useState('');

  useEffect(() => {
    if (alert === '') {
      return;
    }

    toast.success(alert);
    setAlert('');
  }, [alert, setAlert]);

  useEffect(() => {
    api.get('/animals').then((reponse) => {
      setAnimals(reponse.data);
      setIsLoading(false);
    });
  }, []);

  function handleSearchAnimalByName(e) {
    e.preventDefault();

    if (!searchFor) {
      setFilteredAnimals([]);
    }

    const filter = animals.filter((animal) => animal.name === searchFor);

    setFilteredAnimals(filter);
  }

  return (
    <Container>
      <Header>
        <Link to="/add-animal">
          <PlusIcon />
          <p>Cadastrar novo animal</p>
        </Link>
        <SearchBox onSubmit={handleSearchAnimalByName}>
          <input
            placeholder="Buscar por nome"
            value={searchFor}
            onChange={(e) => setSearchFor(e.target.value)}
          />
          <SearchIcon />
        </SearchBox>
      </Header>

      <AnimalsCards>
        {isLoading && <LoadingAnimalCard />}

        {!isLoading &&
          animals.length > 0 &&
          filteredAnimals.length === 0 &&
          animals.map((item) => (
            <AnimalCard
              isLoading={isLoading}
              key={item.id}
              id={item.id}
              name={item.name}
              gender={item.gender}
              avatarURL={item.image1_url}
              status={item.status}
            />
          ))}

        {filteredAnimals.length > 0 &&
          filteredAnimals.map((item) => (
            <AnimalCard
              isLoading={isLoading}
              key={item.id}
              id={item.id}
              name={item.name}
              gender={item.gender}
              avatarURL={item.image1_url}
              status={item.status}
            />
          ))}

        {!isLoading && animals.length === 0 && (
          <h1>Não encontramos nenhum animal cadastrado</h1>
        )}
      </AnimalsCards>
    </Container>
  );
}

export default Animals;
