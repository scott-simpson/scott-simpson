import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Img from "gatsby-image";
import { Heading, Text } from 'rebass';
import { Flex, Box } from 'grid-styled';
import ScrollAnimation from 'react-animate-on-scroll';

import WavesSVG from '../img/waves.svg';
import Allcaps from '../components/Allcaps';
import Wrap from '../components/Wrap';
import Anchor from '../components/Anchor';
import Project from '../components/Project';
import Transition from '../components/Transition';

const Section = styled.section`
  background: ${props => props.theme.colors.white};
  margin: auto;
  max-width: 1600px;
`;

const HeadingSerif = styled(Heading)`
  font-family: ${props => props.theme.fonts.serif}; 
`;

export default class ProjectsPage extends Component {
  render() {
    const { data } = this.props;
    const { edges: dataObj } = data.allMarkdownRemark;
    const projects = dataObj.filter(project => project.node.frontmatter.templateKey === 'project-post');
    console.log(projects[0].node);

    return (
      <Transition background="#ccc">
        <Section>
          <Flex my={["4%", "6%"]} justifyContent="center">
            <Box>
              <ScrollAnimation offset={0} duration={0.75} animateOnce={true} animateIn="fadeInUp">
                <HeadingSerif textAlign="center" fontSize={[7, 8, 9]}>Projects</HeadingSerif>
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
      </Transition>
    );
  }
};

ProjectsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export const pageQuery = graphql`
  query ProjectsQuery {
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
                sizes(maxWidth: 1240) {
                  ...GatsbyImageSharpSizes
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
`;
