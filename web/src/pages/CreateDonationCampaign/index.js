import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';
import * as Yup from 'yup';
import api from '../../services/api';

import Header from '../../components/Header';
import InputText from '../../components/InputText';
import TextAreaInput from '../../components/TextAreaInput';
import { useMenuBar } from '../../context/MenuBar';
import { useAlert } from '../../context/Alert';

import { Container, ButtonSave, SaveIcon } from './styles';

export default function CreateDonationCampaign() {
  const history = useHistory();
  const { setIsCompacted } = useMenuBar();
  const { setAlert } = useAlert();

  const [isSpinning, setIsSpinning] = useState(false);
  const [title, setTitle] = useState('');
  const [goal, setGoal] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setIsCompacted(true);
  }, [setIsCompacted]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const schema = Yup.object().shape({
        title: Yup.string().required('O titulo é obrigatório'),
        goal: Yup.string().required('A meta é obrigatória'),
        description: Yup.string().required('A descrição é obrigatória'),
      });
      const { id: userID } = JSON.parse(
        sessionStorage.getItem('@easy-adopt/user')
      );
      const campaignData = {
        title: title,
        description: description,
        goal: goal,
        collaborator_id: userID,
      };
      await schema.validate(campaignData, {
        abortEarly: false,
      });

      await api.post('/donation-campaigns', campaignData);
      setAlert('😻 Campanha criada com sucesso!');
      history.goBack();
      setIsCompacted(false);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        setAlert(
          'Erro de validação: verifique os dados inseridos no formulário'
        );
        setIsSpinning(false);
      }
    }
  }

  return (
    <Container>
      <Header title={'Nova campanha'} />

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Informações da campanha</legend>

          <div className="input-block">
            <InputText label={'Titulo'} setValue={setTitle} />
            <InputText label={'Meta'} setValue={setGoal} />
          </div>

          <TextAreaInput label={'Descrição'} setValue={setDescription} />
        </fieldset>

        {isSpinning === false ? (
          <ButtonSave>
            <SaveIcon />
            Salvar
          </ButtonSave>
        ) : (
          <MoonLoader
            className="loading"
            size={45}
            color={'#FF6DA6'}
            css={'align-self: center'}
            loading={isSpinning}
          />
        )}
      </form>
    </Container>
  );
}
