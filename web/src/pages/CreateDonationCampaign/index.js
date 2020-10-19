import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { format } from 'date-fns';

import Header from '../../components/Header';
import { Input, TextArea } from '../../components/Form';
import { useMenuBar } from '../../context/MenuBar';
import { useAlert } from '../../context/Alert';
import { useDonationCampaigns } from '../../context/DonationCampaigns';

import { Container, ButtonSave, SaveIcon } from './styles';

export default function CreateDonationCampaign() {
  const campaignRef = useRef(null);
  const history = useHistory();
  const { campaigns, setCampaigns } = useDonationCampaigns();
  const { setIsCompacted } = useMenuBar();
  const { setAlert } = useAlert();

  useEffect(() => {
    setIsCompacted(true);
  }, [setIsCompacted]);

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        title: Yup.string().required('O titulo é obrigatório'),
        goal: Yup.string().required('A meta é obrigatória'),
        description: Yup.string().required('A descrição é obrigatória'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });

      const campaignData = {
        id: 3,
        title: data.title,
        goal: data.goal,
        current: 0.0,
        description: data.description,
        date: format(new Date(), 'dd/MM/yyyy'),
        collaborator_id: 1,
      };

      setCampaigns([...campaigns, campaignData]);
      campaignRef.current.setErrors({});
      setAlert('😻 Campanha criada com sucesso!');
      history.goBack();
      setIsCompacted(false);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};
        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });
        campaignRef.current.setErrors(errorMessages);
      }
    }
  }

  return (
    <Container>
      <Header title={'Nova campanha'} />

      <Form ref={campaignRef} onSubmit={handleSubmit}>
        <fieldset>
          <legend>Informações da campanha</legend>

          <div className="input-block">
            <Input name="title" label="Titulo" />
            <Input name="goal" label="Meta" />
          </div>

          <TextArea name="description" label="Descrição" />
        </fieldset>

        <ButtonSave>
          <SaveIcon />
          Salvar
        </ButtonSave>
      </Form>
    </Container>
  );
}
