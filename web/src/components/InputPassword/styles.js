import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  position: relative;

  > label {
    font: 500 1.6rem 'Montserrat';
    color: var(--text);
    margin-bottom: 0.7rem;
  }
  > input {
    height: 6rem;
    width: 100%;
    padding: 2.3rem 3.8rem;
    border: 0.1rem solid var(--border);
    border-radius: 0.8rem;
    font: 1.6rem 'Montserrat';
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

  > img {
    width: 2.4rem;
    height: 2.4rem;
    position: absolute;
    right: 1.7rem;
    bottom: 1.7rem;
    stroke: 'tomato';
    cursor: pointer;
  }
`;
