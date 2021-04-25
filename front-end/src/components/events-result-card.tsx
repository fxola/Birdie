import * as React from 'react';
import styled from 'styled-components';
import RowWrapper from './row-wrapper';
import SubTitle from './sub-title';
import Text from './text';
import Wrapper from './wrapper';

const Card = styled.div`
  height: auto;
  min-height: 50px;
  width: 60vw;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 0 40px 10px 40px;
  margin: 5px 0 5px 0;
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

const EventTypeWrapper = styled(RowWrapper)`
  align-items: center;
  margin-left: 30px;
`;

const EventSubtitle = styled(SubTitle)`
  margin-right: 10px;
`;

const DetailWrapper = styled(RowWrapper)`
  height: 30px;
`;

interface Props {
  timeStamp: string;
  severity?: string;
  note: string;
  mood?: string;
  meal?: string;
  eventType: string;
  volume?: string;
  severityColor: string;
}

const EventResultCard = ({
  timeStamp,
  severity,
  note,
  mood,
  meal,
  volume,
  eventType,
  severityColor,
}: Props) => {
  return (
    <Card>
      <RowWrapper>
        <EventWrapper>
          <Text>{timeStamp}</Text>
          <EventTypeWrapper>
            <Text>{eventType}</Text>
          </EventTypeWrapper>
        </EventWrapper>
        {severity && (
          <SeverityWrapper>
            <SeverityColor color={severityColor} />
            <Text>{severity}</Text>
          </SeverityWrapper>
        )}
      </RowWrapper>

      {mood && (
        <DetailWrapper>
          <EventSubtitle>Mood:</EventSubtitle>
          <Text> {mood}</Text>
        </DetailWrapper>
      )}

      {meal && (
        <DetailWrapper>
          <EventSubtitle>Meal:</EventSubtitle>
          <Text> {meal}</Text>
        </DetailWrapper>
      )}

      {volume && (
        <>
          <DetailWrapper>
            <EventSubtitle>Volume (ml):</EventSubtitle>
            <Text> {volume}</Text>
          </DetailWrapper>
          <DetailWrapper>
            <EventSubtitle>Normal daily volume range (ml):</EventSubtitle>
            <Text> 800 - 2000</Text>
          </DetailWrapper>
        </>
      )}

      {note && (
        <DetailWrapper>
          <EventSubtitle>Note:</EventSubtitle>
          <Text> {note}</Text>
        </DetailWrapper>
      )}
    </Card>
  );
};

export default EventResultCard;
