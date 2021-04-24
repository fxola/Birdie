import styled from 'styled-components';

const Text = styled.p`
  font-family: sans-serif;
  font-size: 16px;
  color: ${props => (props.color ? props.color : 'black')};
`;

export default Text;
