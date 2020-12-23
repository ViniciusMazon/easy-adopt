import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import { useAlert } from '../../context/Alert';
import InputText from '../../components/InputText';

import {
  Container,
  Background,
  RSide,
  BackButton,
  BackIcon,
  Form,
  Button,
  ImageCredit,
} from './styles';

export default function ResetPassword() {
  const history = useHistory();
  const { setAlert } = useAlert();

  const [email, setEmail] = useState('');

  function handlerGoBack() {
    history.goBack();
  }

  async function handleSubmit() {
    if (!email) {
      setAlert({
        type: 'warning',
        message: 'Digite um e-mail válido',
      });
      return;
    }

    try {
      await await api.get(`/password-reset/collaborator/${email}`);
      setAlert({
        type: 'success',
        message: 'Te enviamos um e-mail para redefinir sua senha',
      });
      history.push('/');
    } catch (err) {
      setAlert({
        type: 'error',
        message:
          'Não foi possível redefinir sua senha no momento, tente novamente mais tarde',
      });
    }
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
          <InputText label={'E-mail'} value={email} setValue={setEmail} />
          <Button onClick={handleSubmit}>Enviar</Button>
        </Form>
      </RSide>

      <ImageCredit>
        Photo by{' '}
        <a href="https://unsplash.com/@chewy?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Chewy
        </a>{' '}
        on{' '}
        <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Unsplash
        </a>
      </ImageCredit>
    </Container>
  );
}
