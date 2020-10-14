import styled, { css } from 'styled-components';
import { Close, Check } from '../../styles/Icons';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Main = styled.div`
  width: 100%;
  max-width: 76rem;
  background: var(--white);
  border: 0.1rem solid var(--border);
  border-radius: 0.8rem;

  margin: -8rem auto 3.2rem;
  padding: 5rem 6rem;
  overflow: hidden;

  display: flex;
  flex-direction: column;

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
  }

  fieldset + fieldset {
    margin-top: 6rem;
  }
`;

export const Data = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 2rem;
  background: url(${(props) => props.avatarURL}) no-repeat center;
  background-size: cover;
  flex-shrink: 0;
  margin-right: 7.5rem;
`;

export const Info = styled.div`
  width: 100%;

  .answer-block {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      width: 48%;
    }
  }
`;

export const Answer = styled.div`
  width: 100%;
  margin-bottom: 2.6rem;

  > strong {
    font: 600 1.4rem 'Montserrat';
    color: var(--text);
    line-height: 2.5rem;
  }
  > p {
    font: 500 1.6rem 'Montserrat';
    color: var(--title);
  }
`;

export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  button + button {
    margin-left: 2.4rem;
  }
`;

export const Button = styled.button`
  width: 16rem;
  height: 5rem;
  align-self: flex-end;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.8rem;
  background: var(--red);

  font: 500 1.6rem 'Montserrat';
  color: var(--white);
  margin-top: 6rem;

  outline: 0;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: var(--dark-red);
  }

  &.approve-btn {
    background: var(--green);

    &:hover {
      background: var(--dark-green);
    }
  }
`;

const iconCSS = css`
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;

  margin-right: 0.8rem;
`;

export const RejectIcon = styled(Close)`
  ${iconCSS}
  fill: var(--white);
`;

export const ApproveIcon = styled(Check)`
  ${iconCSS}
  stroke: var(--white);
`;
