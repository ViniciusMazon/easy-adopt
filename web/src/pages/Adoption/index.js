import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import api from '../../services/api';

import { Container, Header, AdoptionRequests } from './styles';

import AdoptionRequestCard from '../../components/AdoptionRequestCard';
import { useAlert } from '../../context/Alert';

import LoadingAdoptionRequestCard from '../../components/Shimmer/LoadingAdoptionRequestCard';

function Adoption() {
  const { alert, setAlert } = useAlert();
  const [adoptionRequests, setAdoptionRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (alert === '') {
      return;
    }

    toast.success(alert);
    setAlert('');
  }, [alert, setAlert]);

  useEffect(() => {
    api.get('/adoption-request').then((response) => {
      setAdoptionRequests(response.data);
    });
    setIsLoading(false);
  }, []);

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
