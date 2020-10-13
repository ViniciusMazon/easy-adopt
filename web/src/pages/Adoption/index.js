import React from 'react';

import { Container, Header, AdoptionRequests } from './styles';

import { useAdoptionRequests } from '../../context/AdoptionRequests';
import AdoptionRequestCard from '../../components/AdoptionRequestCard';

function Adoption() {
  const { adoptionRequests } = useAdoptionRequests();

  return (
    <Container>
      <Header />
      <AdoptionRequests>
        {adoptionRequests.map((item) => (
          <AdoptionRequestCard
            key={item.id}
            status={item.status}
            tutor={item.tutor}
            animal={item.animal}
          />
        ))}
      </AdoptionRequests>
    </Container>
  );
}

export default Adoption;
