import React from 'react';
import styled from 'styled-components';
import { Link } from 'rebass';

const Anchor = styled(Link)`
  position: relative;
  color: ${props => props.theme.colors.blue};
  text-decoration: none;
  &:hover {     
    &:after,
    &:before {
      width: 100%;
      left: 0;
    }
  }
  &:after,
  &:before {
    content: ''; 
    position: absolute;
    bottom: 0;
    width: 0;
    right: 0;
    height: 1px;
  }
  &:before {
    transition: width .15s cubic-bezier(0.51, 0.18, 0, 0.88) .1s;
    background: ${props => props.theme.colors.blue};
  } 
  &:after {
    transition: width .15s cubic-bezier(0.29, 0.18, 0.26, 0.83);
    background: ${props => props.theme.colors.blue};
  }
`;

export default Anchor;
