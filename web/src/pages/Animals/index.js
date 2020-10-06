import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import data from '../../tempData/animals';

import {
  Container,
  Header,
  PlusIcon,
  SearchBox,
  SearchIcon,
  AnimalsCards,
} from './styles';

import AnimalCard from '../../components/AnimalCard';

function Animals() {
  const [animals, setAnimals] = useState([]);
  const [searchFor, setSearchFor] = useState('');

  function getAnimals() {
    setAnimals(data);
  }

  useEffect(() => {
    getAnimals();
  }, []);

  function handleSearchAnimalByName(e) {
    e.preventDefault();

    if (!searchFor) {
      getAnimals();
      return;
    }

    const filteredAnimals = animals.filter(
      (animal) => animal.name === searchFor
    );
    setAnimals(filteredAnimals);
  }

  return (
    <Container>
      <Header>
        <Link to="/">
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
        {animals.map((item) => (
          <AnimalCard
            key={item.id}
            id={item.id}
            name={item.name}
            gender={item.gender}
            avatarURL={item.avatarURL}
            status={item.status}
          />
        ))}
      </AnimalsCards>
    </Container>
  );
}

export default Animals;
