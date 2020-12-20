import styled from 'styled-components';

import backgroundImage from '../../assets/background.png';
import logoImage from '../../assets/logo.svg';

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
  justify-content: center;

  > form {
    width: 33.3rem;

    display: flex;
    flex-direction: column;

    > a {
      color: var(--text);
      font: 1.6rem 'Montserrat';
      text-decoration: none;
      cursor: pointer;
      align-self: center;

      > strong {
        color: var(--link);
        font-weight: 700;
      }
    }
  }
`;

export const Logo = styled.div`
  width: 24.6rem;
  height: 18rem;
  background: url(${logoImage}) no-repeat center;
  background-size: cover;

  margin-bottom: 12.8rem;
`;

export const Button = styled.button.attrs((props) => ({
  type: 'submit',
}))`
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
  margin-top: 4rem;
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
