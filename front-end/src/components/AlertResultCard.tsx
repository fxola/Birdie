import * as React from 'react';
import styled from 'styled-components';
import RowWrapper from './RowWrapper';
import Text from './TextComponent';
import Wrapper from './WrapperComponent';

const Card = styled.div`
  height: 50px;
  width: 60vw;
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 0 40px 0 40px;
`;

const Icon = styled.img`
  height: 17px;
  width: 17px;
  margin-right: 10px;
`;

const SeverityWrapper = styled(Wrapper)`
  align-items: center;
  justify-content: flex-end;
  flex: 0.3;
  display: flex;
`;
const SeverityColor = styled(Wrapper)<{ color: string }>`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: ${p => p.color};
  margin-right: 7px;
`;

const EventWrapper = styled(RowWrapper)`
  flex: 0.7;
  align-items: center;
  justify-content: space-between;
`;

const AlertTypeWrapper = styled(RowWrapper)`
  align-items: center;
  margin-left: 30px;
`;

interface Props {
  timeStamp: string;
  severity: string;
  eventType: string;
  severityColor: string;
  iconUrl: string;
}

const AlertResultCard = ({
  timeStamp,
  severity,
  eventType,
  severityColor,
  iconUrl,
}: Props) => {
  return (
    <Card>
      <EventWrapper>
        <Text>{timeStamp}</Text>
        <AlertTypeWrapper>
          <Icon src={iconUrl} />
          <Text>{eventType}</Text>
        </AlertTypeWrapper>
      </EventWrapper>

      <SeverityWrapper>
        <SeverityColor color={severityColor} />
        <Text>{severity}</Text>
      </SeverityWrapper>
    </Card>
  );
};

export default AlertResultCard;
