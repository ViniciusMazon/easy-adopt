import React from 'react';
import Skeleton from '../../Skeleton';

import { Form, Gallery, ProcedureList } from './styles';

export default function LoadingAnimalEditForm() {
  return (
    <Form>
      <fieldset>
        <Skeleton className="legend-skeleton" />
        <Gallery>
          <Skeleton className="imageInput-skeleton" />
          <Skeleton className="imageInput-skeleton" />
          <Skeleton className="imageInput-skeleton" />
        </Gallery>
      </fieldset>

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

        <ProcedureList>
          <Skeleton className="procedure-skeleton" />
        </ProcedureList>
      </fieldset>

      <fieldset>
        <Skeleton className="legend-skeleton" />
        <div className="input-block">
          <Skeleton className="input-skeleton" />
        </div>
      </fieldset>

      <Skeleton className="button-skeleton" />
    </Form>
  );
}
