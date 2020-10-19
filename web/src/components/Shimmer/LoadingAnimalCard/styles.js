import styled from 'styled-components';

export const Container = styled.div`
  width: 34rem;
  height: 14rem;
  display: flex;
  align-items: center;
  border: 0.1rem solid var(--border);
  border-radius: 0.8rem;
  padding: 0.6rem 1.2rem 0.6rem 0;

  .avatar-skeleton {
    height: 14rem;
    width: 14rem;
    margin-right: 1.8rem;
    border-radius: 0.8rem 0 0 0.8rem;
  }
`;

export const DataInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  .status-skeleton {
    align-self: flex-end;
    width: 9.6rem;
    height: 1.9rem;
  }
  > span {
    .title-skeleton {
      width: 9.2rem;
      height: 3rem;
      margin-bottom: .4rem;
    }
    .subtitle-skeleton {
      width: 6.9rem;
      height: 2rem;
    }
  }

  .link-skeleton {
    align-self: flex-end;
    width: 9.6rem;
    height: 1.9rem;
  }
`;
