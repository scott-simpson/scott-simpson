import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Heading, Text, Flex, Box } from 'rebass';
import ScrollAnimation from 'react-animate-on-scroll';

import Layout from '../components/Layout';
import Wrap from '../components/Wrap';
import Project from '../components/Project';
// import Transition from '../components/Transition';

const Section = styled.section`
  background: ${props => props.theme.colors.white};
  margin: auto;
  max-width: 1600px;
`;

const Projects = ({ data }) => {
  const { edges: dataObj } = data.allMarkdownRemark;
  const projects = dataObj.filter(project => project.node.frontmatter.templateKey === 'project-post');
  console.log(projects[0].node);

  return (
    <Layout>
      <Section>
        <Flex my={["4%", "4%"]} justifyContent="center">
          <Box>
            <ScrollAnimation offset={0} duration={0.75} animateOnce={true} animateIn="fadeInUp">
              <Heading  color="heading" fontFamily="serif" textAlign="center" fontSize={[7, 8]}>Projects</Heading>
              <Text fontSize={[3, 4]} textAlign="center">A little taste of some of the work I've been doing</Text>
            </ScrollAnimation>
          </Box>
        </Flex>
        <Wrap my={2} justifyContent="center" flexWrap="wrap">
          {projects
            .map(({ node: project }) => (
              <Box key={project.fields.slug} width={[1, 1, 11/12]} my={2}>
                <ScrollAnimation offset={0} delay={500} duration={0.75} animateOnce={true} animateIn="fadeInUp">
                  <Project
                    slug={project.fields.slug}
                    cardImage={project.frontmatter.cardImage}
                    cardBackground={project.frontmatter.cardBackground}
                    cardText={project.frontmatter.cardText}
                    client={project.frontmatter.client}
                    title={project.frontmatter.shortTitle}
                    description={project.frontmatter.shortDescription}
                    date={project.frontmatter.date}
                  />
                </ScrollAnimation>
              </Box>
            ))
          }
        </Wrap>
      </Section>
    </Layout>
  );
};

const ProjectsPage = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                cardBackground
                cardImage {
                  childImageSharp {
                    fluid(maxWidth: 1240) {
                      ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
                cardText
                client
                date(formatString: "YYYY")
                shortDescription
                shortTitle
                templateKey
              }
            }
          }
        }
      }
    `}
    render={data => <Projects data={data} />}
  />
);

ProjectsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default ProjectsPage;
