import styled from 'styled-components';
import { ArrowBack } from '../../styles/Icons';

import backgroundImage from '../../assets/background.png';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Background = styled.div`
  width: 55%;
  height: 100%;
  background: url(${backgroundImage}) no-repeat center;
  background-size: cover;
`;

export const RSide = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;
export const BackButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.8rem 1.2rem;

  font-size: 1.4rem;
  color: var(--link);

  cursor: pointer;
  outline: 0;
  position: absolute;
  top: 0;
  left: 55.5%;
  margin-top: 2rem;
`;

export const BackIcon = styled(ArrowBack)`
  width: 2.8rem;
  height: 2.4rem;
  fill: var(--link);
  flex-shrink: 0;
  margin-right: 0.8rem;
`;

export const Form = styled.div`
  width: 33.3rem;

  display: flex;
  flex-direction: column;
  margin-bottom: 19rem;
`;

export const Button = styled.button`
  width: 33.3rem;
  height: 6rem;
  align-self: flex-end;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.8rem;
  background: var(--green);

  font: 500 1.6rem 'Montserrat';
  color: var(--white);
  margin-top: 2rem;
  margin-bottom: 2.4rem;

  outline: 0;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: var(--dark-green);
  }
`;

export const ImageCredit = styled.span`
  position: absolute;
  bottom: 2rem;
  left: 23%;
  color: #fff;
  font: 1.6rem bold 'Montserrat';
  > a {
    color: #fff;
  }
`;
