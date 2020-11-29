import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { Container, Wrapper, ScheduleContainer } from './styles';
import ScheduleItem from '../../components/ScheduleItem';
import LoadingSchedule from '../../components/Shimmer/LoadingSchedule';

export default function Schedule() {
  const [isLoading, setIsLoading] = useState(true);
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    api.get('/schedule').then((response) => {
      setSchedule(response.data);
    });
    setIsLoading(false);
  }, []);

  return (
    <Container>
      {isLoading ? (
        <LoadingSchedule />
      ) : (
        <Wrapper>
          <legend>Agenda</legend>

          <ScheduleContainer>
            <tr>
              <th>Data</th>
              <th>Período</th>
              <th>Tutor</th>
              <th>Animal</th>
            </tr>
            {schedule.map((item) => {
              return (
                <ScheduleItem
                  key={item.id}
                  date={item.date}
                  period={item.period}
                  tutor={item.tutor}
                  animal={item.animal}
                />
              );
            })}
          </ScheduleContainer>
        </Wrapper>
      )}
    </Container>
  );
}
