import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import { useAuth } from '../../context/auth';
import { useAlert } from '../../context/Alert';

import InputText from '../../components/InputText';
import InputPassword from '../../components/InputPassword';

import { Container, Background, RSide, Logo, Form, Button } from './styles';

export default function SingIn() {
  const { alert, setAlert } = useAlert();
  const { signed, signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (alert === '') {
      return;
    }

    toast.success(alert);
    setAlert('');
  }, [alert, setAlert]);

  async function handleSingUp() {
    setAlert('Teste');
    toast.error('Erro');
    // try {
    //   const schema = Yup.object().shape({
    //     email: Yup.string().required().min(3).max(25),
    //     password: Yup.string().required().min(8).max(25),
    //   });

    //   await schema.validate(
    //     { email, password },
    //     {
    //       abortEarly: false,
    //     }
    //   );
    //   signIn(email, password);
    // } catch (err) {
    //   if (err instanceof Yup.ValidationError) {
    //     setAlert('Usuário ou senha inválido');
    //   }
    // }
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
            maxlength="25"
          />
          <InputPassword
            label={'Senha'}
            value={password}
            setValue={setPassword}
            maxlength="25"
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
