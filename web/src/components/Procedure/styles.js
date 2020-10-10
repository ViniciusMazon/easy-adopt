import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border: 0.1rem solid var(--border);
  border-radius: 0.8rem;
  margin-bottom: 1.5rem;
`;

export const Topside = styled.div`
  background: var(--menu-body);
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 0.8rem 0.8rem 0 0;
  max-height: 6.7rem;
  padding: 1.4rem 1.6rem;

  > div {
    display: flex;
    flex-direction: column;
  }

  strong {
    font: 500 1.4rem 'Montserrat';
    color: var(--menu-text);
  }

  p {
    font: 400 1.4rem 'Montserrat';
    color: var(--menu-text);
  }

  p:nth-child(1) {
    margin-bottom: 0.6rem;
  }
`;

export const Body = styled.div`
  padding: 1.4rem 1.6rem;

  > strong {
    font: 500 1.4rem 'Montserrat';
    color: var(--title);
  }
  > p {
    font: 400 1.4rem 'Montserrat';
    color: var(--title);
  }
`;
