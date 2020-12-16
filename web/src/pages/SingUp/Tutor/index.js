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

export default function Tutor() {
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
        name: Yup.string().required('O nome é obrigatório'),
        gender: Yup.string().required('A espécie é obrigatória'),
        birth_date: Yup.string().required('O gênero é obrigatório'),
        cpf: Yup.string().required('O tamanho é obrigatório'),
        phone: Yup.string().required('A idade é obrigatória'),
      });

      const tutorData = {
        name,
        gender,
        birth_date: birthDate,
        cpf,
        phone,
      };

      await schema.validate(tutorData, {
        abortEarly: false,
      });

      history.push(`/singup-address`, { tutorData });
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
          <InputText label={'Nome completo'} value={name} setValue={setName} />
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
          />
          <InputText label={'CPF'} value={cpf} setValue={formatCpf} />
          <InputText label={'Celular'} value={phone} setValue={formatPhone} />
          <Button onClick={handleNavigateToAddress}>Próximo</Button>
        </Form>
      </RSide>
    </Container>
  );
}
