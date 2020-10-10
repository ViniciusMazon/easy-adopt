import styled from 'styled-components';

export const Container = styled.div`
  width: 18rem;
  height: 18rem;
  border: 0.1rem dashed var(--dark-green);
  border-radius: 2rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 1.6rem;
  strong {
    width: 16rem;
    font: 500 1.4rem 'Montserrat';
    color: var(--gray);
    position: absolute;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2rem;
  }
  input {
    height: 100%;
    width: 100%;
    opacity: 0;
    outline: 0;
    cursor: pointer;
    z-index: 999;
  }
  span {
    text-align: end;
    margin-top: 120%;
    width: 100%;
    color: var(--red);
  }
`;
