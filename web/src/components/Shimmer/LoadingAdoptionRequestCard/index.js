import React from 'react';

import { Container, Row, Info } from './styles';

import Skeleton from '../../Skeleton';

export default function LoadingAdoptionRequestCard() {
  return (
    <Container>
      <Row>
        <Skeleton className="avatar-skeleton avatar-top" />

        <Info>
          <Skeleton className="status-skeleton" />

          <Skeleton className="title-skeleton" />
          <Skeleton className="subtitle-skeleton" />
        </Info>
      </Row>

      <Row>
        <Skeleton className="avatar-skeleton" />

        <Info>
          <Skeleton className="title-skeleton" />
          <Skeleton className="subtitle-skeleton" />

          <Skeleton className="link-skeleton" />
        </Info>
      </Row>
    </Container>
  );
}
