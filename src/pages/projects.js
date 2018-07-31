import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Img from "gatsby-image";
import { Heading, Text } from 'rebass';
import { Flex, Box } from 'grid-styled';
import ScrollAnimation from 'react-animate-on-scroll';

import WavesSVG from '../img/waves.svg';
import Nav from '../components/Nav';
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

export default class ProjectsPage extends Component {
  render() {
    const { data } = this.props;
    const { edges: dataObj } = data.allMarkdownRemark;
    const projects = dataObj.filter(project => project.node.frontmatter.templateKey === 'project-post');
    console.log(projects[0].node);

    return (
      <Transition background="#ccc">
        <Nav colorSmall="#181A1B" colorLarge="#181A1B" />
        <Section>
          <Flex justifyContent="center">
            <Box mt={5} mb={2}>
              <Heading fontSize={[5, 7]}>Selected Projects</Heading>
            </Box>
          </Flex>
          <Wrap my={2} justifyContent="center" flexWrap="wrap">
            {projects
              .map(({ node: project }) => (
                <Box key={project.fields.slug} width={[1, 1, 10/12]} my={2}>
                  <ScrollAnimation offset={0} duration={0.5} animateOnce={true} animateIn="fadeInUp">
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
            cardImage
            cardBackground
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
