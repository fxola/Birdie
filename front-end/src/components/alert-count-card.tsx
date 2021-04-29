import * as React from 'react';
import styled from 'styled-components';
import Text from './Text';
import Title from './Title';
import Wrapper from './Wrapper';

const Card = styled.div`
  height: 100px;
  width: 250px;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: row;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 10px;
  margin: 0 20px 0 20px;
`;

const Icon = styled.img`
  height: 70px;
  width: 70px;
`;

const IconWrapper = styled(Wrapper)`
  flex: 0.4;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const ContentWrapper = styled(Wrapper)`
  flex: 0.6;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
`;

interface Prop {
  title: string;
  iconUrl: string;
  count: number;
}

const AlertCountCard = ({ title, iconUrl, count }: Prop) => {
  return (
    <Card>
      <IconWrapper>
        <Icon src={iconUrl} />
      </IconWrapper>
      <ContentWrapper>
        <Title>{count}</Title>
        <Text>{title}</Text>
      </ContentWrapper>
    </Card>
  );
};

export default AlertCountCard;
