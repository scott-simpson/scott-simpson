import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { Heading, Text } from 'rebass';

import Wrap from './Wrap';

const Nav = ({ colorSmall, colorLarge }) => {

  const NavA = styled(Link)`
    color: ${colorSmall};
    display: inline-block;
    font-size: ${props => props.theme.fontSizes[1] + 'px'};
    line-height: 1;
    padding: 16px;
    text-decoration: none;
    &:hover, &:active, &:visited {
      color: ${colorSmall};
    }
    @media (min-width: ${props => props.theme.breakpoints[0]}) {
      font-size: ${props => props.theme.fontSizes[2] + 'px'};
    }
    @media (min-width: ${props => props.theme.breakpoints[1]}) {
      color: ${colorLarge};
      font-size: ${props => props.theme.fontSizes[3] + 'px'};
      padding: 16px 24px;
      &:hover, &:active, &:visited {
        color: ${colorLarge};
      }
    }
  `;

  const NavContainer = styled.nav`
    @media (min-width: ${props => props.theme.breakpoints[1]}) {
      position: absolute;
      width: 100%;
      left: 0;
      top: 0;
      padding: 8px 0;
      z-index: 3;
    }
  `;

  return (
    <NavContainer>
      <Wrap alignItems='center'>
        <Box>
          <Link to="/"><Heading>Scott</Heading></Link>
        </Box>
        <Box ml="auto">
          <NavA activeStyle={{ color: '#1C21FF' }} to='/projects'>Projects</NavA>
          <NavA activeStyle={{ color: '#1C21FF' }} to='/about'>About</NavA>
          <NavA activeStyle={{ color: '#1C21FF' }} to='/contact'>Contact</NavA>
        </Box>
      </Wrap>
    </NavContainer>
  );
}

export default Nav;
