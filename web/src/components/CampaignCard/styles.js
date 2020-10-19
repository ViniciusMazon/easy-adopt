import styled from 'styled-components';
import { Close } from '../../styles/Icons';

export const Container = styled.div`
  width: 50rem;
  height: 24rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border: 0.1rem solid var(--border);
  border-radius: 0.8rem;
  padding: 2.1rem;

  > span {
    > strong {
      font: normal 2.4rem 'Varela Round';
      color: var(--title);
    }
    > p {
      font: 500 1.6rem 'Montserrat';
      color: var(--text);
      margin-top: .7rem;
    }
  }

  > p {
    font: normal 1.6rem 'Montserrat';
    color: var(--text);
  }
  > a {
    align-self: flex-end;
    display: flex;
    align-items: center;

    font-size: 1.6rem;
    font-weight: 500;
    color: var(--text);

    cursor: pointer;
    text-decoration: none;
    outline: 0;
  }
`;

export const CloseIcon = styled(Close)`
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  fill: var(--text);

  margin-right: 0.8rem;
`;
