import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { MoonLoader } from 'react-spinners';

import { useAuth } from '../../context/auth';
import { useAlert } from '../../context/Alert';

import InputText from '../../components/InputText';
import InputPassword from '../../components/InputPassword';

import {
  Container,
  Background,
  RSide,
  Logo,
  Button,
  ImageCredit,
} from './styles';

export default function SingIn() {
  const { setAlert } = useAlert();
  const { signIn } = useAuth();

  const [isSpinning, setIsSpinning] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSingUp(e) {
    e.preventDefault();
    setIsSpinning(true);
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
      setTimeout(() => {}, 3000);
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

    setIsSpinning(false);
  }

  return (
    <Container>
      <Background />
      <RSide>
        <Logo />

        <form onSubmit={handleSingUp}>
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

          <Link to="reset-password">Esqueci minha senha</Link>

          <Button type={'submit'} disabled={isSpinning}>
            {isSpinning === false ? (
              'Entrar'
            ) : (
              <MoonLoader
                size={25}
                color={'#FFF'}
                css={'z-index: 9999'}
                loading={isSpinning}
              />
            )}
          </Button>

          <Link to="singup-access-code" className="singUp">
            Não possui uma conta? <strong>Cadastra-se</strong>
          </Link>
        </form>
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
