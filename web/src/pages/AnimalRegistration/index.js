import React from 'react';

import { Container, Wrapper } from './styles';
import Header from '../../components/Header';

function AnimalRegistration() {
  return (
    <Container>
      <Header title={'Cadastro de animal'} />
      <Wrapper>
        <h1>Animal Registration</h1>
      </Wrapper>
    </Container>
  );
}

export default AnimalRegistration;
