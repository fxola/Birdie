import * as React from 'react';
import styled from 'styled-components';
import RowWrapper from './row-wrapper';
import SubTitle from './sub-title';
import Text from './text';
import Wrapper from './wrapper';
import { truncate } from '@App/helper';

const Card = styled.div`
  height: auto;
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 0 20px 0px 20px;
  margin: 10px;
`;

const EventText = styled(Text)`
  padding-top: 3px;
  font-size: 15px;
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
  height: 40px;
  border-top: 0.1px solid #dadada;
`;

interface Props {
  timeStamp: string;
  severity?: string;
  note: string;
  mood?: string;
  meal?: string;
  eventType: string;
  volume?: string;
  severityColor?: string;
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
          <EventText style={{ width: '60%' }}>{timeStamp}</EventText>
          <EventTypeWrapper>
            <EventText>{eventType}</EventText>
          </EventTypeWrapper>
        </EventWrapper>
        {severity && (
          <SeverityWrapper>
            <SeverityColor color={severityColor!} />
            <EventText>{severity}</EventText>
          </SeverityWrapper>
        )}
      </RowWrapper>

      {mood && (
        <DetailWrapper>
          <EventSubtitle>Mood:</EventSubtitle>
          <EventText> {mood}</EventText>
        </DetailWrapper>
      )}

      {meal && (
        <DetailWrapper>
          <EventSubtitle>Meal:</EventSubtitle>
          <EventText> {meal}</EventText>
        </DetailWrapper>
      )}

      {volume && (
        <>
          <DetailWrapper>
            <EventSubtitle>Volume (ml):</EventSubtitle>
            <EventText> {volume}</EventText>
          </DetailWrapper>
          <DetailWrapper>
            <EventSubtitle>Normal daily volume range (ml):</EventSubtitle>
            <EventText> 800 - 2000</EventText>
          </DetailWrapper>
        </>
      )}

      {note && (
        <DetailWrapper>
          <EventSubtitle>Note:</EventSubtitle>
          <EventText> {truncate(note, 110)}</EventText>
        </DetailWrapper>
      )}
    </Card>
  );
};

export default EventResultCard;
