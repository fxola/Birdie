import * as React from 'react';
import styled from 'styled-components';

import { alertConfirmedUrl, alertRaisedUrl } from '@App/constants/images';

import AlertCountCard from './AlertCountCard';
import RowWrapper from './RowWrapper';
import Wrapper from './WrapperComponent';
import EventResultCard from './EventsResultCard';
import Title from './Title';

import { EventEnum } from '@App/types';

import { formatEvent, getSeverityColor } from '@App/helper';
import { useAppDispatch, useAppSelector } from '@App/hooks/useReduxActions';
import { useInterSectionObserver } from '@App/hooks/useIntersectionObserver';

import { getAlertRequest } from '@App/store/slices/alerts/action';
import { globalPathSelector } from '@App/store/slices/dashboard';
import { alertSelector } from '@App/store/slices/alerts';

const AlertContentWrapper = styled(Wrapper)`
  height: 100vh;
  overflow-y: scroll;
`;

const AlertCardsWrapper = styled(RowWrapper)`
  margin: 20px 0px 40px 0px;
`;

const TextContentWrapper = styled(Wrapper)`
  margin-top: 20%;
  text-align: center;
`;

const Alert = () => {
  const dispatch = useAppDispatch();
  const path = useAppSelector(globalPathSelector);

  const {
    isLoading,
    total_alert_qualified,
    total_alert_raised,
    alert_qualified,
    hasMore,
  } = useAppSelector(alertSelector);

  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    if (path.endsWith('alert')) {
      dispatch(getAlertRequest({ path, page }));
    }
  }, [path, page]);

  const incrementPage = React.useCallback(() => {
    setPage(page + 1);
  }, [page]);

  const { lastElementRef } = useInterSectionObserver({
    isLoading,
    incrementPage,
    hasMore,
  });

  const renderQualifiedAlerts = () => {
    if (isLoading && !alert_qualified.length) {
      return (
        <TextContentWrapper>
          <Title>Loading</Title>
        </TextContentWrapper>
      );
    }

    if (!alert_qualified.length) {
      return (
        <TextContentWrapper>
          <Title>No Qualified Alerts events available</Title>
        </TextContentWrapper>
      );
    }

    return alert_qualified.map((result, i) => {
      if (alert_qualified.length === i + 1) {
        return (
          <span ref={lastElementRef} key={result.id}>
            <EventResultCard
              key={result.id}
              timeStamp={result.timestamp}
              eventType={formatEvent(result.event_type as EventEnum)}
              note={result.note}
              severity={result.alert_severity}
              severityColor={getSeverityColor(result.alert_severity)}
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
          severity={result.alert_severity}
          severityColor={getSeverityColor(result.alert_severity)}
        />
      );
    });
  };
  return (
    <AlertContentWrapper>
      <AlertCardsWrapper>
        <AlertCountCard
          count={total_alert_raised}
          title={'Raised Alerts'}
          iconUrl={alertRaisedUrl}
        />
        <AlertCountCard
          count={total_alert_qualified}
          title={'Qualified Alerts'}
          iconUrl={alertConfirmedUrl}
        />
      </AlertCardsWrapper>
      {alert_qualified.length > 0 && (
        <Title style={{ textAlign: 'center', marginBottom: '20px' }}>
          Qualified Alerts
        </Title>
      )}
      {renderQualifiedAlerts()}
    </AlertContentWrapper>
  );
};

export default Alert;
