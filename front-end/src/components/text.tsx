import theme from '@App/constants/colors';
import styled from 'styled-components';

const Text = styled.p`
  font-family: sans-serif;
  font-size: 16px;
  color: ${props => (props.color ? props.color : theme.primaryBlue)};
  padding-top: 4px;
`;

export default Text;
