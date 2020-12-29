import React from 'react';

import api from '../../services/api';

import { useAlert } from '../../context/Alert';

import { Container, CloseButton, CloseIcon } from './styles';

export default function CampaignCard({
  id,
  title,
  goal,
  current,
  description,
  fetchApi,
}) {
  const { setAlert } = useAlert();

  async function handleCloseCampaign() {
    await api.delete(`/donation-campaigns/${id}`);
    setAlert({ type: 'success', message: 'Campanha removida com sucesso' });
    fetchApi();
  }

  return (
    <Container>
      <span>
        <strong>{title}</strong>
        <p>{`${current} de ${goal}`}</p>
      </span>

      <p>{description}</p>

      <CloseButton onClick={handleCloseCampaign}>
        <CloseIcon />
        Encerrar
      </CloseButton>
    </Container>
  );
}
