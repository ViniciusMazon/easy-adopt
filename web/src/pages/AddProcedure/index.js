import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { format } from 'date-fns';
import api from '../../services/api';

import Header from '../../components/Header';
import { Input, TextArea } from '../../components/Form';
import { useMenuBar } from '../../context/MenuBar';
import { useUser } from '../../context/User';
import { useAlert } from '../../context/Alert';

import { Container, ButtonSave, SaveIcon } from './styles';

export default function AddProcedure() {
  const procedureRef = useRef(null);
  const history = useHistory();
  const params = useParams();

  const { setIsCompacted } = useMenuBar();
  const { setAlert } = useAlert();
  const { user } = useUser();

  const [now, setNow] = useState();

  useEffect(() => {
    setIsCompacted(true);
    const now = format(new Date(), 'dd/MM/yyyy');
    setNow(now);
    procedureRef.current.setData({
      name: params.animal_name,
      date: now,
    });
  }, [history.animalName, params.animal_name, setIsCompacted]);

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O procedimento é obrigatório'),
        comments: Yup.string().required('O comentário é obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const procedureData = {
        animal_id: params.id,
        date: format(new Date(), 'yyyy/MM/dd'),
        name: data.name,
        comments: data.comments,
        collaborator_id: user.id,
      };

      await api.post('/procedures', procedureData);

      procedureRef.current.setErrors({});
      setAlert('😻 Procedimento criado com sucesso!');
      history.goBack();
      setIsCompacted(false);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });

        procedureRef.current.setErrors(errorMessages);
      }
    }
  }

  return (
    <Container>
      <Header title={'Cadastrar novo procedimento'} />

      <Form ref={procedureRef} onSubmit={handleSubmit}>
        <fieldset>
          <legend>Procedimento</legend>

          <div className="input-block">
            <Input name="name" label="Nome do animal" readOnly />
            <Input name="date" label="Data" readOnly />
          </div>

          <Input name="name" label="Nome do procedimento" />
          <TextArea name="comments" label="Comentários" />
        </fieldset>

        <ButtonSave>
          <SaveIcon />
          Salvar
        </ButtonSave>
      </Form>
    </Container>
  );
}
