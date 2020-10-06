import styled from 'styled-components';
import { OpenInNew } from '../../styles/Icons';

export const Container = styled.div`
  width: 340px;
  height: 140px;
  display: flex;
  align-items: center;
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 6px 12px 6px 0;
`;

export const Avatar = styled.image`
  height: 140px;
  width: 140px;
  background: url(${(props) => props.avatarURL}) no-repeat center;
  background-size: cover;
  flex-shrink: 0;
  margin-right: 18px;
  border-radius: 8px 0 0 8px;
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
      font-size: 24px;
      font-weight: 600;
      color: var(--text);
    }
    > p {
      font-size: 16px;
      font-weight: 400;
      color: var(--subtext);
      line-height: 18px;
    }
  }
`;

export const Status = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;

  > p {
    font-size: 15px;
    font-weight: 500;
    color: var(--subtext);
  }
`;

export const StatusIndicator = styled.div`
  width: 14px;
  height: 14px;
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
        return 'var(--text)';
    }
  }};

  margin-right: 8px;
`;

export const DetailButton = styled.button`
  align-self: flex-end;
  display: flex;
  align-items: center;

  font-size: 16px;
  font-weight: 500;
  color: var(--subtext);

  cursor: pointer;
  outline: 0;
`;

export const DetailIcon = styled(OpenInNew)`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  fill: var(--subtext);

  margin-right: 8px;
`;
