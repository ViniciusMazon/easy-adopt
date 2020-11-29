import React from 'react';

import { Container } from './styles';

export default function ScheduleItem({ date, period, tutor, animal }) {
  return (
    <Container>
      <td>{date}</td>
      <td>{period}</td>
      <td>{tutor.tutor_name}</td>
      <td>{animal.animal_name}</td>
    </Container>
  );
}
