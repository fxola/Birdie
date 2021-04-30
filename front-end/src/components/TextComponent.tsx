import theme from '@App/constants/colors';
import styled from 'styled-components';

const Text = styled.p`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  font-size: 16px;
  color: ${props => (props.color ? props.color : theme.primaryBlue)};
`;

export default Text;
