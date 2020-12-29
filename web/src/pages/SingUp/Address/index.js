import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import cepFormatter from '../../../utils/cepFormatter';

import { useAlert } from '../../../context/Alert';
import InputText from '../../../components/InputText';
import SelectInput from '../../../components/SelectInput';

import { Container, Background, RSide, Button, ImageCredit } from './styles';

export default function Address({ location }) {
  const history = useHistory();
  const { setAlert } = useAlert();

  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [cep, setCep] = useState('');

  async function handleNext(e) {
    try {
      e.preventDefault();
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
        setAlert({
          type: 'warning',
          message: 'Verifique os dados digitados e tente novamente',
        });
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
        <form onSubmit={handleNext}>
          <InputText
            label={'Rua'}
            value={street}
            setValue={setStreet}
            maxLength="25"
          />
          <InputText
            label={'Número'}
            value={number}
            setValue={setNumber}
            maxLength="5"
          />
          <InputText
            label={'Bairro'}
            value={neighborhood}
            setValue={setNeighborhood}
            maxLength="25"
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
            maxLength="10"
          />
          <Button type={'submit'}>Próximo</Button>
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
