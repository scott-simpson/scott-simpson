import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import ScrollAnimation from 'react-animate-on-scroll';

const ImageContainer = styled(Flex)`
  margin: 0 0 16px -5%;
  width: 110%;
  > div {
    flex: 1;
  }
  & div {
    margin-bottom: 0;
  }
  @media (min-width: ${props => props.theme.breakpoints[0]}) {
    margin-left: -15%;
    width: 130%;
  }
  @media (min-width: ${props => props.theme.breakpoints[2]}) {
    margin-left: -45%;
    width: 190%;
  }
`;

const ImgContainer = ({ children }) => (
  <ImageContainer flexDirection={["column", "column", "row"]}>
    {children}
  </ImageContainer>
)

export default ImgContainer;
