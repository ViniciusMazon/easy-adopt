import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

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

function Animals() {
  const { alert, setAlert } = useAlert();
  const { animals } = useAnimals();
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const [searchFor, setSearchFor] = useState('');

  useEffect(() => {
    if (alert === '') {
      return;
    }

    toast(alert);
    setAlert('');
  }, [alert, setAlert]);

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
        {filteredAnimals.length > 0
          ? filteredAnimals.map((item) => (
              <AnimalCard
                key={item.id}
                id={item.id}
                name={item.name}
                gender={item.gender}
                avatarURL={item.image1}
                status={item.status}
              />
            ))
          : animals.map((item) => (
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
