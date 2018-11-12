import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import { Heading, Text, Flex, Box } from 'rebass';
import styled from 'styled-components';

import Allcaps from './Allcaps';

const ProjectContainer = styled.article`
  background: #ffe9e9;
  position: relative;
  overflow: hidden;
  transform: scale(0.99);
  transform-origin: center;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  &:hover {
    box-shadow: 0px 20px 20px -10px rgba(0,0,0,0.08);
    transform: scale(1);
  }
  & img {
    transform: scale(1);
    transform-origin: center;
    transition: all 0.3s ease-in-out !important;
    z-index: 1;
  }
  &:hover img {
    transform: scale(0.97);
  }
`;

const ProjectLink = styled(Link)`
  color: ${props => props.theme.colors.body};
  display: block;
  padding: 0;
  text-decoration: none;
`;

const Project = ({
  slug,
  cardImage,
  cardBackground,
  cardText,
  client,
  title,
  description,
  date
}) => {
  let headlineColor = props => props.theme.colors.heading;
  let bodyColor = props => props.theme.colors.body;
  if(cardText === 'light') {
    headlineColor = '#ffffff';
    bodyColor = '#f6f7f9';
  }
  return (
    <ProjectContainer style={{ backgroundColor: cardBackground }}>
      <ProjectLink to={slug}>
        <Flex flexWrap="wrap" alignItems="center">
          <Box p={[4, 5]} order={[2, 1]} width={[1, 5/12]}>
            <Heading color={headlineColor} letterSpacing={["-1px" ]}fontSize={[4, 6]} pb={2}>{title}</Heading>
            <Text color={bodyColor} lineHeight={1} fontSize={[1, 3]}>{description}</Text>
            <Allcaps fontSize={[0, 1]} color={bodyColor} pt={[3, 5]}>{client}, {date}</Allcaps>
          </Box>
          <Box order={[1, 2]} width={[1, 7/12]}>
            <Img
              fluid={cardImage.childImageSharp.fluid}
              alt={title}
            />
          </Box>
        </Flex>
      </ProjectLink>
    </ProjectContainer>
  );
}

export default Project;
