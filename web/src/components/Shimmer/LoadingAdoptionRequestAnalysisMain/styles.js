import styled from 'styled-components';

export const Main = styled.div`
  width: 100%;
  max-width: 76rem;
  background: var(--white);
  border: 0.1rem solid var(--border);
  border-radius: 0.8rem;

  margin: -8rem auto 3.2rem;
  padding: 5rem 6rem;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  fieldset + fieldset {
    margin-top: 6rem;
  }

  .legend-skeleton {
    margin-bottom: 2.4rem;
    width: 100%;
    height: 2.9rem;
  }
`;

export const Data = styled.div`
  display: flex;
  align-items: center;

  .avatar-skeleton {
    width: 15rem;
    height: 15rem;
    border-radius: 2rem;
    flex-shrink: 0;
    margin-right: 7.5rem;
  }
`;

export const Info = styled.div`
  width: 100%;

  .answer-block {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      width: 48%;
    }
  }
`;

export const Answer = styled.div`
  width: 100%;
  margin-bottom: 2.6rem;

  .question-skeleton {
    width: 6.9rem;
    height: 2rem;
    margin-bottom: 1.2rem;
  }
  .answer-skeleton {
    width: 14rem;
    height: 3rem;
    margin-bottom: 0.4rem;
  }
`;

export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  div + div {
    margin-left: 2.4rem;
  }

  .button-skeleton {
    width: 16rem;
    height: 5rem;
    align-self: flex-end;
    border-radius: 0.8rem;
    margin-top: 6rem;
  }
`;
