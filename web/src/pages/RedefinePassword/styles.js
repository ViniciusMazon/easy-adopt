import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: var(--input-background);

  > img {
    width: 20rem;
    margin-bottom: 5rem;
  }

  div + div {
    margin-top: 2rem;
  }
`;

export const Button = styled.button`
  width: 28.8rem;
  height: 6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.8rem;
  background: var(--link);

  font: 500 1.6rem 'Montserrat';
  color: var(--white);
  margin-top: 4rem;
  margin-bottom: 2.4rem;

  outline: 0;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: var(--status-adopted);
  }
`;
