import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import { useAlert } from '../../../context/Alert';
import birthDateFormatter from '../../../utils/birthDateFormatter';
import phoneFormatter from '../../../utils/phoneFormatter';
import cpfFormatter from '../../../utils/cpfFormatter';

import InputText from '../../../components/InputText';
import SelectInput from '../../../components/SelectInput';

import { Container, Background, RSide, Button } from './styles';

export default function Collaborator({ location }) {
  const history = useHistory();
  const { setAlert } = useAlert();

  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');

  async function handleNavigateToAddress(e) {
    try {
      e.preventDefault();
      const schema = Yup.object().shape({
        name: Yup.string().min(3).max(50).required('Nome'),
        gender: Yup.string().required('Gênero'),
        birth_date: Yup.string().required().min(10).max(10),
        cpf: Yup.string().required().min(14).max(14),
        phone: Yup.string().required().min(14).max(15),
      });

      const collaboratorData = {
        name,
        gender,
        birth_date: birthDate,
        cpf,
        phone,
      };

      await schema.validate(collaboratorData, {
        abortEarly: false,
      });

      const access_code = location.state.access_code;

      history.push(`/singup-address`, { access_code, collaboratorData });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        console.table(err);
        err.errors.map((error) =>
          setAlert({ type: 'warning', message: error })
        );
      }
    }
  }

  function formatBirthDate(birthDate) {
    const birthDateFormatted = birthDateFormatter(birthDate);
    setBirthDate(birthDateFormatted);
  }

  function formatPhone(phone) {
    const phoneFormatted = phoneFormatter(phone);
    setPhone(phoneFormatted);
  }

  function formatCpf(cpf) {
    const cpfFormatted = cpfFormatter(cpf);
    setCpf(cpfFormatted);
  }

  return (
    <Container>
      <Background />
      <RSide>
        <form onSubmit={handleNavigateToAddress}>
          <InputText
            label={'Nome completo'}
            value={name}
            setValue={setName}
            maxLength="50"
            required
          />
          <SelectInput
            label={'Gênero'}
            value={gender}
            setValue={setGender}
            options={['Masculino', 'Feminino']}
            required
          />
          <InputText
            label={'Data de nascimento'}
            value={birthDate}
            setValue={formatBirthDate}
            maxLength="10"
            required
          />
          <InputText
            label={'CPF'}
            value={cpf}
            setValue={formatCpf}
            maxLength="14"
            required
          />
          <InputText
            label={'Celular'}
            value={phone}
            setValue={formatPhone}
            maxLength="15"
            required
          />
          <Button type={'submit'}>Próximo</Button>
        </form>
      </RSide>
    </Container>
  );
}
