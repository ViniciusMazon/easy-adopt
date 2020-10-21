import React from 'react';

import { Wrapper, ScheduleContainer } from './styles';
import Skeleton from '../../Skeleton';

export default function LoadingSchedule() {
  return (
    <Wrapper>
      <Skeleton className=" legend-skeleton " />
      <ScheduleContainer>
        <Skeleton className="tr-skeleton" />

        <Skeleton className="tr-skeleton" />
        <Skeleton className="tr-skeleton" />
        <Skeleton className="tr-skeleton" />
        <Skeleton className="tr-skeleton" />
      </ScheduleContainer>
    </Wrapper>
  );
}
