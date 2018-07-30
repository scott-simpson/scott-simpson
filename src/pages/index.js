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

import '../css/index.css';

const Section = styled.section`
`;

const BlueBox = styled(Box)`
  background: #4C50FF;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  z-index: 1;
`;

const WavesContainer = styled(Box)`
  position: relative;
`;

const Waves = styled(WavesSVG)`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
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
      <Transition background="#ccc">
        <Nav colorSmall="#181A1B" colorLarge="#FFFFFF" />
        <Section>
          <Flex flexWrap="wrap">
            <Box width={[1, 1, 7/12]}>
              <Wrap>
                <Box ml={[0, '8.333%']} py={[4, 6]} width={[1, 1, 8/12]}>
                  <ScrollAnimation offset={0} animateOnce={true} duration={0.75} animateIn="fadeInUp">
                    <Heading fontFamily="serif" lineHeight={["1.6em", "1em"]} color="heading" fontSize={[7, 9, 10]}>{about.frontmatter.name}</Heading>
                    <Text my={[2, 4]} lineHeight={1} fontSize={[3, 4]}>Im Cofounder and Head of Product at <Anchor href="https://urbanstems.com">UrbanStems</Anchor>. My focus is on creating product design systems that help companies and teams scale.</Text>
                  </ScrollAnimation>
                </Box>
              </Wrap>
              <Wrap pt={[0, 2]} pb={[4, 5]} flexWrap="wrap">
                <Box pb={3} ml={[0, '8.333%']} width={[1, 3/12]}>
                  <ScrollAnimation offset={0} animateOnce={true} duration={0.75} delay={500} animateIn="fadeInUp">
                    <Allcaps fontSize={0} color="blue">Location</Allcaps>
                    <Text fontSize={[2, 3]}>{about.frontmatter.location}</Text>
                  </ScrollAnimation>
                </Box>
                <Box pb={3} width={[1, 3/12]}>
                  <ScrollAnimation offset={0} animateOnce={true} duration={0.75} delay={500} animateIn="fadeInUp">
                    <Allcaps fontSize={0} color="blue">Working At</Allcaps>
                    <Text fontSize={[2, 3]}>{about.frontmatter.working}</Text>
                  </ScrollAnimation>
                </Box>
                <Box pb={3} width={[1, 3/12]}>
                  <ScrollAnimation offset={0} animateOnce={true} duration={0.75} delay={500} animateIn="fadeInUp">
                    <Allcaps fontSize={0} color="blue">Countries Visited</Allcaps>
                    <Text fontSize={[2, 3]}>{about.frontmatter.countries}</Text>
                  </ScrollAnimation>
                </Box>
              </Wrap>
            </Box>
            <WavesContainer width={[1, 1, 5/12]}>
              <Img
                outerWrapperClassName="profileImgWrap fadeInUpAbsolute"
                sizes={this.props.data.profileImage.sizes}
              />
              <Waves ref={(component) => {this.waveSvg = component}} />
              <BlueBox />
            </WavesContainer>
          </Flex>
        </Section>
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
            cardImage
            cardBackground
            cardText
            client
            countries
            date(formatString: "YYYY")
            description
            location
            name
            shortDescription
            shortTitle
            templateKey
            title
            working
          }
        }
      }
    }
  }
`;
