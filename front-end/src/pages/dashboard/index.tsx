import * as React from 'react';
import styled from 'styled-components';

import Sidebar from '@App/components/side-bar';
import AlertCountCard from '@App/components/alert-count-card';
import { alertConfirmedUrl, alertRaisedUrl } from '@App/constants/images';
import RowWrapper from '@App/components/row-wrapper';
import AlertResultCard from '@App/components/alert-result-card';
import Wrapper from '@App/components/wrapper';
import EventResultCard from '@App/components/events-result-card';
import { EventType } from '@App/types';

const Container = styled(RowWrapper)`
  height: 100%;
`;

const ContentContainer = styled(Wrapper)`
  padding: 0 20px 0 20px;
`;

const Dashboard = () => {
  const [active, setActive] = React.useState<EventType>('wellbeing');

  return (
    <Container>
      <Sidebar active={active} setActive={setActive} />
      <ContentContainer>
        <RowWrapper>
          <AlertCountCard
            count={100}
            title={'Alert raised'}
            iconUrl={alertRaisedUrl}
          />
          <AlertCountCard
            count={100}
            title={'Alert qualified'}
            iconUrl={alertConfirmedUrl}
          />
        </RowWrapper>

        <AlertResultCard
          severity={'HIGH'}
          severityColor={'red'}
          timeStamp={'5:20pm'}
          eventType={'Alert raised'}
          iconUrl={alertRaisedUrl}
        />
        <EventResultCard
          severity={'HIGH'}
          severityColor={'paleturquiose'}
          timeStamp={'5:20pm'}
          eventType={'Alert raised'}
          note={'Once upon a time in label,Once upon a time in label,'}
          volume={'600'}
        />
      </ContentContainer>
    </Container>
  );
};

export default Dashboard;
