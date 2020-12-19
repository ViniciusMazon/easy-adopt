import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';
import * as Yup from 'yup';
import { format } from 'date-fns';
import api from '../../services/api';

import Header from '../../components/Header';
import TextAreaInput from '../../components/TextAreaInput';
import InputText from '../../components/InputText';
import { useMenuBar } from '../../context/MenuBar';
import { useUser } from '../../context/User';
import { useAlert } from '../../context/Alert';

import { Container, ButtonSave, SaveIcon } from './styles';

export default function AddProcedure() {
  const history = useHistory();
  const params = useParams();

  const { setIsCompacted } = useMenuBar();
  const { setAlert } = useAlert();
  const { user } = useUser();

  const [isSpinning, setIsSpinning] = useState(false);
  const date = format(new Date(), 'dd/MM/yyyy');
  const [name, setName] = useState('');
  const [comments, setComments] = useState('');

  useEffect(() => {
    setIsCompacted(true);
  }, [setIsCompacted]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O procedimento é obrigatório'),
        comments: Yup.string().required('O comentário é obrigatório'),
      });

      const procedureData = {
        animal_id: params.id,
        name: name,
        comments: comments,
        collaborator_id: user.id,
      };

      await schema.validate(procedureData, {
        abortEarly: false,
      });

      await api.post('/procedures', procedureData);

      setAlert({
        type: 'success',
        message: '😻 Procedimento criado com sucesso!',
      });
      history.goBack();
      setIsCompacted(false);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        setAlert({
          type: 'error',
          message: 'Verifique os dados inseridos e tente novamente',
        });
        setIsSpinning(false);
      }
    }
  }

  return (
    <Container>
      <Header title={'Cadastrar novo procedimento'} />

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Procedimento</legend>

          <div className="input-block">
            <InputText
              label={'Nome do animal'}
              value={params.animal_name}
              readOnly
            />
            <InputText label={'Data'} value={date} readOnly />
          </div>
          <InputText label={'Nome do procedimento'} setValue={setName} />
          <TextAreaInput label={'Comentários'} setValue={setComments} />
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
