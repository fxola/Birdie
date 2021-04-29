import * as React from 'react';
import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from '@App/hooks/useReduxActions';

import { EventEnum, WellbeingEvents } from '@App/types';
import EventResultCard from './events-result-card';
import Filter from './Filter';
import Wrapper from './Wrapper';
import {
  setWellbeingType,
  wellbeingSelector,
} from '@App/store/slices/wellbeing';
import { globalPathSelector } from '@App/store/slices/dashboard';
import { getWellbeingRequest } from '@App/store/slices/wellbeing/action';
import Title from './Title';
import { formatEvent } from '@App/helper';
import { CentralizedWrapper } from './centralized-wrapper';
import { useInterSectionObserver } from '@App/hooks/useIntersectionObserver';

const WellBeingWrapper = styled(Wrapper)`
  height: 100vh;
  overflow-y: scroll;
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
    name: 'Physical health observations',
    value: WellbeingEvents.physical_health_observation,
  },
];

const WellBeing = () => {
  const dispatch = useAppDispatch();
  const path = useAppSelector(globalPathSelector);

  const { type, results, isLoading, hasMore } = useAppSelector(
    wellbeingSelector
  );
  const [page, setPage] = React.useState(1);

  const incrementPage = React.useCallback(() => {
    setPage(page + 1);
  }, [page]);

  React.useEffect(() => {
    if (path.endsWith('wellbeing')) {
      dispatch(getWellbeingRequest({ path, type, page }));
    }
  }, [path, type, page]);

  const { lastElementRef } = useInterSectionObserver({
    isLoading,
    incrementPage,
    hasMore,
  });

  const renderContent = () => {
    if (isLoading && !results.length) {
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

    return results.map((result, i) => {
      if (results.length === i + 1) {
        return (
          <span ref={lastElementRef} key={result.id}>
            <EventResultCard
              timeStamp={result.timestamp}
              eventType={formatEvent(result.event_type as EventEnum)}
              note={result.note}
            />
          </span>
        );
      }

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
