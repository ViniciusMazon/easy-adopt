import React from 'react';
import { Link } from 'react-router-dom';

import { Container, CloseIcon } from './styles';

export default function CampaignCard({
  id,
  title,
  goal,
  current,
  description,
}) {
  return (
    <Container>
      <span>
        <strong>{title}</strong>
        <p>{`R$${current} de R$${goal}`}</p>
      </span>

      <p>{description}</p>

      <Link to="">
        <CloseIcon />
        Encerrar
      </Link>
    </Container>
  );
}
