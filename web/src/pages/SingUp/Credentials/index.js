import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { format } from 'date-fns';

import api from '../../../services/api';

import { useAlert } from '../../../context/Alert';
import InputText from '../../../components/InputText';
import InputPassword from '../../../components/InputPassword';

import { Container, Background, RSide, Button, ImageCredit } from './styles';

export default function Credentials({ location }) {
  const history = useHistory();
  const { setAlert } = useAlert();

  const [email, setEmail] = useState('');
  const [emailConfirmation, setEmailConfirmation] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  async function handleSubmit(e) {
    try {
      e.preventDefault();
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

      setAlert({ type: 'success', message: 'Cadastro efetuado com sucesso!' });
      history.push(`/`);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        console.log(err);
        setAlert({
          type: 'warning',
          message: 'Verifique os dados digitados e tente novamente',
        });
      }
    }
  }

  return (
    <Container>
      <Background />
      <RSide>
        <form onSubmit={handleSubmit}>
          <InputText
            label={'E-mail'}
            value={email}
            setValue={setEmail}
            type="email"
            maxLength="25"
          />
          <InputText
            label={'Confirme o e-mail'}
            value={emailConfirmation}
            setValue={setEmailConfirmation}
            type="email"
            maxLength="25"
          />
          <InputPassword
            label={'Senha'}
            value={password}
            setValue={setPassword}
            maxLength="25"
          />
          <InputPassword
            label={'Confirme a senha'}
            value={passwordConfirmation}
            setValue={setPasswordConfirmation}
            maxLength="25"
          />
          <Button type={'submit'}>Concluir</Button>
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
