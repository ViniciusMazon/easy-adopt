import React from 'react';

import { Container, Topside, Body } from './styles';

export default function Procedure({ userName, procedureName, date, comments }) {
  return (
    <Container>
      <Topside>
        <div>
          <p>
            <strong>Colaborador: </strong>
            {userName}
          </p>

          <p>
            <strong>Procedimento: </strong>
            {procedureName}
          </p>
        </div>

        <strong>{date}</strong>
      </Topside>

      <Body>
        <strong>Observações: </strong>
        <p>{comments}</p>
      </Body>
    </Container>
  );
}
