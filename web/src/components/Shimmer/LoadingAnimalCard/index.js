import React from 'react';

import {
  Container,
  DataInfo,
} from './styles';

import Skeleton from '../../Skeleton';

function LoadingAnimalCard() {
  return (
    <Container>
      <Skeleton className="avatar-skeleton" />

      <DataInfo>
        <Skeleton className="status-skeleton" />

        <span>
          <Skeleton className="title-skeleton" />
          <Skeleton className="subtitle-skeleton" />
        </span>

        <Skeleton className="link-skeleton" />
      </DataInfo>
    </Container>
  );
}

export default LoadingAnimalCard;
