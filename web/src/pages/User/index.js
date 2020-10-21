import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import { Container, ButtonSave, SaveIcon, LogoutIcon } from './styles';
import { Input } from '../../components/Form';

import { useAlert } from '../../context/Alert';
import { useUser } from '../../context/User';
import LoadingUser from '../../components/Shimmer/LoadingUser';

export default function User() {
  const history = useHistory();
  const userRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [accessCode, setAccessCode] = useState('');
  const { alert, setAlert } = useAlert();
  const { user, setUser } = useUser();

  useEffect(() => {
    if (alert === '') {
      return;
    }

    toast.success(alert);
    setAlert('');
  }, [alert, setAlert]);

  useEffect(() => {
    if (userRef.current !== null) {
      userRef.current.setData({
        generate_access_code: accessCode,
      });
    }
  }, [accessCode]);

  useEffect(() => {
    if (userRef.current !== null) {
      userRef.current.setData({
        name: user.name,
        birth_date: user.birth_date,
        email: user.email,
        phone: user.phone,
        cpf: user.cpf,
      });
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  });

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        birth_date: Yup.string().required('A data é obrigatória'),
        email: Yup.string().required('O e-mail é obrigatório'),
        phone: Yup.string().required('O telefone é obrigatório'),
        cpf: Yup.string().required('O CPF é obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const newUserData = {
        name: data.name,
        birth_date: data.birth_date,
        email: data.email,
        phone: data.phone,
        cpf: data.cpf,
      };

      setUser(newUserData);
      userRef.current.setErrors({});
      setAlert('😄 Suas informações foram alteradas com sucesso!');
      history.push('/');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });

        userRef.current.setErrors(errorMessages);
      }
    }
  }

  function handleLogout() {}

  function handleGenerateAccessCode() {
    const hash = Math.random().toString(36).substring(7);
    setAccessCode(hash);
  }

  return (
    <Container>
      {isLoading ? (
        <LoadingUser />
      ) : (
        <Form ref={userRef} onSubmit={handleSubmit}>
          <fieldset>
            <legend>
              Configurações de usuário
              <button type="button" onClick={handleLogout}>
                <LogoutIcon />
                Sair
              </button>
            </legend>

            <Input name="name" label="Nome completo" />

            <div className="input-block">
              <Input name="email" label="E-mail" />
              <Input name="phone" label="Celular" />
            </div>

            <div className="input-block">
              <Input name="cpf" label="CPF" />
              <Input name="birth_date" label="Data de nascimento" />
            </div>
          </fieldset>

          <fieldset>
            <legend>Gerar um código de acesso</legend>
            <div className="generate-code">
              <Input
                name="generate_access_code"
                label="Novo código de acesso"
                readonly
                className="input-custom"
              />
              <button type="button" onClick={handleGenerateAccessCode}>
                Gerar
              </button>
            </div>
          </fieldset>

          <ButtonSave>
            <SaveIcon />
            Salvar
          </ButtonSave>
        </Form>
      )}
    </Container>
  );
}
