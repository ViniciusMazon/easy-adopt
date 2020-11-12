import styled from 'styled-components';
import { DownloadOutline } from '../../styles/Icons';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const Wrapper = styled.div`
  margin-top: 12.6rem;
  width: 60rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: var(--white);
  border: 0.1rem solid var(--border);
  border-radius: 0.8rem;

  padding: 4rem;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  > label {
    font: 2.4rem 'Varela Round';
    color: var(--title);
    margin-bottom: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 1.6rem;
    border-bottom: 0.1rem solid var(--title);
  }

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      max-width: 28rem;
      font: normal 1.6rem 'Montserrat';
      color: var(--text);
    }

    a {
      width: 16rem;
      height: 5rem;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 0.8rem;
      background: var(--green);
      text-decoration: none;

      font: 500 1.6rem 'Montserrat';
      color: var(--white);

      outline: 0;
      cursor: pointer;
      transition: background 0.2s;

      &:hover {
        background: var(--dark-green);
      }
    }
  }
`;

export const DownloadIcon = styled(DownloadOutline)`
  width: 2rem;
  height: 2rem;
  fill: var(--white);
  flex-shrink: 0;

  margin-right: 0.8rem;
`;
