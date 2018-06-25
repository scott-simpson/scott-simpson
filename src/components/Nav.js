import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const NavContainer = styled.nav`
  margin: 0 24px;
  padding: 12px 0;
  border-bottom: ${props => props.theme.borders.light};
`;

const NavA = styled(Link)`
  color: ${props => props.theme.colors.body};
  display: inline-block;
  font-size: ${props => props.theme.fontSizes[1] + 'px'};
  letter-spacing: 1.5px;
  line-height: 1;
  padding: 16px;
  text-decoration: none;
  text-transform: uppercase;
  &:hover, &:active, &:visited {
    color: ${props => props.theme.colors.body};
  }
`;

const Nav = () => (
  <NavContainer>
    <NavA activeStyle={{ color: 'red' }} to='/projects'>Projects</NavA>
    <NavA to='/'>Blog</NavA>
    <NavA to='/about'>About Me</NavA>
  </NavContainer>
)

export default Nav;
