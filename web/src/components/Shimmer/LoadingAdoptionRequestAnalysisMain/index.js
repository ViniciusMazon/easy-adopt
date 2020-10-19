import React from 'react';

import { Main, Data, Info, Answer, ButtonGroup } from './styles';

import Skeleton from '../../Skeleton';

export default function LoadingAdoptionRequestAnalysisMain() {
  return (
    <Main>
      <fieldset>
        <Skeleton className="legend-skeleton" />
        <Data>
          <Skeleton className="avatar-skeleton" />

          <Info>
            <Answer>
              <Skeleton className="question-skeleton" />
              <Skeleton className="answer-skeleton" />
            </Answer>

            <div className="answer-block">
              <Answer>
                <Skeleton className="question-skeleton" />
                <Skeleton className="answer-skeleton" />
              </Answer>
              <Answer>
                <Skeleton className="question-skeleton" />
                <Skeleton className="answer-skeleton" />
              </Answer>
            </div>

            <div className="answer-block">
              <Answer>
                <Skeleton className="question-skeleton" />
                <Skeleton className="answer-skeleton" />
              </Answer>
              <Answer>
                <Skeleton className="question-skeleton" />
                <Skeleton className="answer-skeleton" />
              </Answer>
            </div>
          </Info>
        </Data>
      </fieldset>

      <fieldset>
        <Skeleton className="legend-skeleton" />
        <Data>
          <Skeleton className="avatar-skeleton" />

          <Info>
            <Answer>
              <Skeleton className="question-skeleton" />
              <Skeleton className="answer-skeleton" />
            </Answer>

            <Answer>
              <Skeleton className="question-skeleton" />
              <Skeleton className="answer-skeleton" />
            </Answer>

            <div className="answer-block">
              <Answer>
                <Skeleton className="question-skeleton" />
                <Skeleton className="answer-skeleton" />
              </Answer>
              <Answer>
                <Skeleton className="question-skeleton" />
                <Skeleton className="answer-skeleton" />
              </Answer>
            </div>

            <Answer>
              <Skeleton className="question-skeleton" />
              <Skeleton className="answer-skeleton" />
            </Answer>
          </Info>
        </Data>
      </fieldset>

      <fieldset>
        <Skeleton className="legend-skeleton" />
        <Data>
          <Info>
            <div className="answer-block">
              <Answer>
                <Skeleton className="question-skeleton" />
                <Skeleton className="answer-skeleton" />
              </Answer>
              <Answer>
                <Skeleton className="question-skeleton" />
                <Skeleton className="answer-skeleton" />
              </Answer>
            </div>

            <div className="answer-block">
              <Answer>
                <Skeleton className="question-skeleton" />
                <Skeleton className="answer-skeleton" />
              </Answer>
              <Answer>
                <Skeleton className="question-skeleton" />
                <Skeleton className="answer-skeleton" />
              </Answer>
            </div>
          </Info>
        </Data>
      </fieldset>

      <fieldset>
        <Skeleton className="legend-skeleton" />
        <Data>
          <Info>
            <div className="answer-block">
              <Answer>
                <Skeleton className="question-skeleton" />
                <Skeleton className="answer-skeleton" />
              </Answer>
              <Answer>
                <Skeleton className="question-skeleton" />
                <Skeleton className="answer-skeleton" />
              </Answer>
            </div>

            <div className="answer-block">
              <Answer>
                <Skeleton className="question-skeleton" />
                <Skeleton className="answer-skeleton" />
              </Answer>
              <Answer>
                <Skeleton className="question-skeleton" />
                <Skeleton className="answer-skeleton" />
              </Answer>
            </div>

            <Answer>
              <Skeleton className="question-skeleton" />
              <Skeleton className="answer-skeleton" />
            </Answer>
          </Info>
        </Data>
      </fieldset>

      <ButtonGroup>
        <Skeleton className="button-skeleton" />

        <Skeleton className="button-skeleton" />
      </ButtonGroup>
    </Main>
  );
}
