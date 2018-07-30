import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';

const ImageContainer = styled.figure`
  margin: 0 0 16px -5%;
  width: 110%;
  > div {
    margin-bottom: 0;
  }
  & figcaption {
    font-size: ${props => props.theme.fontSizes[1] + 'px'};
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
  <ScrollAnimation offset={0} duration={0.5} animateOnce={true} animateIn="fadeInUp">
    <ImageContainer>
      {children}
    </ImageContainer>
  </ScrollAnimation>
)

export default ImgContainer;
