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
        street: Yup.string().required().min(3).max(25),
        number: Yup.string().required().min(1).max(5),
        neighborhood: Yup.string().required().min(3).max(25),
        city: Yup.string().required().min(3).max(25),
        state: Yup.string().required().min(2).max(2),
        cep: Yup.string().required().min(10).max(10),
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

      const collaboratorData = location.state.collaboratorData;
      const access_code = location.state.access_code;

      history.push(`/singup-credentials`, {
        collaboratorData,
        addressData,
        access_code,
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
          <InputText
            label={'Rua'}
            value={street}
            setValue={setStreet}
            maxlength="25"
          />
          <InputText
            label={'Número'}
            value={number}
            setValue={setNumber}
            maxlength="5"
          />
          <InputText
            label={'Bairro'}
            value={neighborhood}
            setValue={setNeighborhood}
            maxlength="25"
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
          <InputText
            label={'CEP'}
            value={cep}
            setValue={formatCep}
            maxlength="10"
          />
          <Button onClick={handleNext}>Próximo</Button>
        </Form>
      </RSide>
    </Container>
  );
}
