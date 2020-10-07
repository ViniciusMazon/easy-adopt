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
  return (
    <>
      <HeaderBack />
      <Container>
        <Body>
          <Title>{title}</Title>
          <h2>{animalName}</h2>
        </Body>
      </Container>
    </>
  );
}

const HeaderBack = () => {
  const history = useHistory();

  function handlerGoBack() {
    history.goBack();
  }

  return (
    <Topside>
      <BackButton onClick={handlerGoBack}>
        <BackIcon />
        Voltar
      </BackButton>
    </Topside>
  );
};

export default Header;
