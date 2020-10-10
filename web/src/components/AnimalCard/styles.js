import styled from 'styled-components';
import { OpenInNew } from '../../styles/Icons';

export const Container = styled.div`
  width: 34rem;
  height: 14rem;
  display: flex;
  align-items: center;
  border: 0.1rem solid var(--border);
  border-radius: 0.8rem;
  padding: 0.6rem 1.2rem 0.6rem 0;
`;

export const Avatar = styled.image`
  height: 14rem;
  width: 14rem;
  background: url(${(props) => props.avatarURL}) no-repeat center;
  background-size: cover;
  flex-shrink: 0;
  margin-right: 1.8rem;
  border-radius: 0.8rem 0 0 0.8rem;
`;

export const DataInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  > span {
    > strong {
      font-size: 2.4rem;
      font-weight: 600;
      color: var(--title);
    }
    > p {
      font-size: 1.6rem;
      font-weight: 400;
      color: var(--subtext);
      line-height: 1.8rem;
    }
  }
  > a {
    align-self: flex-end;
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

export const Status = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;

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
      case 'disponível':
        return 'var(--status-available)';

      case 'indisponível':
        return 'var(--status-unavailable)';

      case 'adotado':
        return 'var(--status-adopted)';
      default:
        return 'var(--title)';
    }
  }};

  margin-right: 0.8rem;
`;

export const DetailIcon = styled(OpenInNew)`
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  fill: var(--text);

  margin-right: 0.8rem;
`;
