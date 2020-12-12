import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  > label {
    font: 500 1.6rem 'Montserrat';
    color: var(--text);
    margin-bottom: 0.7rem;
  }
  .select-box {
    position: relative;
    width: 100%;
  }
  .select-box select {
    height: 6rem;
    width: 100%;
    line-height: 2rem;
    padding: 1.3rem 3.8rem;

    border: 0.1rem solid var(--border);
    border-radius: 0.8rem;
    appearance: none;
    outline: 0;

    &:focus {
      border-color: var(--green);
    }

  }
  .select-box:after {
    content: '';
    position: absolute;
    right: 3rem;
    top: 50%;
    margin-top: -0.4rem;
    border-top: 8px solid #ccc;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    pointer-events: none;
  }
  > span {
    text-align: end;
    margin-top: 0.5rem;
    width: 100%;
    color: var(--status-unavailable);
  }
`;
