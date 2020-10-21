import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

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
  overflow: hidden;

  display: flex;
  flex-direction: column;

  > legend {
    font: 2.4rem 'Varela Round';
    color: var(--title);
    margin-bottom: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 1.6rem;
    border-bottom: 0.1rem solid var(--title);
  }
`;

export const ScheduleContainer = styled.table`
  width: 100%;
  border-spacing: 0;
  text-align: center;

  > tr {
    padding: 1rem 0;

    th {
      font: 500 1.8rem 'Montserrat';
      color: var(--title);
      background: #ddd;
      padding: 1rem 0;
    }
  }
`;
