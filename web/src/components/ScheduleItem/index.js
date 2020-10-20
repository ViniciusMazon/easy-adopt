import React from 'react';

import { Container } from './styles';

export default function ScheduleItem({ date, time, tutor_name, animal_name }) {

  return (
    <Container>
      <td>{date}</td>
      <td>{time}</td>
      <td>{tutor_name}</td>
      <td>{animal_name}</td>
    </Container>
  );
}
