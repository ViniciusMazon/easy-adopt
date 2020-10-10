import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  > label {
    font: 500 1.6rem 'Montserrat';
    color: var(--text);
    margin-bottom: 0.7rem;
  }
  > select {
    height: 6rem;
    width: 100%;
    padding: 1.3rem 3.8rem;
    border: 0.1rem solid var(--border);
    border-radius: 0.8rem;
    outline: 0;
    &:focus {
      border-color: var(--green);
    }
  }
  > span {
    text-align: end;
    margin-top: 0.5rem;
    width: 100%;
    color: var(--status-unavailable);
  }
`;
