import styled from 'styled-components';

export const Container = styled.div`
  width: 18rem;
  height: 18rem;
  border: 0.1rem dashed var(--header-top-background);
  border-radius: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  > strong {
    font: 500 1.4rem 'Montserrat';
    color: var(--subtext);
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2rem;
  }

  outline: 0;
  cursor: pointer;
`;
