import styled from 'styled-components';

export const Container = styled.div`
  width: 40rem;
  height: 28rem;
  display: flex;
  flex-direction: column;
  border: 0.1rem solid var(--border);
  border-radius: 0.8rem;
`;

export const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  .avatar-skeleton {
    height: 100%;
    width: 14rem;
    flex-shrink: 0;
    margin-right: 1.8rem;
    border-radius: 0 0 0 0.8rem;
  }
  .avatar-top {
    border-radius: 0.8rem 0 0 0;
  }
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0.6rem 1.2rem 0.6rem 0;
  position: relative;

  .status-skeleton {
    width: 9.6rem;
    height: 1.4rem;
    align-self: flex-end;

    position: absolute;
    top: 0.6rem;
    right: 1.2rem;
  }
  .title-skeleton {
    width: 9.2rem;
    height: 3rem;
    margin-bottom: 0.4rem;
  }
  .subtitle-skeleton {
    width: 6.9rem;
    height: 2rem;
  }
  .link-skeleton {
    align-self: flex-end;
    width: 9.6rem;
    height: 1.9rem;

    position: absolute;
    bottom: 0.6rem;
    right: 1.2rem;
  }
`;
