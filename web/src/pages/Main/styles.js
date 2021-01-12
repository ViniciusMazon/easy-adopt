import styled from 'styled-components';
import { Lock } from '../../styles/Icons';

import background_dark from '../../assets/background_dark.png';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Background = styled.div`
  width: 100%;
  height: 70%;
  background: url(${background_dark}) no-repeat center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > h1 {
    max-width: 600px;
    font-family: 'Montserrat';
    font-size: 3.5rem;
    color: var(--white);
    align-self: center;
    text-align: center;
    line-height: 5rem;
    margin-bottom: 3rem;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 8rem;
`;

export const SingInButton = styled.span`
  width: 17rem;
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: .5px solid var(--white);
  border-radius: 6px;

  cursor: pointer;

  > p {
    font-family: 'Montserrat';
    font-size: 1.4rem;
    color: var(--white);
  }
`;

export const Footer = styled.footer`
  display: flex;
  width: 100%;
  height: 30%;
  justify-content: space-between;
`;

export const Feature = styled.article`
  display: flex;
  align-items: center;
  padding: 2.5rem 8rem;

  > img {
    width: 10rem;
    height: 10rem;
    flex-shrink: 0;
    margin-right: 5rem;
  }
`;

export const Description = styled.section`
  > strong {
    font-family: 'Varela Round';
    font-size: 2.4rem;
    color: var(--title);
  }
  > p {
    margin-top: 1.6rem;
    max-width: 224px;
    font-family: 'Montserrat';
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
    color: var(--text);
  }
  a {
    font-family: 'Montserrat';
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
    color: var(--link);
    text-decoration: none;
  }
`;

export const LockIcon = styled(Lock)`
  width: 1.6rem;
  height: 1.6rem;
  flex-shrink: 0;
  stroke: var(--white);
  stroke-width: 2px;
  margin-right: 0.9rem;
`;
