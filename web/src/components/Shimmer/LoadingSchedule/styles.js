import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 12.6rem;
  width: 70rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: var(--white);
  border: 0.1rem solid var(--border);
  border-radius: 0.8rem;

  padding: 4rem;

  display: flex;
  flex-direction: column;

  .legend-skeleton {
    margin-bottom: 2.4rem;
    width: 100%;
    height: 2.9rem;
  }
`;

export const ScheduleContainer = styled.div`
  width: 100%;
  border-spacing: 0;
  text-align: center;

  .tr-skeleton {
    height: 4rem;
    width: 100%;
    margin-bottom: 0.9rem;
  }

  .tr-skeleton:nth-child(1) {
    margin-bottom: 2rem;
  }
`;
