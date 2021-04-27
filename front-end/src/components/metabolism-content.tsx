import * as React from 'react';
import styled from 'styled-components';

import EventResultCard from './events-result-card';
import Filter from './filter';
import Wrapper from './wrapper';
import { CentralizedWrapper } from './centralized-wrapper';
import Title from './title';

import {
  metabolismSelector,
  setMetabolismType,
} from '@App/store/slices/metabolism';
import { EventEnum, MetabolismEvents } from '@App/types';
import { useAppDispatch, useAppSelector } from '@App/hooks/useReduxActions';
import { globalPathSelector } from '@App/store/slices/dashboard';
import { getMetabolismRequest } from '@App/store/slices/metabolism/action';

import { formatEvent } from '@App/helper';

const ContentWrapper = styled(Wrapper)`
  height: 100vh;
  overflow-y: scroll;
`;

const options = [
  {
    name: 'Food intake observation',
    value: MetabolismEvents.food_intake_observation,
  },
  {
    name: 'Catheter observation',
    value: MetabolismEvents.catheter_observation,
  },
  {
    name: 'Toilet visits recorded',
    value: MetabolismEvents.toilet_visit_recorded,
  },
  {
    name: 'Incontinence pad observation',
    value: MetabolismEvents.incontinence_pad_observation,
  },
];

const Metabolism = () => {
  const dispatch = useAppDispatch();
  const { isLoading, type, results } = useAppSelector(metabolismSelector);
  const path = useAppSelector(globalPathSelector);

  React.useEffect(() => {
    if (path.endsWith('metabolism')) {
      dispatch(getMetabolismRequest({ path, type }));
    }
  }, [path, type]);

  const renderContent = () => {
    if (isLoading) {
      return (
        <CentralizedWrapper>
          <Title> Loading</Title>
        </CentralizedWrapper>
      );
    }

    if (!results.length) {
      return (
        <CentralizedWrapper>
          <Title>No {formatEvent(type)} events available</Title>
        </CentralizedWrapper>
      );
    }

    return results.map(result => {
      return (
        <EventResultCard
          key={result.id}
          timeStamp={result.timestamp}
          eventType={formatEvent(result.event_type as EventEnum)}
          note={result.note}
          meal={result.meal}
          volume={result?.volume_ml}
        />
      );
    });
  };

  const handleMetabolismChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setMetabolismType(e.target.value as MetabolismEvents));
  };
  return (
    <ContentWrapper>
      <Filter
        options={options}
        onChange={handleMetabolismChange}
        value={type}
      />
      {renderContent()}
    </ContentWrapper>
  );
};

export default Metabolism;
