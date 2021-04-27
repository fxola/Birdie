import styled from 'styled-components';
import theme from '@App/constants/colors';

const Title = styled.h1`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  font-size: 24px;
  margin-bottom: 8px;
  color: ${theme.primaryBlue};
`;

export default Title;
