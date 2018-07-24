import React from 'react';
import Link from 'gatsby-link';
import Img from "gatsby-image";
import { Flex, Box } from 'grid-styled';
import { Heading, Text } from 'rebass';
import styled from 'styled-components';

const ProjectContainer = styled.article`
  background: #ffe9e9;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  transform: scale(0.99);
  transform-origin: center;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  &:hover {
    transform: scale(1);
  }
  & img {
    transform: scale(1);
    transform-origin: center;
    transition: all 0.3s ease-in-out;
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
}) => (
  <ProjectContainer style={{ backgroundColor: cardBackground }}>
    <ProjectLink to={slug}>
      <Flex flexWrap="wrap" alignItems="center">
        <Box p={5} width={[1, 5/12]}>
          <Heading fontSize={[4, 6]} pb={2}>{title}</Heading>
          <Text lineHeight={1} fontSize={[1, 3]}>{description}</Text>
        </Box>
        <Box width={[1, 7/12]}>
          <img
            src={cardImage}
            alt={title}
          />
        </Box>
      </Flex>
    </ProjectLink>
  </ProjectContainer>
)

export default Project;

