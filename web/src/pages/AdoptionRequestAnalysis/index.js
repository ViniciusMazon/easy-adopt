import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';
import api from '../../services/api';

import {
  Container,
  Main,
  Data,
  Avatar,
  Info,
  Answer,
  ButtonGroup,
  Button,
  RejectIcon,
  ApproveIcon,
} from './styles';

import Header from '../../components/Header';
import { useMenuBar } from '../../context/MenuBar';
import { useAlert } from '../../context/Alert';
import { useUser } from '../../context/User';

import LoadingAdoptionRequestAnalysisMain from '../../components/Shimmer/LoadingAdoptionRequestAnalysisMain';

export default function AdoptionRequestAnalysis() {
  const params = useParams();
  const history = useHistory();
  const { setIsCompacted } = useMenuBar();
  const { setAlert } = useAlert();
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(true);
  const [isSpinning, setIsSpinning] = useState(false);

  const [animal, setAnimal] = useState({});
  const [tutor, setTutor] = useState({});
  const [request, setRequest] = useState({});

  useEffect(() => {
    setIsCompacted(true);
  }, [setIsCompacted]);

  useEffect(() => {
    setIsLoading(false);
    api.get(`/adoption-request/${params.id}`).then((response) => {
      setRequest(response.data.request);
      setAnimal(response.data.animal);
      setTutor(response.data.tutor);
    });
  }, [params.id]);

  async function handleEvaluate(status) {
    setIsSpinning(true);

    const evaluate = {
      collaborator_id: user.id,
      status,
    };

    await api.put(`/adoption-request/${request.id}`, evaluate);
    setAlert({
      type: 'info',
      message: `📄 Pedido de adoção ${status}`,
    });
    history.push('/adoption');
    setIsCompacted(false);
  }

  return (
    <Container>
      <Header title={'Pedido de adoção'} />
      {isLoading ? (
        <LoadingAdoptionRequestAnalysisMain />
      ) : (
        <Main>
          <fieldset>
            <legend>Sobre o animal</legend>
            <Data>
              <Avatar avatarURL={animal.avatar} />

              <Info>
                <Answer>
                  <strong>Nome</strong>
                  <p>{animal.name}</p>
                </Answer>

                <div className="answer-block">
                  <Answer>
                    <strong>Espécie</strong>
                    <p>{animal.specie}</p>
                  </Answer>
                  <Answer>
                    <strong>Idade</strong>
                    <p>{animal.age}</p>
                  </Answer>
                </div>

                <div className="answer-block">
                  <Answer>
                    <strong>Gênero</strong>
                    <p>{animal.gender}</p>
                  </Answer>
                  <Answer>
                    <strong>Porte</strong>
                    <p>{animal.size}</p>
                  </Answer>
                </div>
              </Info>
            </Data>
          </fieldset>

          <fieldset>
            <legend>Sobre o tutor</legend>
            <Data>
              <Avatar avatarURL={tutor.avatar} />

              <Info>
                <Answer>
                  <strong>Nome</strong>
                  <p>{tutor.name}</p>
                </Answer>

                <Answer>
                  <strong>E-mail</strong>
                  <p>{tutor.email}</p>
                </Answer>

                <div className="answer-block">
                  <Answer>
                    <strong>Data de nascimento</strong>
                    <p>{tutor.birth_date}</p>
                  </Answer>
                  <Answer>
                    <strong>Celular</strong>
                    <p>{tutor.phone}</p>
                  </Answer>
                </div>

                <Answer>
                  <strong>Endereço</strong>
                  <p>{tutor.address}</p>
                </Answer>
              </Info>
            </Data>
          </fieldset>

          <fieldset>
            <legend>Sobre a residência</legend>
            <Data>
              <Info>
                <div className="answer-block">
                  <Answer>
                    <strong>Tipo de residência</strong>
                    <p>{request.residence_type}</p>
                  </Answer>
                  <Answer>
                    <strong>Número de adultos na residência</strong>
                    <p>{request.adults_home}</p>
                  </Answer>
                </div>

                <div className="answer-block">
                  <Answer>
                    <strong>Número de crianças na residência</strong>
                    <p>{request.children_home}</p>
                  </Answer>
                  <Answer>
                    <strong>Possui fumantes em casa</strong>
                    <p>{request.smokers_home}</p>
                  </Answer>
                </div>
              </Info>
            </Data>
          </fieldset>

          <fieldset>
            <legend>Sobre o histórico</legend>
            <Data>
              <Info>
                <div className="answer-block">
                  <Answer>
                    <strong>Já adotou algum animal antes?</strong>
                    <p>{request.adopted_before}</p>
                  </Answer>
                  <Answer>
                    <strong>Possui outros animais em casa?</strong>
                    <p>{request.other_animals}</p>
                  </Answer>
                </div>

                <div className="answer-block">
                  <Answer>
                    <strong>
                      Possui animais que ficaram doentes nos ultimos meses?
                    </strong>
                    <p>{request.sick_animals}</p>
                  </Answer>
                  <Answer>
                    <strong>
                      Você esta ciente que terá que adicionar custos como
                      alimentação, vacinas e veterinário ao seu orçamento?
                    </strong>
                    <p>{request.aware_cost}</p>
                  </Answer>
                </div>

                <Answer>
                  <strong>Por quê você quer adotar esse animal?</strong>
                  <p>{request.why_want_adopt}</p>
                </Answer>
              </Info>
            </Data>
          </fieldset>

          <MoonLoader
            className="loading"
            size={45}
            color={'#FF6DA6'}
            css={'align-self: center'}
            loading={isSpinning}
          />

          {request.status === 'novo' && isSpinning === false ? (
            <ButtonGroup>
              <Button onClick={() => handleEvaluate('reprovado')} type="button">
                <RejectIcon />
                Reprovar
              </Button>

              <Button
                onClick={() => handleEvaluate('aprovado')}
                type="button"
                className="approve-btn"
              >
                <ApproveIcon />
                Aprovar
              </Button>
            </ButtonGroup>
          ) : null}
        </Main>
      )}
    </Container>
  );
}
