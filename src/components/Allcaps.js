import styled from 'styled-components';
import { Text } from 'rebass';

const Allcaps = styled(Text)`
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 1.
`;

Allcaps.defaultProps = {
  fontSize: 1,
};

export default Allcaps;
