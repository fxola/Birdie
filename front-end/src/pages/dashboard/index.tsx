import * as React from 'react';
import styled from 'styled-components';

import Sidebar from '@App/components/side-bar';
import RowWrapper from '@App/components/row-wrapper';
import Wrapper from '@App/components/Wrapper';
import { EventType } from '@App/types';
import WellBeing from '@App/components/wellbeing-content';
import Metabolism from '@App/components/metabolism-content';
import Alert from '@App/components/alert-content';
import MediaQueryMwssage from '@App/components/media-query-message';

const Container = styled(RowWrapper)`
  height: 100%;
  overflow: hidden;
`;

const ContentContainer = styled(Wrapper)`
  padding: 0 20px 0 20px;
  overflow: hidden;
  @media (max-width: 767px) {
    display: none;
  }
`;

const Dashboard = () => {
  const [active, setActive] = React.useState<EventType>('wellbeing');

  const renderContent = () => {
    if (active === 'metabolism') {
      return <Metabolism />;
    }

    if (active === 'alert') {
      return <Alert />;
    }
    return <WellBeing />;
  };

  return (
    <Container>
      <Sidebar active={active} setActive={setActive} />
      <ContentContainer>{renderContent()}</ContentContainer>
      <MediaQueryMwssage />
    </Container>
  );
};

export default Dashboard;
