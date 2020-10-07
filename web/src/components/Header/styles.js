import styled from 'styled-components';
import { ArrowBack } from '../../styles/Icons';
import backgroundImage from '../../assets/pawBackground.svg';

export const Container = styled.div`
  background: var(--header-background);
`;

export const Topside = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;

  height: 6rem;
  background: var(--header-top-background);
`;

export const BackButton = styled.button`
  margin-left: 3rem;
  display: flex;
  align-items: center;
  padding: 0.8rem 1.2rem;

  font-size: 1.4rem;
  color: var(--white);

  cursor: pointer;
  outline: 0;
`;

export const Body = styled.div`
  height: 30rem;
  background: url(${backgroundImage}) no-repeat center;
  background-size: cover;

  display: flex;

  > h2 {
    margin: 6rem 0 0 0.8rem;
    color: var(--white);
    font-size: 3.6rem;
    font-family: 'Varela Round';
  }
`;

export const Title = styled.h1`
  margin: 6rem auto;
  max-width: 76rem;
  width: 100%;
  color: var(--white);
  font-size: 3.6rem;
  font-family: 'Varela Round';
`;

export const BackIcon = styled(ArrowBack)`
  width: 2.8rem;
  height: 2.4rem;
  fill: var(--white);
  flex-shrink: 0;
  margin-right: 0.8rem;
`;
