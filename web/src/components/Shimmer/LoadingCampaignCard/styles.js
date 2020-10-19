import styled from 'styled-components';

export const Container = styled.div`
  width: 50rem;
  height: 24rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border: 0.1rem solid var(--border);
  border-radius: 0.8rem;
  padding: 2.1rem;

  > span {
    .title-skeleton {
      width: 90%;
      height: 3rem;
      margin-bottom: .4rem;
    }
    .goal-skeleton {
      width: 60%;
      height: 2rem;
    }
  }

  .description-skeleton {
    width: 90%;
    height: 8rem;
  }
  .link-skeleton {
    align-self: flex-end;
    width: 9.6rem;
    height: 1.9rem;
  }
`;
