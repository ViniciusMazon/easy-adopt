import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import cepFormatter from '../../../utils/cepFormatter';

import { useAlert } from '../../../context/Alert';
import InputText from '../../../components/InputText';
import SelectInput from '../../../components/SelectInput';

import { Container, Background, RSide, Form, Button } from './styles';

export default function Address({ location }) {
  const history = useHistory();
  const { alert, setAlert } = useAlert();

  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [cep, setCep] = useState('');

  useEffect(() => {
    if (alert === '') {
      return;
    }

    toast.success(alert);
    setAlert('');
  }, [alert, setAlert]);

  async function handleNext() {
    try {
      const schema = Yup.object().shape({
        street: Yup.string().required('O nome é obrigatório'),
        number: Yup.string().required('A espécie é obrigatória'),
        neighborhood: Yup.string().required('O gênero é obrigatório'),
        city: Yup.string().required('O tamanho é obrigatório'),
        state: Yup.string().required('A idade é obrigatória'),
        cep: Yup.string().required('A idade é obrigatória'),
      });

      const addressData = {
        street,
        number,
        neighborhood,
        city,
        state,
        cep,
      };

      await schema.validate(addressData, {
        abortEarly: false,
      });

      const tutorData = location.state.tutorData;

      history.push(`/singup-credentials`, {
        tutorData,
        addressData,
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        setAlert(
          'Erro de validação: Verifique os dados inseridos no formulário'
        );
      }
    }
  }

  function formatCep(cep) {
    const cepFormatted = cepFormatter(cep);
    setCep(cepFormatted);
  }

  return (
    <Container>
      <Background />
      <RSide>
        <Form>
          <InputText label={'Rua'} value={street} setValue={setStreet} />
          <InputText label={'Número'} value={number} setValue={setNumber} />
          <InputText
            label={'Bairro'}
            value={neighborhood}
            setValue={setNeighborhood}
          />
          <div className="input-block">
            <InputText label={'Cidade'} value={city} setValue={setCity} />
            <SelectInput
              label={'Estado'}
              value={state}
              setValue={setState}
              options={[
                'AC',
                'AL',
                'AP',
                'AM',
                'BA',
                'CE',
                'DF',
                'ES',
                'GO',
                'MA',
                'MT',
                'MS',
                'MG',
                'PA',
                'PB',
                'PR',
                'PE',
                'PI',
                'RJ',
                'RN',
                'RS',
                'RO',
                'RR',
                'SC',
                'SP',
                'SE',
                'TO',
              ]}
            />
          </div>
          <InputText label={'CEP'} value={cep} setValue={formatCep} />
          <Button onClick={handleNext}>Próximo</Button>
        </Form>
      </RSide>
    </Container>
  );
}
