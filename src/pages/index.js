import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Heading, Text, Flex, Box } from 'rebass';
import ScrollAnimation from 'react-animate-on-scroll';

import SEO from '../components/Seo';
import Layout from '../components/Layout';
import WavesSVG from '../img/waves.svg';
import Allcaps from '../components/Allcaps';
import Wrap from '../components/Wrap';
import Anchor from '../components/Anchor';
import Project from '../components/Project';
// import Transition from '../components/Transition';

const Section = styled.section`
  background: ${props => props.theme.colors.white};
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

const ProfileImage = styled(Img)`
  box-shadow: 0px 20px 40px -10px rgba(0,0,0,0.1);
  left: 50%;
  top: -8%;
  transform: translateX(-50%);
  width: 90%;
  z-index: 3;
  @media (min-width: ${props => props.theme.breakpoints[0]}) {
     width: 80%;
   }
   @media (min-width: ${props => props.theme.breakpoints[1]}) {
     left: -10%;
     top: 50%;
     transform: translateY(-50%);
     width: 100%;
   }
`;

const Index = ({ data }) => {
  console.log(data);
  const { edges: dataObj } = data.allMarkdownRemark;
  const projects = dataObj.filter(project => project.node.frontmatter.templateKey === 'project-post');
  const aboutObj = dataObj.filter(aboutObj => aboutObj.node.frontmatter.templateKey === 'about-page');
  const about = aboutObj[0].node;
  console.log(projects[0].node);
  console.log(about);
  return (
    <Layout>
      <SEO title="Scott Simpson. UX and Product Designer. DC" keywords={[`scott simpson`, `ux`, `product`, `design`, `dc`]} />
      <Section>
        <Wrap flexWrap="wrap">
          <Box py={[2, 2, 4]} mr={[0, '8.33%']} width={[1, 1, 8/10, 6/12]}>
              <Box mr={[0, '16.66%']} py={["7%", "4%", "8%", "18%",]} width={1}>
                <ScrollAnimation offset={0} animateOnce={true} duration={0.75} animateIn="fadeInUp">
                  <Heading fontFamily="serif" lineHeight={["1.25em"]} color="heading" fontSize={[7, 8, 9]}>Hi, I’m {about.frontmatter.name} &mdash; <br />A UX and Product Designer.</Heading>
                  <Text my={[2, 4]} lineHeight={1} fontSize={[3, 4, 5]}>I'm a consultant at <Anchor href="https://citra.co">Citra</Anchor> and previously Cofounder/Head of Product at <Anchor href="https://urbanstems.com">UrbanStems</Anchor>. My focus is building user-centric products and experiences that make a positive impact and help companies scale.</Text>
                </ScrollAnimation>
              </Box>
              <Flex flexWrap="wrap">
                <Box pb={3} width={[1, 4/12]}>
                  <ScrollAnimation offset={0} animateOnce={true} duration={0.75} delay={500} animateIn="fadeInUp">
                    <Allcaps fontSize={0}>Location</Allcaps>
                    <Text fontSize={[2, 3]}>{about.frontmatter.location}</Text>
                  </ScrollAnimation>
                </Box>
                <Box pb={3} ml={[0, '8.333%']} width={[1, 3/12]}>
                  <ScrollAnimation offset={0.} animateOnce={true} duration={0.75} delay={600} animateIn="fadeInUp">
                    <Allcaps fontSize={0}>Working At</Allcaps>
                    <Text fontSize={[2, 3]}>{about.frontmatter.working}</Text>
                  </ScrollAnimation>
                </Box>
                <Box pb={3} ml={[0, '8.333%']} width={[1, 3/12]}>
                  <ScrollAnimation offset={0} animateOnce={true} duration={0.75} delay={700} animateIn="fadeInUp">
                    <Allcaps fontSize={0}>Countries Visited</Allcaps>
                    <Text fontSize={[2, 3]}>{about.frontmatter.countries}</Text>
                  </ScrollAnimation>
                </Box>
              </Flex>
          </Box>
          <WavesContainer width={[1, 1, 5/12]}>
            <ProfileImage fluid={data.file.childImageSharp.fluid} />
            <Waves />
            <BlueBox />
          </WavesContainer>
        </Wrap>
      </Section>
      <Section>
        <Wrap my={["4%", "8%"]} justifyContent="center" flexWrap="wrap">
          <Box width={1}>
            <Heading color="heading" fontFamily="serif" pb={[2, 4]} fontSize={[5, 8]} textAlign="center">Recent Projects</Heading>
          </Box>
          {projects
            .map(({ node: project }) => {
              if (project.frontmatter.shortTitle === 'Work in Progress') {
                return null
              } else {
                return (
                <Box key={project.fields.slug} width={[1, 1, 11/12]} my={2}>
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
              )
          }})}
        </Wrap>
      </Section>
    </Layout>
  );
}

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { regex: "/scott.jpg/" }) {
          childImageSharp {
            fluid(maxWidth: 1240) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                cardBackground
                cardText
                cardImage {
                  childImageSharp {
                    fluid(maxWidth: 1240) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
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
    `}
    render={data => <Index data={data} />}
  />
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default IndexPage;
