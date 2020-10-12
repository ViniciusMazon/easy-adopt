import styled from 'styled-components';
import { TrashAlt } from '../../../styles/Icons';

export const Container = styled.div`
  width: 18rem;
  height: 18rem;

  text-align: center;
`;

export const AddImage = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0.1rem dashed var(--dark-green);
  border-radius: 2rem;

  strong {
    width: 16rem;
    position: absolute;
    margin: 0 auto;

    font: 500 1.4rem 'Montserrat';
    color: var(--text);
  }
  input {
    height: 100%;
    width: 100%;
    opacity: 0;
    outline: 0;
    cursor: pointer;
  }
  span {
    text-align: end;
    margin-top: 120%;
    width: 100%;
    color: var(--status-unavailable);
  }
`;

export const Preview = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2rem;
  }
  button {
    margin-top: -4rem;
    min-width: 4rem;
    min-height: 4rem;

    background: var(--green);
    border-radius: 50%;

    cursor: pointer;
    outline: 0;
  }
`;

export const RemoveIcon = styled(TrashAlt)`
  width: 2rem;
  height: 2rem;
  fill: var(--border);
`;
