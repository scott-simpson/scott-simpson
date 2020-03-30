import styled from 'styled-components';
import { Text } from 'rebass';

const Allcaps = styled(Text)`
  font-weight: 500;
  border-bottom: 1px solid #1C21FF;
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 1.
`;

Allcaps.defaultProps = {
  fontSize: 1,
};

export default Allcaps;
