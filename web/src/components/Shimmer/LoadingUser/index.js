import React from 'react';

import { Form } from './styles';
import Skeleton from '../../Skeleton';

export default function LoadingUser() {
  return (
    <Form>
      <fieldset>
        <Skeleton className="legend-skeleton" />

        <Skeleton className="input-skeleton" />

        <div className="input-block">
          <Skeleton className="input-skeleton" />
          <Skeleton className="input-skeleton" />
        </div>

        <div className="input-block">
          <Skeleton className="input-skeleton" />
          <Skeleton className="input-skeleton" />
        </div>
      </fieldset>

      <fieldset>
        <Skeleton className="legend-skeleton" />

        <div className="generate-code">
          <Skeleton className="input-skeleton input-custom" />
          <Skeleton className="button-generate-skeleton" />
        </div>
      </fieldset>

      <Skeleton className="button-skeleton" />
    </Form>
  );
}
