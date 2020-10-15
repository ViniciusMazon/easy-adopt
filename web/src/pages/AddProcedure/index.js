import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { format } from 'date-fns';

import Header from '../../components/Header';
import { Input, TextArea } from '../../components/Form';
import { useMenuBar } from '../../context/MenuBar';
import { useAnimals } from '../../context/Animals';
import { useUser } from '../../context/User';
import { useProcedures } from '../../context/Procedures';
import { useAlert } from '../../context/Alert';

import { Container, ButtonSave, SaveIcon } from './styles';

export default function AddProcedure() {
  const procedureRef = useRef(null);
  const history = useHistory();
  const params = useParams();

  const { animals } = useAnimals();
  const { user } = useUser();
  const { setIsCompacted } = useMenuBar();
  const { procedures, setProcedures } = useProcedures();
  const { setAlert } = useAlert();

  const [animal, setAnimal] = useState({});
  const [now, setNow] = useState();

  useEffect(() => {
    const [animalSelected] = animals.filter((item) => {
      if (item.id === Number(params.id)) {
        return item;
      }
    });

    setIsCompacted(true);
    setAnimal(animalSelected);

    const now = format(new Date(), 'dd/MM/yyyy');
    setNow(now);

    procedureRef.current.setData({
      name: animalSelected.name,
      date: now,
    });
  }, [animals, params.id, setIsCompacted]);

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        procedure: Yup.string().required('O procedimento é obrigatório'),
        comments: Yup.string().required('O comentário é obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const procedureData = {
        animal_id: animal.id,
        animal_name: animal.name,
        date: now,
        procedure: data.procedure,
        comments: data.comments,
        user_id: user.id,
        user_name: user.name,
      };
      setProcedures([...procedures, procedureData]);

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
            <Input name="name" label="Nome do animal" readonly="true" />
            <Input name="date" label="Data" readonly="true" />
          </div>

          <Input name="procedure" label="Procedimento" />
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
