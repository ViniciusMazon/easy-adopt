import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';
import { format } from 'date-fns';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import api from '../../services/api';

import { Container, ButtonSave, SaveIcon, LogoutIcon } from './styles';
import InputText from '../../components/InputText';
import { useAlert } from '../../context/Alert';
import LoadingUser from '../../components/Shimmer/LoadingUser';

export default function User() {
  const history = useHistory();
  const userRef = useRef(null);
  const { alert, setAlert } = useAlert();

  const [isLoading, setIsLoading] = useState(true);
  const [isSpinning, setIsSpinning] = useState(false);
  const [user, setUser] = useState({});
  const [accessCode, setAccessCode] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cpf, setCpf] = useState('');
  const [birthDate, setBirthDate] = useState('');

  useEffect(() => {
    if (alert === '') {
      return;
    }

    toast.success(alert);
    setAlert('');
  }, [alert, setAlert]);

  useEffect(() => {
    api.get('/collaborators/abc123').then((response) => {
      setUser(response.data);
      setIsLoading(false);
    });
  }, []);

  async function handleSubmit() {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        birth_date: Yup.string().required('A data é obrigatória'),
        email: Yup.string().required('O e-mail é obrigatório'),
        phone: Yup.string().required('O telefone é obrigatório'),
        cpf: Yup.string().required('O CPF é obrigatório'),
      });

      const splittedDate = birthDate
        ? birthDate.split('/')
        : user.birth_date.split('/');

      const userData = {
        name: name ? name : user.name,
        email: email ? email : user.email,
        phone: phone ? phone : user.phone,
        cpf: cpf ? cpf : user.cpf,
        birth_date: format(
          new Date(splittedDate[2], splittedDate[1], splittedDate[0]),
          'yyyy-MM-dd'
        ),
      };

      await schema.validate(userData, {
        abortEarly: false,
      });
      await api.put(`/collaborators/${user.id}`, userData);
      setAlert('😄 Suas informações foram alteradas com sucesso!');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        setAlert(
          'Erro de validação: verifique as informações inseridas no formulário'
        );
        setIsSpinning(false);
      }
    }
  }

  function handleLogout() {}

  function cpfFormatter(cpf) {
    if (cpf.length === 3 || cpf.length === 7) {
      setCpf(cpf + '.');
      return;
    } else if (cpf.length === 11) {
      setCpf(cpf + '-');
      return;
    }
    setCpf(cpf);
  }

  function phoneFormatter(phone) {
    if (phone.length === 1) {
      setPhone('(' + phone);
      return;
    } else if (phone.length === 3) {
      setPhone(phone + ') ');
      return;
    } else if (phone.length === 10) {
      setPhone(phone + '-');
      return;
    }
    setPhone(phone);
  }

  function birthDateFormatter(date) {
    if (date.length === 2 || date.length === 5) {
      setBirthDate(date + '/');
      return;
    }
    setBirthDate(date);
  }

  async function handleGenerateAccessCode() {
    const { data: code } = await api.post('/access-code', {
      collaborator_id: user.id,
    });
    setAccessCode(code);
  }

  return (
    <Container>
      {isLoading ? (
        <LoadingUser />
      ) : (
        <form ref={userRef} onSubmit={handleSubmit}>
          <fieldset>
            <legend>
              Configurações de usuário
              <button type="button" onClick={handleLogout}>
                <LogoutIcon />
                Sair
              </button>
            </legend>

            <InputText
              label={'Nome completo'}
              value={name}
              setValue={setName}
              placeholder={user.name}
            />

            <div className="input-block">
              <InputText
                label={'Email'}
                value={email}
                setValue={setEmail}
                placeholder={user.email}
              />

              <InputText
                label={'Celular'}
                value={phone}
                setValue={phoneFormatter}
                placeholder={user.phone}
              />
            </div>

            <div className="input-block">
              <InputText
                label={'CPF'}
                value={cpf}
                setValue={cpfFormatter}
                placeholder={user.cpf}
              />
              <InputText
                label={'Data de nascimento'}
                value={birthDate}
                setValue={birthDateFormatter}
                placeholder={user.birth_date}
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>Gerar um código de acesso</legend>
            <div className="generate-code">
              <InputText
                label={'Novo código de acesso'}
                value={accessCode}
                readonly
                className="input-custom"
              />
              <button type="button" onClick={handleGenerateAccessCode}>
                Gerar
              </button>
            </div>
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
      )}
    </Container>
  );
}
