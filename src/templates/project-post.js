import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Heading, Text } from 'rebass';
import { Flex, Box } from 'grid-styled';
import ScrollAnimation from 'react-animate-on-scroll';

import Content, { HTMLContent } from '../components/Content';
import Allcaps from '../components/Allcaps';
import Wrap from '../components/Wrap';
import Transition from '../components/Transition';

const HeadingSerif = styled(Heading)`
  font-family: ${props => props.theme.fonts.serif}; 
`;

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
    <Transition>
      {helmet || ''}
      <Wrap>
        <article>
          <Flex flexWrap="wrap" justifyContent="center">
            <Box pt={[5, 6]} pb={[3, 4]} width={[1, 9/12, 8/12, 6/12]}>
              <ScrollAnimation offset={0} duration={0.5} animateOnce={true} animateIn="fadeInUp"><HeadingSerif color="heading" fontSize={[7, 8, 9]}>{title}</HeadingSerif></ScrollAnimation>
              <ScrollAnimation delay={500} offset={0} duration={0.5} animateOnce={true} animateIn="fadeInUp"><Text pt={[3, 4]} pb={4} fontSize={[4, 5]}>{description}</Text></ScrollAnimation>
              <Flex pt={2} flexWrap="wrap">
                <Box pb={3} width={[1, 2/12]}>
                  <ScrollAnimation offset={0} delay={500} duration={0.5} animateOnce={true} animateIn="fadeInUp">
                    <Allcaps fontSize={0} color="blue">Year</Allcaps>
                    <Text color="heading" fontSize={[1, 3]}>{year}</Text>
                  </ScrollAnimation>
                </Box>
                <Box pb={3} width={[1, 5/12]}>
                  <ScrollAnimation offset={0} delay={500} duration={0.5} animateOnce={true} animateIn="fadeInUp">
                    <Allcaps fontSize={0} color="blue">Role</Allcaps>
                    <Text color="heading" fontSize={[1, 3]}>
                      {role.map((role2, i) => (
                        <span key={role2}>
                          { (i ? ', ' : '') + role2 }
                        </span>
                      ))}
                    </Text>
                  </ScrollAnimation>
                </Box>
                <Box pb={3} width={[1, 5/12]}>
                  <ScrollAnimation offset={0} delay={500} duration={0.5} animateOnce={true} animateIn="fadeInUp">
                    <Allcaps fontSize={0} color="blue">Technology</Allcaps>
                    <Text color="heading" fontSize={[1, 3]}>
                      {technology.map((technology2, i) => (
                        <span key={technology2}>
                          { (i ? ', ' : '') + technology2 }
                        </span>
                      ))}
                    </Text>
                  </ScrollAnimation>
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
    </Transition>
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