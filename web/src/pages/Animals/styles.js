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
  margin-top: 6.3rem;
  display: flex;
  justify-content: space-between;

  > a {
    margin-left: 9.0rem;
    display: flex;
    align-items: center;
    text-decoration: none;

    > p {
      font-size: 1.6rem;
      font-weight: 500;
      color: var(--link);
      margin-left: .4rem;
    }
  }
`;

export const SearchBox = styled.form`
  margin-right: 9.0rem;
  display: flex;
  align-items: center;

  > input {
    outline: 0;
  }

  border: .1rem solid var(--border);
  border-radius: .6rem;
  background: var(--input-background);
  padding: 2.0rem 3.0rem;
`;

export const AnimalsCards = styled.main`
  padding: 5.0rem 5.0rem 0 5.0rem;
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

export const SearchIcon = styled(Search)`
  width: 2.0rem;
  height: 2.0rem;
  flex-shrink: 0;
  fill: var(--subtext);
`;
