import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { Box } from 'rebass';

import Wrap from './Wrap';

const Nav = () => {

  const NavA = styled(Link)`
    border-top: 4px solid rgba(255,255,255, 0);
    color: ${props => props.theme.colors.body};
    display: inline-block;
    font-size: ${props => props.theme.fontSizes[1] + 'px'};
    font-weight: 400;
    line-height: 1;
    margin-left: 16px;
    margin-right: 16px;
    padding-top: 16px;
    padding-bottom: 16px;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    &:hover, &:active, &:visited {
      color: ${props => props.theme.colors.body};
    }
    &:last-child {
      padding-right: 0;
    }
    @media (min-width: ${props => props.theme.breakpoints[0]}) {
      font-size: ${props => props.theme.fontSizes[2] + 'px'};
    }
    @media (min-width: ${props => props.theme.breakpoints[1]}) {
      font-size: ${props => props.theme.fontSizes[3] + 'px'};
      margin-left: 24px;
      margin-right: 24px;
      padding-top: 24px;
      padding-bottom: 24px;
    }
  `;

  const NavContainer = styled.nav`
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
      font-size: ${props => props.theme.fontSizes[7] + 'px'};
    }
  `;

  return (
    <NavContainer>
      <Wrap alignItems='center'>
        <Box>
          <Scott to="/">Scott<span> /</span></Scott>
        </Box>
        <Box ml="auto">
          <NavA partiallyActive={true} activeStyle={{ color: '#1C21FF', borderTop: '4px solid #1C21FF' }} to='/projects'>Projects</NavA>
          <NavA partiallyActive={true} activeStyle={{ color: '#1C21FF', borderTop: '4px solid #1C21FF' }} to='/about'>About</NavA>
          <NavA partiallyActive={true} activeStyle={{ color: '#1C21FF', borderTop: '4px solid #1C21FF' }} to='/contact'>Contact</NavA>
        </Box>
      </Wrap>
    </NavContainer>
  );
}

export default Nav;
