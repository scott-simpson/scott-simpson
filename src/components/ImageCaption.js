import React from 'react';
import styled from 'styled-components';
import { Text } from 'rebass';

const CaptionContainer = styled(Text)`
  display: block;
  font-size: ${props => props.theme.fontSizes[1] + 'px'};
`;

const CapContainer = ({ children }) => (
  <CaptionContainer>
    {children}
  </CaptionContainer>
)

export default CapContainer;
