import * as React from 'react';
import styled from 'styled-components';

import { alertConfirmedUrl, alertRaisedUrl } from '@App/constants/images';

import AlertCountCard from './alert-count-card';
import RowWrapper from './row-wrapper';
import Wrapper from './wrapper';
import EventResultCard from './events-result-card';
import Title from './title';

import { EventEnum } from '@App/types';

import { formatEvent, getSeverityColor } from '@App/helper';
import { useAppDispatch, useAppSelector } from '@App/hooks/useReduxActions';

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
  const {
    isLoading,
    total_alert_qualified,
    total_alert_raised,
    alert_qualified,
  } = useAppSelector(alertSelector);
  const dispatch = useAppDispatch();
  const path = useAppSelector(globalPathSelector);

  React.useEffect(() => {
    if (path.endsWith('alert')) {
      dispatch(getAlertRequest({ path }));
    }
  }, [path]);

  const renderQualifiedAlerts = () => {
    if (isLoading) {
      return (
        <TextContentWrapper>
          <Title> Loading</Title>
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

    return alert_qualified.map(result => {
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
