import * as React from 'react';
import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from '@App/hooks/useReduxActions';

import { EventEnum, WellbeingEvents } from '@App/types';
import EventResultCard from './events-result-card';
import Filter from './filter';
import Wrapper from './wrapper';
import {
  setWellbeingType,
  wellbeingSelector,
} from '@App/store/slices/wellbeing';
import { globalPathSelector } from '@App/store/slices/dashboard';
import { getWellbeingRequest } from '@App/store/slices/wellbeing/action';
import Title from './title';
import { formatEvent } from '@App/helper';

const WellBeingWrapper = styled(Wrapper)`
  height: 100vh;
  overflow-y: scroll;
`;
const CentralizedWrapper = styled(Wrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const options = [
  {
    name: 'General observation',
    value: WellbeingEvents.general_observation,
  },
  {
    name: 'Mood observation',
    value: WellbeingEvents.mood_observation,
  },
  {
    name: 'Concerns raised',
    value: WellbeingEvents.concern_raised,
  },
  {
    name: 'Physical helth observations',
    value: WellbeingEvents.physical_health_observation,
  },
];

const WellBeing = () => {
  const dispatch = useAppDispatch();
  const { type, results, isLoading } = useAppSelector(wellbeingSelector);
  const path = useAppSelector(globalPathSelector);

  React.useEffect(() => {
    if (path.endsWith('wellbeing')) {
      dispatch(getWellbeingRequest({ path, type }));
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
        />
      );
    });
  };
  const handleWellbeingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setWellbeingType({ type: e.target.value as WellbeingEvents }));
  };
  return (
    <WellBeingWrapper>
      <Filter options={options} onChange={handleWellbeingChange} value={type} />
      {renderContent()}
    </WellBeingWrapper>
  );
};

export default WellBeing;
