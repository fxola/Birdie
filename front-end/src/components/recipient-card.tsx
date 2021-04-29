import * as React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import theme from '@App/constants/colors';
import { useAppDispatch } from '@App/hooks/useReduxActions';
import { setDashboardPath } from '@App/store/slices/dashboard';

import Text from './Text';

const Card = styled.div`
  height: 100px;
  width: 200px;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: ${props =>
    props.color ? props.color : theme.primaryGreen};
  cursor: pointer;
`;

interface Prop {
  id: string;
  name: string;
  color?: string;
  textColor?: string;
}

const RecipientCard = ({ name, id, color, textColor = 'white' }: Prop) => {
  const history = useHistory();
  const dispatch = useAppDispatch();

  const navigate = () => {
    dispatch(setDashboardPath({ id, tab: 'wellbeing' }));
    history.push('/dashboard', { id, name });
  };

  return (
    <Card color={color} onClick={navigate}>
      <Text color={textColor}>{name}</Text>
    </Card>
  );
};

export default RecipientCard;
