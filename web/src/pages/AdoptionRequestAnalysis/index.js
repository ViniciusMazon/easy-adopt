import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

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
import { useAdoptionRequests } from '../../context/AdoptionRequests';

export default function AdoptionRequestAnalysis() {
  const params = useParams();
  const history = useHistory();
  const { setIsCompacted } = useMenuBar();
  const { setAlert } = useAlert();
  const { adoptionRequests, setAdoptionRequests } = useAdoptionRequests();
  const [status, setStatus] = useState('');
  const [animal, setAnimal] = useState();
  const [tutor, setTutor] = useState();
  const [questionnaire, setQuestionnaire] = useState({});

  useEffect(() => {
    setIsCompacted(true);

    adoptionRequests.filter((item) => {
      if (item.id === Number(params.id)) {
        setStatus(item.status);
        setAnimal(item.animal);
        setTutor(item.tutor);
        setQuestionnaire(item.questionnaire);
      }
    });
  }, [adoptionRequests, animal, params.id, setIsCompacted]);

  function handleEvaluate(status) {
    const newAdoptionRequests = adoptionRequests.map((request) => {
      if (request.id === Number(params.id)) {
        request.status = status;
        return request;
      }
      return request;
    });
    setAdoptionRequests(newAdoptionRequests);
    setAlert(`📄 Pedido de adoção ${status}`);
    history.push('/adoption');
    setIsCompacted(false);
  }

  if (!animal) {
    return <h1>Carregando</h1>;
  }

  return (
    <Container>
      <Header title={'Pedido de adoção'} />
      <Main>
        <fieldset>
          <legend>Sobre o animal</legend>
          <Data>
            <Avatar avatarURL={animal.avatar_url} />

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
            <Avatar avatarURL={tutor.avatar_url} />

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
                <p>{`${tutor.address.street}, ${tutor.address.number}, ${tutor.address.neighborhood} - ${tutor.address.city}/${tutor.address.state}`}</p>
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
                  <p>{questionnaire.residence_type}</p>
                </Answer>
                <Answer>
                  <strong>Número de adultos na residência</strong>
                  <p>{questionnaire.adults_home}</p>
                </Answer>
              </div>

              <div className="answer-block">
                <Answer>
                  <strong>Número de crianças na residência</strong>
                  <p>{questionnaire.children_home}</p>
                </Answer>
                <Answer>
                  <strong>Possui fumantes em casa</strong>
                  <p>{questionnaire.smokers_home}</p>
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
                  <p>{questionnaire.adopted_before}</p>
                </Answer>
                <Answer>
                  <strong>Possui outros animais em casa?</strong>
                  <p>{questionnaire.other_animals}</p>
                </Answer>
              </div>

              <div className="answer-block">
                <Answer>
                  <strong>
                    Possui animais que ficaram doentes nos ultimos meses?
                  </strong>
                  <p>{questionnaire.sick_animals}</p>
                </Answer>
                <Answer>
                  <strong>
                    Você esta ciente que terá que adicionar custos como
                    alimentação, vacinas e veterinário ao seu orçamento?
                  </strong>
                  <p>{questionnaire.aware_cost}</p>
                </Answer>
              </div>

              <Answer>
                <strong>Por quê você quer adotar esse animal?</strong>
                <p>{questionnaire.why_want_adopt}</p>
              </Answer>
            </Info>
          </Data>
        </fieldset>

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
      </Main>
    </Container>
  );
}
