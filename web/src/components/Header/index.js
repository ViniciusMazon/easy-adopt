import React from 'react';
import { useHistory } from 'react-router-dom';

import { useMenuBar } from '../../context/MenuBar';

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
          <Title>
            <h1>{title}</h1>
            <h2>{animalName}</h2>
          </Title>
        </Body>
      </Container>
    </>
  );
}

const HeaderBack = () => {
  const history = useHistory();
  const { setIsCompacted } = useMenuBar();

  function handlerGoBack() {
    history.goBack();
    setIsCompacted(false);
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
