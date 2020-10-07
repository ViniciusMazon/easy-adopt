import React from 'react';

import { Container, Wrapper } from './styles';
import Header from '../../components/Header';

function Adoption() {
  return (
    <Container>
      <Header title={'Informações da'} animalName={'Mikka'} />
      <Wrapper>
        <h1>Adoption</h1>
      </Wrapper>
    </Container>
  );
}

export default Adoption;
