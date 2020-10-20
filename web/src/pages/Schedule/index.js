import React, { useState, useEffect } from 'react';
import { format, addDays } from 'date-fns';
import { Container, Wrapper, ScheduleContainer } from './styles';

import ScheduleItem from '../../components/ScheduleItem';

const tempData = [
  {
    id: 1,
    date: format(new Date(2020, 9, 20), 'dd/MM/yyyy'),
    time: '14:00',
    tutor_name: 'Camila Dias Neves',
    animal_name: 'Laika',
  },
  {
    id: 2,
    date: format(new Date(2020, 9, 21), 'dd/MM/yyyy'),
    time: '14:00',
    tutor_name: 'Camila Dias Neves',
    animal_name: 'Laika',
  },
  {
    id: 3,
    date: format(new Date(2020, 9, 22), 'dd/MM/yyyy'),
    time: '14:00',
    tutor_name: 'Camila Dias Neves',
    animal_name: 'Laika',
  },
  {
    id: 4,
    date: format(new Date(2020, 9, 23), 'dd/MM/yyyy'),
    time: '14:00',
    tutor_name: 'Camila Dias Neves',
    animal_name: 'Laika',
  },
  {
    id: 5,
    date: format(new Date(2020, 9, 24), 'dd/MM/yyyy'),
    time: '14:00',
    tutor_name: 'Camila Dias Neves',
    animal_name: 'Laika',
  },
  {
    id: 6,
    date: format(new Date(2020, 9, 25), 'dd/MM/yyyy'),
    time: '14:00',
    tutor_name: 'Camila Dias Neves',
    animal_name: 'Laika',
  },
  {
    id: 7,
    date: format(new Date(2020, 9, 26), 'dd/MM/yyyy'),
    time: '14:00',
    tutor_name: 'Camila Dias Neves',
    animal_name: 'Laika',
  },
  {
    id: 8,
    date: format(new Date(2020, 9, 27), 'dd/MM/yyyy'),
    time: '14:00',
    tutor_name: 'Camila Dias Neves',
    animal_name: 'Laika',
  },
  {
    id: 9,
    date: format(new Date(2020, 9, 28), 'dd/MM/yyyy'),
    time: '14:00',
    tutor_name: 'Camila Dias Neves',
    animal_name: 'Laika',
  },
  {
    id: 10,
    date: format(new Date(2020, 9, 29), 'dd/MM/yyyy'),
    time: '14:00',
    tutor_name: 'Camila Dias Neves',
    animal_name: 'Laika',
  },
];

export default function Schedule() {
  const [schedule, setSchedule] = useState(tempData);

  return (
    <Container>
      <Wrapper>
        <label>Agenda</label>

        <ScheduleContainer>
          <tr>
            <th>Data</th>
            <th>Horário</th>
            <th>Tutor</th>
            <th>Animal</th>
          </tr>
          {schedule.map((item) => {
            return (
              <ScheduleItem
                key={item.id}
                date={item.date}
                time={item.time}
                tutor_name={item.tutor_name}
                animal_name={item.animal_name}
              />
            );
          })}
        </ScheduleContainer>
      </Wrapper>
    </Container>
  );
}
