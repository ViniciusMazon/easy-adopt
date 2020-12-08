import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { Container, Wrapper, DownloadIcon } from './styles';

export default function Help() {
  const [link, setLink] = useState('');

  useEffect(() => {
    api.get('/help').then((response) => {
      setLink(response.data.link);
    });
  });

  return (
    <Container>
      <Wrapper>
        <label>Manual do usuário</label>

        <div>
          <p>
            O manual do usuário contem informações sobre as principais
            funcionalidades do sistema e pode ser consultado clicando no botão
            "Download".
          </p>

          <a href={link} target="_blank" rel="noopener noreferrer">
            <DownloadIcon />
            Download
          </a>
        </div>
      </Wrapper>
    </Container>
  );
}
