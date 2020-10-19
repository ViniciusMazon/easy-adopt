import React from 'react';

import { Container } from './styles';

import Skeleton from '../../Skeleton';

export default function LoadingCampaignCard() {
  return (
    <Container>
      <span>
        <Skeleton className="title-skeleton" />
        <Skeleton className="goal-skeleton" />
      </span>

      <Skeleton className="description-skeleton" />

      <Skeleton className="link-skeleton" />
    </Container>
  );
}
