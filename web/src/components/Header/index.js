import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  Container,
  Topside,
  BackButton,
  BackIcon,
  Body,
  Title,
} from './styles';

function Header({ title, animalName }) {
  const history = useHistory();

  function handlerGoBack() {
    history.goBack();
  }

  return (
    <Container>
      <Topside>
        <BackButton onClick={handlerGoBack}>
          <BackIcon />
          Voltar
        </BackButton>
      </Topside>
      <Body>
        <Title>{title}</Title>
        <h2>{animalName}</h2>
      </Body>
    </Container>
  );
}

export default Header;
