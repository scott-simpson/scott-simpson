import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Heading, Text, Link, Flex, Box } from 'rebass';
import Img from 'gatsby-image';
import ScrollAnimation from 'react-animate-on-scroll';

import Layout from '../components/Layout';
import WavesSVG from '../img/waves.svg';
import Content, { HTMLContent } from '../components/Content';
import Wrap from '../components/Wrap';
// import Transition from '../components/Transition';

const Section = styled.section`
  background: ${props => props.theme.colors.white};
  margin: auto;
  max-width: 1600px;
`;

const WavesContainer = styled(Box)`
  background: ${props => props.theme.colors.beige};
  position: relative;
`;

const Waves = styled(WavesSVG)`
  fill: #E0D8D3;
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
     right: -10%;
     left: inherit;
     top: 50%;
     transform: translateY(-50%);
     width: 100%;
   }
`;

export const AboutPageTemplate = ({ title, intro, content, contentComponent, data }) => {
  const PageContent = contentComponent || Content

  return (
    <Layout>
      <Section>
        <Flex flexWrap="wrap">
          <WavesContainer width={[1, 1, 5/12]}>
              <ProfileImage fluid={data.file.childImageSharp.fluid} />
            <Waves />
          </WavesContainer>
          <Box bg="white" alignItems="horizontal" width={[11/12, 11/12, 7/12]}>
            <ScrollAnimation offset={0} animateOnce={true} duration={0.75} animateIn="fadeInUp">
              <Wrap>
                <Box ml={[0, '16.667%']} py={["7%", "10%"]} width={[1, 1, 9/12]}>
                  <Heading pb={3} color="heading" fontFamily="serif" fontSize={[7, 8]} lineHeight="1.25em">About Me</Heading>
                  <Text fontSize={[4, 6]} pt={2} pb={4}>{intro}</Text>
                  <PageContent className="content" content={content} />
                </Box>
              </Wrap>
            </ScrollAnimation>
          </Box>
        </Flex>
      </Section>
    </Layout>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  content: PropTypes.shape({
    children: PropTypes.array,
  }),
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <AboutPageTemplate
      contentComponent={HTMLContent}
      data={data}
      title={post.frontmatter.title}
      intro={post.frontmatter.intro}
      content={post.htmlAst}
    />
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      htmlAst
      frontmatter {
        title
        intro
      }
    },
    file(relativePath: { regex: "/scott.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1240) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
