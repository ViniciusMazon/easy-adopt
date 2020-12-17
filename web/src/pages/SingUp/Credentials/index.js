import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { format } from 'date-fns';
import api from '../../../services/api';

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
        email: Yup.string().required().min(3).max(25),
        emailConfirmation: Yup.string().required().min(3).max(25),
        password: Yup.string().required().min(8).max(25),
        passwordConfirmation: Yup.string().required().min(8).max(25),
      });

      await schema.validate(
        { email, emailConfirmation, password, passwordConfirmation },
        {
          abortEarly: false,
        }
      );

      const address = location.state.addressData;
      const addressResponse = await api.post('/address', address);

      const splittedDate = location.state.collaboratorData.birth_date.split(
        '/'
      );

      const collaborator = {
        gender: location.state.collaboratorData.gender,
        name: location.state.collaboratorData.name,
        birth_date: format(
          new Date(splittedDate[2], splittedDate[1], splittedDate[0]),
          'yyyy-MM-dd'
        ),
        cpf: location.state.collaboratorData.cpf,
        email,
        password,
        phone: location.state.collaboratorData.phone,
        access_code: location.state.access_code,
        address_id: addressResponse.data.address_id,
      };

      await api.post('/collaborators', collaborator);

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
          <InputText
            label={'E-mail'}
            value={email}
            setValue={setEmail}
            type="email"
            maxlength="25"
          />
          <InputText
            label={'Confirme o e-mail'}
            value={emailConfirmation}
            setValue={setEmailConfirmation}
            type="email"
            maxlength="25"
          />
          <InputPassword
            label={'Senha'}
            value={password}
            setValue={setPassword}
            maxlength="25"
          />
          <InputPassword
            label={'Confirme a senha'}
            value={passwordConfirmation}
            setValue={setPasswordConfirmation}
            maxlength="25"
          />
          <Button onClick={handleSubmit}>Concluir</Button>
        </Form>
      </RSide>
    </Container>
  );
}
