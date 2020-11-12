import React, { useEffect } from 'react';
import api from '../../services/api';
import { useParams } from 'react-router-dom';

import { Container, Content, SuccessIcon } from './styles';

export default function DonationSuccess() {
  const params = useParams();

  useEffect(() => {
    api.put(`/donation/${params.id}`);
  }, [params.id]);

  return (
    <Container>
      <Content>
        <SuccessIcon />
        <h1>Obrigado por sua doação!</h1>
        <h2>
          Registramos sua doação, em breve você receberá um comprovante por
          e-mail.
        </h2>
      </Content>
    </Container>
  );
}
