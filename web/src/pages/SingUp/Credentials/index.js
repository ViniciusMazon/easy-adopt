import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import { useAlert } from '../../../context/Alert';
import InputText from '../../../components/InputText';
import InputPassword from '../../../components/InputPassword';

import { Container, Background, RSide, Form, Button } from './styles';

export default function Credentials({ location }) {
  const history = useHistory();
  const { alert, setAlert } = useAlert();

  const [email, setEmail] = useState('');
  const [emailConfirmation, setEmailConfirmation] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  useEffect(() => {
    if (alert === '') {
      return;
    }

    toast.success(alert);
    setAlert('');
  }, [alert, setAlert]);

  async function handleSubmit() {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().required(),
        password: Yup.string().required(),
        emailConfirmation: Yup.string().required(),
        passwordConfirmation: Yup.string().required(),
      });

      await schema.validate(
        { email, emailConfirmation, password, passwordConfirmation },
        {
          abortEarly: false,
        }
      );

      const address = location.state.addressData;
      // Cria um edereço e armazena o ID

      const tutor = {
        gender: location.state.tutorData.gender,
        name: location.state.tutorData.name,
        birth_date: location.state.tutorData.birth_date,
        cpf: location.state.tutorData.cpf,
        email,
        password,
        phone: location.state.tutorData.phone,
        address_id: '',
      };

      console.table(address);
      console.table(tutor);
      setAlert('Cadastro efetuado com sucesso');
      history.push(`/`);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        setAlert(
          'Erro de validação: Verifique os dados inseridos no formulário'
        );
      }
    }
  }

  return (
    <Container>
      <Background />
      <RSide>
        <Form>
          <InputText label={'E-mail'} value={email} setValue={setEmail} />
          <InputText
            label={'Confirme o e-mail'}
            value={emailConfirmation}
            setValue={setEmailConfirmation}
          />
          <InputPassword
            label={'Senha'}
            value={password}
            setValue={setPassword}
          />
          <InputPassword
            label={'Confirme a senha'}
            value={passwordConfirmation}
            setValue={setPasswordConfirmation}
          />
          <Button onClick={handleSubmit}>Concluir</Button>
        </Form>
      </RSide>
    </Container>
  );
}
