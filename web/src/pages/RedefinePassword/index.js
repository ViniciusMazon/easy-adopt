import React, { useState } from 'react';
import { MoonLoader } from 'react-spinners';

import { useAlert } from '../../context/Alert';
import api from '../../services/api';

import InputPassword from '../../components/InputPassword';

import logo from '../../assets/logo.svg';
import { Container, Button } from './styles';

export default function RedefinePassword(props) {
  const { setAlert } = useAlert();

  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);

  async function handleSubmit() {
    setIsSpinning(true);
    if (password !== passwordConfirmation) {
      setAlert({ type: 'warning', message: 'As senhas precisam ser iguais' });
      return;
    }

    if (password.length < 9) {
      setAlert({
        type: 'warning',
        message: 'Sua senha precisa ter ao menos 8 caracteres',
      });
      return;
    }

    try {
      await api.post('/password-reset', {
        email: props.match.params.email,
        token: props.match.params.token,
        password,
        role: props.match.params.role,
      });
      setAlert({ type: 'success', message: 'Sua senha foi redefinida' });
      setIsSpinning(false);
    } catch (err) {
      setIsSpinning(false);
      setAlert({
        type: 'error',
        message:
          'Não foi possível redefinir sua senha, tente novamente mais tarde',
      });
    }
  }

  return (
    <Container>
      <img src={logo} alt="logo" />

      <InputPassword
        label={'Nova senha'}
        value={password}
        setValue={setPassword}
      />

      <InputPassword
        label={'Confirme a nova senha'}
        value={passwordConfirmation}
        setValue={setPasswordConfirmation}
      />

      <Button disabled={isSpinning} onClick={handleSubmit}>
        {isSpinning === false ? (
          'Salvar'
        ) : (
          <MoonLoader
            size={25}
            color={'#FFF'}
            css={'z-index: 9999'}
            loading={isSpinning}
          />
        )}
      </Button>
    </Container>
  );
}
