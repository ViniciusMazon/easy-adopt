import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

import { Container, Header, AdoptionRequests } from './styles';

import { useAdoptionRequests } from '../../context/AdoptionRequests';
import AdoptionRequestCard from '../../components/AdoptionRequestCard';
import { useAlert } from '../../context/Alert';

function Adoption() {
  const { adoptionRequests } = useAdoptionRequests();
  const { alert, setAlert } = useAlert();

  useEffect(() => {
    if (alert === '') {
      return;
    }

    toast.success(alert);
    setAlert('');
  }, [alert, setAlert]);

  return (
    <Container>
      <Header />
      <AdoptionRequests>
        {adoptionRequests.map((item) => (
          <AdoptionRequestCard
            key={item.id}
            id={item.id}
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
