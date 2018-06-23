import React from 'react';
import styled from 'styled-components';
import { Box } from 'grid-styled';

const Wrap = styled(Box)`
  max-width: 90%;
  @media (min-width: ${props => props.theme.breakpoints[0]}) {
    max-width: 1600px;
    width: 95%;
  }
`;

Wrap.defaultProps = {
  mx: 'auto',
};

export default Wrap;
