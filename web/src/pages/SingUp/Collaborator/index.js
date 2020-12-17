import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import { useAlert } from '../../../context/Alert';
import birthDateFormatter from '../../../utils/birthDateFormatter';
import phoneFormatter from '../../../utils/phoneFormatter';
import cpfFormatter from '../../../utils/cpfFormatter';

import InputText from '../../../components/InputText';
import SelectInput from '../../../components/SelectInput';

import { Container, Background, RSide, Form, Button } from './styles';

export default function Collaborator({ location }) {
  const history = useHistory();
  const { alert, setAlert } = useAlert();

  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (alert === '') {
      return;
    }

    toast.success(alert);
    setAlert('');
  }, [alert, setAlert]);

  async function handleNavigateToAddress() {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required().min(3).max(50),
        gender: Yup.string().required(),
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
        setAlert(
          'Erro de validação: Verifique os dados inseridos no formulário'
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
        <Form>
          <InputText
            label={'Nome completo'}
            value={name}
            setValue={setName}
            maxlength="50"
          />
          <SelectInput
            label={'Gênero'}
            value={gender}
            setValue={setGender}
            options={['Masculino', 'Feminino']}
          />
          <InputText
            label={'Data de nascimento'}
            value={birthDate}
            setValue={formatBirthDate}
            maxlength="10"
          />
          <InputText
            label={'CPF'}
            value={cpf}
            setValue={formatCpf}
            maxlength="14"
          />
          <InputText
            label={'Celular'}
            value={phone}
            setValue={formatPhone}
            maxlength="15"
          />
          <Button onClick={handleNavigateToAddress}>Próximo</Button>
        </Form>
      </RSide>
    </Container>
  );
}
