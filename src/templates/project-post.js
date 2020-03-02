import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Heading, Text, Flex, Box } from 'rebass';
import ScrollAnimation from 'react-animate-on-scroll';

import SEO from '../components/Seo';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import Allcaps from '../components/Allcaps';
import Wrap from '../components/Wrap';
// import Transition from '../components/Transition';

export const ProjectPost = ({
  content,
  contentComponent,
  description,
  title,
  year,
  role,
  technology,
  client,
  helmet,
}) => {
  const ProjectContent = contentComponent || Content;
  return (
    <Layout>
      <SEO title={`Scott Simpson. ${title} - Project.`} keywords={[`scott simpson`, `ux`, `product`, `design`, `dc`]} />
      <Wrap>
        <article>
          <Flex flexWrap="wrap" justifyContent="center">
            <Box pt={[5, 6]} pb={[3, 4]} width={[1, 9/12, 8/12, 6/12]}>
              <ScrollAnimation offset={0} duration={0.5} animateOnce={true} animateIn="fadeInUp"><Heading color="heading" fontFamily="serif" fontSize={[7, 8, 9]} lineHeight="1.25em">{title}</Heading></ScrollAnimation>
              <ScrollAnimation delay={500} offset={0} duration={0.5} animateOnce={true} animateIn="fadeInUp"><Text pt={[3, 4]} pb={4} fontSize={[4, 5]}>{description}</Text></ScrollAnimation>
              <Flex pt={2} flexWrap="wrap">
                <Box pb={3} width={[1, 3/12]}>
                  <ScrollAnimation offset={0} delay={500} duration={0.5} animateOnce={true} animateIn="fadeInUp">
                    <Allcaps fontSize={0} color="blue">Client</Allcaps>
                    <Text color="heading" fontSize={[1, 3]}>{client}</Text>
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
                <Box pb={3} width={[1, 4/12]}>
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
              <ScrollAnimation offset={0} delay={750} duration={0.5} animateOnce={true} animateIn="fadeInUp">
                <ProjectContent content={content} />
              </ScrollAnimation>
            </Box>
          </Flex>
        </article>
      </Wrap>
    </Layout>
  )
};

const ProjectTemplate = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <ProjectPost
      content={post.htmlAst}
      contentComponent={HTMLContent}
      year={post.frontmatter.date}
      role={post.frontmatter.role}
      client={post.frontmatter.client}
      technology={post.frontmatter.technology}
      description={post.frontmatter.description}
      helmet={<Helmet title={`${post.frontmatter.title} | Project`} />}
      title={post.frontmatter.title}
    />
  );
};

export default ProjectTemplate;

ProjectTemplate.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        date: PropTypes.string,
        description: PropTypes.string,
        role: PropTypes.array,
        technology: PropTypes.array,
        client: PropTypes.string,
        title: PropTypes.string,
      }),
      helmet: PropTypes.instanceOf(Helmet),
    }),
  }),
};

export const pageQuery = graphql`
  query ProjectPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      htmlAst
      frontmatter {
        date(formatString: "YYYY")
        title
        client
        description
        role
        technology
      }
    }
  }
`;
