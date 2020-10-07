import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useMenuBar } from '../../context/MenuBar';
import { useAnimals } from '../../context/Animals';

import {
  Container,
  Header,
  PlusIcon,
  SearchBox,
  SearchIcon,
  AnimalsCards,
} from './styles';

import AnimalCard from '../../components/AnimalCard';
import fakeData from '../../tempData/animals';

function Animals() {
  const { setIsCompacted } = useMenuBar();
  const { animals, setAnimals } = useAnimals();

  const [searchFor, setSearchFor] = useState('');

  function getAnimals() {
    setAnimals(fakeData);
  }

  useEffect(() => {
    getAnimals();
    setIsCompacted(false);
  }, [getAnimals, setIsCompacted]);

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
        {animals &&
          animals.map((item) => (
            <AnimalCard
              key={item.id}
              id={item.id}
              name={item.name}
              gender={item.gender}
              avatarURL={item.image1}
              status={item.status}
            />
          ))}
      </AnimalsCards>
    </Container>
  );
}

export default Animals;
