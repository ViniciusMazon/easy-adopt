import styled from 'styled-components';
import { CheckSquare } from '../../styles/Icons';

import backgroundImage from '../../assets/background-success.svg';

export const Container = styled.div`
  background: linear-gradient(49.64deg, #f86b64 -8%, #fa5293 99.92%);
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 36rem;
  height: 64rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: url(${backgroundImage}) no-repeat center;
  background-size: cover;

  > h1 {
    font: normal 2.4rem 'Varela Round';
    color: #fff;

    margin-bottom: 1.1rem;
  }
  > h2 {
    font: normal 1.6rem 'Montserrat';
    line-height: 2.5rem;
    text-align: center;
    color: #fff;
  }
`;

export const SuccessIcon = styled(CheckSquare)`
  width: 6rem;
  height: 6rem;
  flex-shrink: 0;
  stroke: #fff;

  margin-bottom: 5rem;
`;
