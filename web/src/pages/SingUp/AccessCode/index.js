import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import api from '../../../services/api';

import { useAlert } from '../../../context/Alert';
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
  const { alert, setAlert } = useAlert();

  const [accessCode, setAccessCode] = useState('');

  useEffect(() => {
    if (alert === '') {
      return;
    }

    toast.success(alert);
    setAlert('');
  }, [alert, setAlert]);

  function handlerGoBack() {
    history.goBack();
  }

  async function handleValidateAccessCode() {
    try {
      const schema = Yup.object().shape({
        accessCode: Yup.string().required(),
      });

      await schema.validate({ accessCode });

      const response = await api.get(`/access-code/${accessCode}`);

      if (response.data.isValid) {
        setAlert('Código de acesso válido');
        history.push(`/singup-collaborator`, { access_code: accessCode });
      } else {
        setAlert('Código de acesso inválido');
      }
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        setAlert(
          'Erro de validação, verifique os dados digitados e tente novamente'
        );
      }
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
