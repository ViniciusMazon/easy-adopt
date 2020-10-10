import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Avatar,
  DataInfo,
  Status,
  StatusIndicator,
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

        <Link to={`/edit-animal/${id}`}>
          <DetailIcon />
          detalhes
        </Link>
      </DataInfo>
    </Container>
  );
}

export default AnimalCard;
