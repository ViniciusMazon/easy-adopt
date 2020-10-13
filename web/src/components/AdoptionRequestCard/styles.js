import styled from 'styled-components';
import { OpenInNew } from '../../styles/Icons';

export const Container = styled.div`
  width: 35rem;
  height: 28rem;

  display: flex;
  flex-direction: column;

  border: 0.1rem solid var(--border);
  border-radius: 0.8rem;
`;

export const Avatar = styled.img`
  height: 100%;
  width: 14rem;
  background: url(${(props) => props.avatarURL}) no-repeat center;
  background-size: cover;
  flex-shrink: 0;
  margin-right: 1.8rem;

  border-radius: 0 0 0 0.8rem;

  &.avatar-top {
    border-radius: 0.8rem 0 0 0;
  }
`;

export const Status = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;

  position: absolute;
  top: 0.6rem;
  right: 1.2rem;

  > p {
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--text);
  }
`;

export const StatusIndicator = styled.div`
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  background: ${(props) => {
    switch (props.status) {
      case 'aprovado':
        return 'var(--status-available)';

      case 'reprovado':
        return 'var(--status-unavailable)';

      case 'novo':
        return 'var(--status-adopted)';
      default:
        return 'var(--title)';
    }
  }};

  margin-right: 0.8rem;
`;

export const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0.6rem 1.2rem 0.6rem 0;
  position: relative;

  > strong {
    font-size: 2rem;
    font-weight: 600;
    color: var(--title);
  }
  > p {
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--subtext);
    line-height: 1.8rem;
  }
  > a {
    position: absolute;
    bottom: 0.6rem;
    right: 1.2rem;

    display: flex;
    align-items: center;

    font-size: 1.6rem;
    font-weight: 500;
    color: var(--text);

    cursor: pointer;
    text-decoration: none;
    outline: 0;
  }
`;

export const DetailIcon = styled(OpenInNew)`
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  fill: var(--text);

  margin-right: 0.8rem;
`;
