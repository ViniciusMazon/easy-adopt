import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { Container, Header, AdoptionRequests } from './styles';

import { useAdoptionRequests } from '../../context/AdoptionRequests';
import AdoptionRequestCard from '../../components/AdoptionRequestCard';
import { useAlert } from '../../context/Alert';

import LoadingAdoptionRequestCard from '../../components/Shimmer/LoadingAdoptionRequestCard';

function Adoption() {
  const { adoptionRequests } = useAdoptionRequests();
  const { alert, setAlert } = useAlert();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (alert === '') {
      return;
    }

    toast.success(alert);
    setAlert('');
  }, [alert, setAlert]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  });

  return (
    <Container>
      <Header />
      <AdoptionRequests>
        {isLoading ? (
          <LoadingAdoptionRequestCard />
        ) : (
          adoptionRequests.map((item) => (
            <AdoptionRequestCard
              key={item.id}
              id={item.id}
              status={item.status}
              tutor={item.tutor}
              animal={item.animal}
            />
          ))
        )}
      </AdoptionRequests>
    </Container>
  );
}

export default Adoption;
