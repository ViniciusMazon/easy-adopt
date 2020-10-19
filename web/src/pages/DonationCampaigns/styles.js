import styled from 'styled-components';
import { Plus } from '../../styles/Icons';

export const Container = styled.div`
  width: 100%;
  max-width: 1480px;
  height: 100%;
  margin: 0 auto;
`;

export const Header = styled.div`
  margin-top: 6.3rem;
  display: flex;
  justify-content: space-between;

  > a {
    margin-left: 9rem;
    display: flex;
    align-items: center;
    text-decoration: none;

    > p {
      font-size: 1.6rem;
      font-weight: 500;
      color: var(--link);
      margin-left: 0.4rem;
    }
  }
`;

export const CampaignsCards = styled.div`
  padding: 5rem 5rem 0 5rem;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  > div {
    margin-bottom: 3.5rem;
    margin-left: 4.5rem;
  }
`;

export const PlusIcon = styled(Plus)`
  width: 2.8rem;
  height: 2.8rem;
  flex-shrink: 0;
  fill: var(--link);
`;
