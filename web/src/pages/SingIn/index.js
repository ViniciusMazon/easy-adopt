import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import InputText from '../../components/InputText';

import { Container, Background, RSide, Logo, Form, Button } from './styles';

export default function SingIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Background />
      <RSide>
        <Logo />
        <Form>
          <InputText label={'E-mail'} value={email} setValue={setEmail} />
          <InputText label={'Senha'} value={password} setValue={setPassword} />
          <Button>Entrar</Button>
          <Link to="singup-access-code">
            Não possui uma conta? <strong>Cadastra-se</strong>
          </Link>
        </Form>
      </RSide>
    </Container>
  );
}
