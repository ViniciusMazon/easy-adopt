import React from 'react';

import { Container, Wrapper, DownloadIcon } from './styles';

export default function Help() {
  return (
    <Container>
      <Wrapper>
        <label>Manual do usuário</label>

        <div>
          <p>
            O manual do usuário contem informações sobre as principais funcionalidades do sistema e pode ser consultado clicando no botão "Download".
          </p>

          <button>
            <DownloadIcon />
            Download
          </button>
        </div>
      </Wrapper>
    </Container>
  );
}
