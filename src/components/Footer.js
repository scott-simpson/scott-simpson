import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { Heading, Text } from 'rebass';

import Wrap from './Wrap';

const FooterContainer = styled.footer `
  border-top: 1px solid #eaeaea;
`;

const Nav = styled.nav `

`;

const NavA = styled(Link) `

`;

const Footer = () => (
  <FooterContainer>
    <Wrap>
      <Nav>
        <NavA activeStyle={{ color: '#1C21FF' }} to='/projects'>Projects</NavA>
        <NavA activeStyle={{ color: '#1C21FF' }} to='/about'>About</NavA>
        <NavA activeStyle={{ color: '#1C21FF' }} to='/contact'>Contact</NavA>
      </Nav>
    </Wrap>
  </FooterContainer>
);

export default Footer;
