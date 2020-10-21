import styled from 'styled-components';
import { Save, LogOut } from '../../styles/Icons';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  > form {
    width: 100%;
    background: var(--white);
    max-width: 76rem;
    border: 0.1rem solid var(--border);
    border-radius: 0.8rem;

    margin: 12.6rem auto 3.2rem;
    padding: 5rem 6rem;
    overflow: hidden;

    display: flex;
    flex-direction: column;

    fieldset {
      span + span {
        margin-top: 2.7rem;
      }

      .input-custom {
        border-radius: 0.8rem 0 0 0.8rem;
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
      margin-top: 3rem;
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

    .generate-code {
      margin-top: 1.6rem;
      display: flex;
      align-items: center;

      > div {
        width: 48%;
      }
      > button {
        margin-bottom: -.5rem;
        width: 8.5rem;
        height: 6rem;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 0 0.8rem 0.8rem 0;
        background: var(--green);

        font: 500 1.6rem 'Montserrat';
        color: var(--white);

        outline: 0;
        cursor: pointer;
        transition: background 0.2s;

        &:hover {
          background: var(--dark-green);
        }
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
  margin-top: 2rem;

  outline: 0;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: var(--dark-green);
  }
`;

export const LogoutIcon = styled(LogOut)`
  width: 2rem;
  height: 2rem;
  stroke: var(--link);
  flex-shrink: 0;

  margin-right: 0.8rem;
`;

export const SaveIcon = styled(Save)`
  width: 2rem;
  height: 2rem;
  stroke: var(--white);
  flex-shrink: 0;

  margin-right: 0.8rem;
`;
