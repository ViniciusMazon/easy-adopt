import React from 'react';
import api from '../../services/api';

import { Container, CloseButton, CloseIcon } from './styles';

export default function CampaignCard({
  id,
  title,
  goal,
  current,
  description,
}) {
  async function handleCloseCampaign() {
    await api.delete(`/donation-campaigns/${id}`);
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
