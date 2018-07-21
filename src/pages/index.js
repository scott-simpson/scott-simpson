import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Img from "gatsby-image";
import { Heading, Text } from 'rebass';
import { Flex, Box } from 'grid-styled';
import ScrollAnimation from 'react-animate-on-scroll';
import WavesSVG from '../img/waves.svg';

import Wrap from '../components/Wrap';
import Anchor from '../components/Anchor';
import Project from '../components/Project';

import '../css/index.css';

const Section = styled.section`
  background: ${props => props.theme.colors.beige};
`;

const Article = styled.article`
  background: ${props => props.theme.colors.gray};
  padding: 32px;
`;

const BlueBox = styled(Box)`
  position: absolute;
  height: 100%;
  width: 20px;
  top: 0;
  right: 0;
  z-index: 1;
`;

const WavesContainer = styled(Box)`
  background: #4C50FF;
  position: relative;
`;

const Waves = styled(WavesSVG)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;

export default class IndexPage extends Component {
  render() {
    const { data } = this.props;
    const { edges: dataObj } = data.allMarkdownRemark;
    const projects = dataObj.filter(project => project.node.frontmatter.templateKey === 'project-post');
    const aboutObj = dataObj.filter(aboutObj => aboutObj.node.frontmatter.templateKey === 'about-page');
    const about = aboutObj[0].node;
    console.log(projects[0].node);
    console.log(about);

    return (
      <div>
        <Section>
          <Flex flexWrap="wrap">
            <Box width={[1, 8/12]}>
              <Wrap>
                <Box ml={[0, '8.333%']} py={[5, 6]} width={[1, 9/12, 7/12]}>
                  <ScrollAnimation animateIn="fadeInUp">
                    <Heading color="heading" fontSize={[5, 7]}>{about.frontmatter.name}</Heading>
                    <Text fontSize={[2, 3, 4]}>{about.frontmatter.title}</Text>
                    <Text my={[2, 4]} lineHeight={1} fontSize={[2, 3, 4]}>Im Cofounder and Head of Product at <Anchor href="https://urbanstems.com">UrbanStems</Anchor>. My focus is on creating product design systems that help companies and teams scale.</Text>
                  </ScrollAnimation>
                </Box>
              </Wrap>
              <Wrap pt={[0, 3]} pb={[4, 6]} flexWrap="wrap">
                <Box ml={[0, '8.333%']} width={[1, 3/12]}>
                  <ScrollAnimation delay={300} animateIn="fadeInUp">
                    <Text fontSize={[1, 2]} color="heading" fontWeight="medium">Current Location</Text>
                    <Text fontSize={[2, 3]}>{about.frontmatter.location}</Text>
                  </ScrollAnimation>
                </Box>
                <Box width={[1, 3/12]}>
                  <ScrollAnimation delay={300} animateIn="fadeInUp">
                    <Text fontSize={[1, 2]} color="heading" fontWeight="medium">Working At</Text>
                    <Text fontSize={[2, 3]}>{about.frontmatter.working}</Text>
                  </ScrollAnimation>
                </Box>
                <Box width={[1, 3/12]}>
                  <ScrollAnimation delay={300} animateIn="fadeInUp">
                    <Text fontSize={[1, 2]} color="heading" fontWeight="medium">Countries Visited</Text>
                    <Text fontSize={[2, 3]}>{about.frontmatter.countries}</Text>
                  </ScrollAnimation>
                </Box>
              </Wrap>
            </Box>
            <WavesContainer width={[1, 4/12]}>
              <Img
                fadeIn={true}
                outerWrapperClassName="profileImgWrap fadeInUp"
                sizes={this.props.data.profileImage.sizes}
              />
              <Waves />
              <BlueBox />
            </WavesContainer>
          </Flex>
        </Section>
        <Wrap>
          {projects
            .map(({ node: project }) => (
              <Project key={project.fields.slug}
                slug={project.fields.slug}
                title={project.frontmatter.shortTitle}
                description={project.frontmatter.shortDescription}
                date={project.frontmatter.date}
              />
            ))
          }
        </Wrap>
      </div>
    );
  }
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export const pageQuery = graphql`
  query IndexQuery {
    profileImage: imageSharp(id: { regex: "/scott.jpg/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            countries
            description
            shortDescription
            shortTitle
            location
            name
            templateKey
            title
            working
            date(formatString: "YYYY")
          }
        }
      }
    }
  }
`;
