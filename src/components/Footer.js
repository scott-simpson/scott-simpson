import React from 'react';
import styled from 'styled-components';
import { Link, Box } from 'rebass';

import Wrap from './Wrap';

const FooterContainer = styled.footer `
`;

const Nav = styled.nav `
  text-align: center;
  @media (min-width: ${props => props.theme.breakpoints[0]}) {
    text-align: right;
  }
`;

const NavA = styled(Link) `
  display: inline-block;
  font-size: ${props => props.theme.fontSizes[1] + 'px'}
  color: ${props => props.theme.colors.body};
  text-decoration: none;
  &:active, &:visited {
    color: ${props => props.theme.colors.body};
  }
  &:hover {
    color: ${props => props.theme.colors.blue};
  }
  @media (min-width: ${props => props.theme.breakpoints[0]}) {
    font-size: ${props => props.theme.fontSizes[2] + 'px'}
    &:last-child {
      padding-right: 0;
    }
  }
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    font-size: ${props => props.theme.fontSizes[3] + 'px'}
  }
`;

const Scott = styled(Link)`
  font-family: ${props => props.theme.fonts.serif};
  font-size: ${props => props.theme.fontSizes[4] + 'px'};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.heading};
  text-decoration: none;
  & span {
    color: ${props => props.theme.colors.blue};
  }
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    font-size: ${props => props.theme.fontSizes[6] + 'px'};
  }
`;

const Footer = () => (
  <FooterContainer>
    <Wrap flexWrap="wrap" alignItems="center" justifyContent="center" py={4}>
      <Box order={[2, 1]} width={[1, 6/12, 5/12]}>
        <Scott to="/">Scott <span>/</span></Scott>
      </Box>
      <Box order={[1, 2]} width={[1, 6/12, 6/12]}>
        <Nav>
          <NavA p={3} href="mailto:hello@scottsimpson.co">Email</NavA>
          <NavA p={3} href="https://www.linkedin.com/in/scott-dc">LinkedIn</NavA>
          <NavA p={3} href="https://instagram.com/scott.dc">Instagram</NavA>
          <NavA p={3} href="https://github.com/scott-simpson">GitHub</NavA>
        </Nav>
      </Box>
    </Wrap>
  </FooterContainer>
);

export default Footer;
