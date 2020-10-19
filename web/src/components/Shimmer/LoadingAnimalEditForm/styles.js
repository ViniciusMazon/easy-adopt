import styled from 'styled-components';

export const Form = styled.div`
  width: 100%;
  background: var(--white);
  max-width: 76rem;
  border: 0.1rem solid var(--border);
  border-radius: 0.8rem;

  margin: -8rem auto 3.2rem;
  padding: 5rem 6rem;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  fieldset {
    span + span {
      margin-top: 2.7rem;
    }
  }

  fieldset + fieldset {
    margin-top: 6rem;
  }

  .legend-skeleton {
    margin-bottom: 2.4rem;
    width: 100%;
    height: 2.9rem;
  }

  .input-skeleton {
    width: 100%;
    height: 6rem;
    border: 0.1rem solid var(--border);
    border-radius: 0.8rem;
  }

  .input-block {
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      width: 48%;
    }
  }

  .button-skeleton {
    width: 16rem;
    height: 5rem;
    align-self: flex-end;
    border-radius: 0.8rem;
  }
`;

export const Gallery = styled.div`
  display: flex;
  justify-content: space-between;

  .imageInput-skeleton {
    width: 18rem;
    height: 18rem;
    border-radius: 2rem;
  }
`;

export const ProcedureList = styled.ul`
  .procedure-skeleton {
    width: 100%;
    height: 16rem;
    border-radius: 0.8rem;
  }
`;
