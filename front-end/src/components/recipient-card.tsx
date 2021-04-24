import * as React from 'react';
import styled from 'styled-components';
import Text from './text';

const Card = styled.div`
  height: 100px;
  width: 200px;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: ${props => (props.color ? props.color : '#54c5c1')};
  cursor: pointer;
`;

interface Prop {
  id: string;
  name: string;
  color?: string;
  textColor?: string;
}

const RecipientCard = ({ name, id, color, textColor = 'white' }: Prop) => {
  return (
    <Card color={color}>
      <Text color={textColor}>{name}</Text>
    </Card>
  );
};

export default RecipientCard;
