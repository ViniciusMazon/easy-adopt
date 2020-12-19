import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { useAuth } from '../../context/auth';
import { useAlert } from '../../context/Alert';

import InputText from '../../components/InputText';
import InputPassword from '../../components/InputPassword';

import { Container, Background, RSide, Logo, Form, Button } from './styles';

export default function SingIn() {
  const { setAlert } = useAlert();
  const { signed, signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSingUp() {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().required().min(3).max(25),
        password: Yup.string().required().min(8).max(25),
      });

      await schema.validate(
        { email, password },
        {
          abortEarly: false,
        }
      );
      signIn(email, password);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        setAlert({ type: 'warning', message: 'Informe seu usuário e senha' });
      } else {
        setAlert({
          type: 'error',
          message: 'Ops... ocorreu um erro, tente novamente mais tarde',
        });
      }
    }
  }

  return (
    <Container>
      <Background />
      <RSide>
        <Logo />
        <Form>
          <InputText
            label={'E-mail'}
            value={email}
            setValue={setEmail}
            type="email"
            maxLength="25"
          />
          <InputPassword
            label={'Senha'}
            value={password}
            setValue={setPassword}
            maxLength="25"
          />
          <Button onClick={handleSingUp}>Entrar</Button>
          <Link to="singup-access-code">
            Não possui uma conta? <strong>Cadastra-se</strong>
          </Link>
        </Form>
      </RSide>
    </Container>
  );
}
