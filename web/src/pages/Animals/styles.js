import styled from 'styled-components';
import { Plus, Search } from '../../styles/Icons';

export const Container = styled.div`
  width: 100%;
  max-width: 1480px;
  /* max-width: 1250px; */
  height: 100%;
  margin: 0 auto;
`;

export const Header = styled.div`
  margin-top: 63px;
  display: flex;
  justify-content: space-between;

  > a {
    margin-left: 90px;
    display: flex;
    align-items: center;
    text-decoration: none;

    > p {
      font-size: 16px;
      font-weight: 500;
      color: var(--link);
      margin-left: 4px;
    }
  }
`;

export const SearchBox = styled.form`
  margin-right: 90px;
  display: flex;
  align-items: center;

  > input {
    outline: 0;
  }

  border: 1px solid var(--border);
  border-radius: 6px;
  background: var(--input-background);
  padding: 20px 30px;
`;

export const AnimalsCards = styled.main`
  padding: 50px 50px 0 50px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  > div {
    margin-bottom: 35px;
    margin-left: 45px;
  }
`;

export const PlusIcon = styled(Plus)`
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  fill: var(--link);
`;

export const SearchIcon = styled(Search)`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  fill: var(--subtext);
`;
