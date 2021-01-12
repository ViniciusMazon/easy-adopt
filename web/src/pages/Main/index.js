import React from 'react';
import { useHistory } from 'react-router-dom';

import logo_white from '../../assets/logo_white.svg';
import pawIcon from '../../assets/paw.svg';
import heartIcon from '../../assets/heart.svg';
import mobileIcon from '../../assets/mobile.svg';

import {
  Container,
  Background,
  Header,
  SingInButton,
  LockIcon,
  Footer,
  Feature,
  Description,
} from './styles';

export default function Main() {
  const history = useHistory();

  function handleNavigateToSingIn() {
    history.push('sing-in');
  }

  return (
    <Container>
      <Background>
        <Header>
          <img src={logo_white} alt="easyAdopt logo" />

          <SingInButton onClick={handleNavigateToSingIn}>
            <LockIcon />
            <p>Área restrita</p>
          </SingInButton>
        </Header>

        <h1>Adote e contribua por meio de nosso aplicativo</h1>
      </Background>

      <Footer>
        <Feature>
          <img src={pawIcon} alt="Adote" />
          <Description>
            <strong>Adote</strong>
            <p>Conheça nossos animais e aplique para o processo de adoção.</p>
          </Description>
        </Feature>

        <Feature>
          <img src={heartIcon} alt="Contribua" />
          <Description>
            <strong>Contribua</strong>
            <p>
              Doe e nos ajude a manter nosso trabalho em prol do bem estar
              animal.
            </p>
          </Description>
        </Feature>

        <Feature>
          <img src={mobileIcon} alt="Baixe nosso aplicativo" />
          <Description>
            <strong>Baixe nosso aplicativo</strong>
            <p>
              Disponível para{' '}
              <a href="https://play.google.com/store?hl=pt_BR&gl=US">Android</a>{' '}
              e <a href="https://www.apple.com/br/app-store/">iOS</a>.
            </p>
          </Description>
        </Feature>
      </Footer>
    </Container>
  );
}
