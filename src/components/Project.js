import React from 'react';
import Link from 'gatsby-link';
import { Heading, Text } from 'rebass';
import styled from 'styled-components';

const ProjectContainer = styled.article`
  padding: 30px;
`;

const Project = ({
  slug,
  title,
  description,
  date
}) => (
  <ProjectContainer>
    <Link to={slug}>
      <Heading>{title}</Heading>
      <Text>{description}</Text>
      <Text>{date}</Text>
    </Link>
  </ProjectContainer>
)

export default Project;

