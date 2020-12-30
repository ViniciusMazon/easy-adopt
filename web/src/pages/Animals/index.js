import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

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
  const [animals, setAnimals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const [searchFor, setSearchFor] = useState('');

  useEffect(() => {
    const fetchApiGetAnimals = async () => {
      const response = await api.get('/animals');
      setAnimals(response.data);
      setIsLoading(false);
    };

    fetchApiGetAnimals();
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
              avatarURL={item.images[0].image1_url}
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
              avatarURL={item.images[0].image1_url}
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
