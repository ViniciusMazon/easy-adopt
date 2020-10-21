import styled from 'styled-components';

export const Form = styled.div`
  width: 100%;
  background: var(--white);
  max-width: 76rem;
  border: 0.1rem solid var(--border);
  border-radius: 0.8rem;

  margin: 12.6rem auto 3.2rem;
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

  .generate-code {
    margin-top: 1.6rem;
    display: flex;
    align-items: center;

    > div {
      width: 48%;
    }
    .input-custom {
      border-radius: 0.8rem 0 0 0.8rem;
    }
    .button-generate-skeleton {
      width: 8.5rem;
      height: 6rem;

      border-radius: 0 0.8rem 0.8rem 0;
    }
  }

  .button-skeleton {
    width: 16rem;
    height: 5rem;
    align-self: flex-end;
    border-radius: 0.8rem;
  }
`;
