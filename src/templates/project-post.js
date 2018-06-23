import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Heading, Text } from 'rebass';
import { Flex, Box } from 'grid-styled';

import Content, { HTMLContent } from '../components/Content';
import Allcaps from '../components/Allcaps';
import Wrap from '../components/Wrap';

export const ProjectPost = ({
  content,
  contentComponent,
  description,
  title,
  year,
  role,
  technology,
  helmet,
}) => {
  const ProjectContent = contentComponent || Content;
  return (
    <Wrap>
      {helmet || ''}
      <article>
        <Flex flexWrap="wrap" justifyContent="center">
          <Box py={[2, 4, 6]} width={[1, 9/12, 8/12, 6/12]}>
            <Heading letterSpacing="-1px" color="heading" fontSize={[6, 7, 8]}>{title}</Heading>
            <Text py={4} fontSize={[3, 4]}>{description}</Text>
            <Flex pt={2} flexWrap="wrap">
              <Box width={2/12}>
                <Allcaps color="blue">Year</Allcaps>
                <Text color="heading" fontSize={3}>{year}</Text>
              </Box>
              <Box width={4/12}>
                <Allcaps color="blue">Role</Allcaps>
                <Text color="heading" fontSize={3}>
                  {role.map((role2, i) => (
                    <span key={role2}>
                      { (i ? ', ' : '') + role2 }
                    </span>
                  ))}
                </Text>
              </Box>
              <Box width={4/12}>
                <Allcaps color="blue">Technology</Allcaps>
                <Text color="heading" fontSize={3}>
                  {technology.map((technology2, i) => (
                    <span key={technology2}>
                      { (i ? ', ' : '') + technology2 }
                    </span>
                  ))}
                </Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Flex flexWrap="wrap" justifyContent="center">
          <Box width={[1, 9/12, 8/12, 6/12]}>
            <ProjectContent content={content} />
          </Box>
        </Flex>
      </article>
    </Wrap>
  )
};

const ProjectTemplate = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <ProjectPost
      content={post.htmlAst}
      contentComponent={HTMLContent}
      year={post.frontmatter.date}
      role={post.frontmatter.role}
      technology={post.frontmatter.technology}
      description={post.frontmatter.description}
      helmet={<Helmet title={`${post.frontmatter.title} | Project`} />}
      title={post.frontmatter.title}
    />
  )
}

export default ProjectTemplate;

ProjectPost.propTypes = {
  content: PropTypes.string.isRequired,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
};

export const pageQuery = graphql`
  query ProjectPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      htmlAst
      frontmatter {
        date(formatString: "YYYY")
        title
        description
        role
        technology
      }
    }
  }
`;