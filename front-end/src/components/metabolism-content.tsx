import * as React from 'react';
import {
  metabolismTypeSelector,
  setMetabolismType,
} from '@App/store/slices/metabolism';
import { MetabolismEvents } from '@App/types';
import { useAppDispatch, useAppSelector } from '@App/hooks/useReduxActions';
import EventResultCard from './events-result-card';
import Filter from './filter';
import Wrapper from './wrapper';

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
  const type = useAppSelector(metabolismTypeSelector);

  const handleMetabolismChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setMetabolismType(e.target.value as MetabolismEvents));
  };
  return (
    <Wrapper>
      <Filter
        options={options}
        onChange={handleMetabolismChange}
        value={type}
      />
      <EventResultCard
        severity={'HIGH'}
        severityColor={'paleturquiose'}
        timeStamp={'5:20pm'}
        eventType={'Alert raised'}
        note={'Once upon a time in label,Once upon a time in label,'}
        volume={'600'}
      />
    </Wrapper>
  );
};

export default Metabolism;
