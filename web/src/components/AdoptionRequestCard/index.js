import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Status,
  StatusIndicator,
  Row,
  Avatar,
  Info,
  DetailIcon,
} from './styles';

export default function AdoptionRequestCard({ status, tutor, animal }) {
  return (
    <Container>
      <Row>
        <Avatar avatarURL={tutor.avatar_url} className="avatar-top" />

        <Info>
          <Status>
            <StatusIndicator status={status} />
            <p>{status}</p>
          </Status>

          <strong>{tutor.name}</strong>
          <p>{tutor.gender}</p>
        </Info>
      </Row>

      <Row>
        <Avatar avatarURL={animal.avatar_url} />

        <Info>
          <strong>{animal.name}</strong>
          <p>{animal.gender}</p>

          <Link to="">
            <DetailIcon />
            detalhes
          </Link>
        </Info>
      </Row>
    </Container>
  );
}
