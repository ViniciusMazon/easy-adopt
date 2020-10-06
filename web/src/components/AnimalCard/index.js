import React from 'react';

import {
  Container,
  Avatar,
  DataInfo,
  Status,
  StatusIndicator,
  DetailButton,
  DetailIcon,
} from './styles';

function AnimalCard({ id, name, gender, avatarURL, status }) {
  return (
    <Container>
      <Avatar avatarURL={avatarURL} />

      <DataInfo>
        <Status>
          <StatusIndicator status={status} />
          <p>{status}</p>
        </Status>

        <span>
          <strong>{name}</strong>
          <p>{gender}</p>
        </span>

        <DetailButton>
          <DetailIcon />
          detalhes
        </DetailButton>
      </DataInfo>
    </Container>
  );
}

export default AnimalCard;
