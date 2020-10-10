import styled from 'styled-components';
import { Save } from '../../styles/Icons';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  > form {
    width: 100%;
    background: var(--white);
    max-width: 76rem;
    border: 0.1rem solid var(--border);
    border-radius: 0.8rem;

    margin: -8rem auto 3.2rem;
    padding: 5rem 6rem;
    overflow: hidden;

    display: flex;
    flex-direction: column;

    fieldset {
      span + span {
        margin-top: 2.7rem;
      }
    }

    > fieldset legend {
      font: 2.4rem 'Varela Round';
      color: var(--title);
      margin-bottom: 2.4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding-bottom: 1.6rem;
      border-bottom: 0.1rem solid var(--title);

      > button {
        font: 500 1.6rem 'Montserrat';
        color: var(--link);

        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;
        outline: 0;
      }
    }

    fieldset + fieldset {
      margin-top: 6rem;
    }

    .input-block {
      margin-top: 1.6rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      > div {
        width: 48%;
      }
    }
  }
`;

export const ButtonSave = styled.button`
  width: 16rem;
  height: 5rem;
  align-self: flex-end;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.8rem;
  background: var(--green);

  font: 500 1.6rem 'Montserrat';
  color: var(--white);
  margin-top: 6rem;

  outline: 0;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: var(--dark-green);
  }
`;

export const SaveIcon = styled(Save)`
  width: 2rem;
  height: 2rem;
  stroke: var(--white);
  flex-shrink: 0;

  margin-right: 0.8rem;
`;

