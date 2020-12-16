import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import InputText from '../../../components/InputText';

import {
  Container,
  Background,
  RSide,
  BackButton,
  BackIcon,
  Form,
  Button,
} from './styles';

export default function AccessCode() {
  const history = useHistory();

  const [accessCode, setAccessCode] = useState('');

  function handlerGoBack() {
    history.goBack();
  }

  function handleValidateAccessCode() {
    history.push(`/singup-tutor`);
  }

  return (
    <Container>
      <Background />
      <RSide>
        <BackButton onClick={handlerGoBack}>
          <BackIcon />
          Voltar
        </BackButton>
        <Form>
          <InputText
            label={'Código de acesso'}
            value={accessCode}
            setValue={setAccessCode}
          />
          <Button onClick={handleValidateAccessCode}>Validar</Button>
        </Form>
      </RSide>
    </Container>
  );
}
