import styled from 'styled-components';
import { Flex } from 'rebass';

const Wrap = styled(Flex)`
  max-width: 90%;
  @media (min-width: ${props => props.theme.breakpoints[0]}) {
    max-width: 1600px;
    width: 92.5%;
  }
`;

Wrap.defaultProps = {
  mx: 'auto',
};

export default Wrap;
