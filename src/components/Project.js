import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import { Heading, Text, Flex, Box } from 'rebass';
import styled from 'styled-components';

import Allcaps from './Allcaps';

const ProjectContainer = styled.article`
  background: #ffe9e9;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  transform: scale(0.99);
  transform-origin: center;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  &:hover {
    box-shadow: rgba(12, 12, 33, 0.2) 0px 15px 30px -15px;
    transform: scale(1);
  }
  & img {
    transform: scale(1);
    transform-origin: center;
    transition: all 0.3s ease-in-out !important;
    z-index: 1;
  }
  &:hover img {
    transform: scale(1.01);
  }
`;

const ProjectLink = styled(Link)`
  color: ${props => props.theme.colors.heading};
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
          <Box p={[4, 5]} order={[2, 2, 1]} width={[1, 1, 5/12]}>
            <Heading color={headlineColor} fontFamily="serif" lineHeight="1.25em" fontSize={[4, 7]} pb={2}>{title}</Heading>
            <Text color={bodyColor} lineHeight={1} fontSize={[1, 4]}>{description}</Text>
            <Allcaps fontSize={[0, 1]} color={bodyColor} pt={[3, 5]}>{client}</Allcaps>
          </Box>
          <Box order={[1, 1, 2]} width={[1, 1, 7/12]}>
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
