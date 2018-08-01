import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Heading, Text } from 'rebass';
import { Flex, Box } from 'grid-styled';

import WavesSVG from '../img/waves.svg';
import Content, { HTMLContent } from '../components/Content';
import Transition from '../components/Transition';

const Section = styled.section`
  background: ${props => props.theme.colors.beige};
  margin: auto;
  max-width: 1600px;
`;

const WavesContainer = styled(Box)`
  position: relative;
`;

const Waves = styled(WavesSVG)`
  fill: #ccc;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

export const ProjectsPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <Transition>
      <Section>
        <Flex flexWrap="wrap">
          <WavesContainer width={[1, 1, 5/12]}>
            <Waves />
          </WavesContainer>
          <Box ml={[0, 0, "8.333%"]} mr={[0, 0, "8.333%"]} width={[1, 1, 5/12]} py={[4, 6]}>
            <Heading pb={[2, 4]} lineHeight={["1.6em", "1em"]} color="heading" fontSize={[6, 7, 8]}>About Me</Heading>
            <PageContent className="content" content={content} />
          </Box>
        </Flex>
      </Section>
    </Transition>
  )
}

ProjectsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.shape({
    children: PropTypes.array,
  }),
  contentComponent: PropTypes.func,
}

const ProjectsPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <ProjectsPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.htmlAst}
    />
  )
}

ProjectsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ProjectsPage

export const projectsPageQuery = graphql`
  query ProjectsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      htmlAst
      frontmatter {
        title
      }
    }
  }
`
