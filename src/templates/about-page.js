import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Heading, Text, Link, Flex, Box } from 'rebass';

import Layout from '../components/Layout';
import WavesSVG from '../img/waves.svg';
import Content, { HTMLContent } from '../components/Content';
import Wrap from '../components/Wrap';
import Transition from '../components/Transition';

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

export const AboutPageTemplate = ({ title, intro, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <Layout>
      <Transition>
        <Section>
          <Flex flexWrap="wrap">
            <Box width={[1, 1, 7/12]}>
              <Wrap>
                <Box ml={[0, '8.333%']} py={["7%", "14%"]} width={[1, 1, 9/12]}>
                  <Text fontSize={[5, 7]} pt={2} pb={4}>{intro}</Text>
                  <PageContent className="content" content={content} />
                </Box>
              </Wrap>
            </Box>
            <WavesContainer width={[1, 1, 5/12]}>
              <Waves />
            </WavesContainer>
          </Flex>
        </Section>
        <Section>
          <Wrap flexWrap="wrap">
            <Box width={6/12}>
              <Flex flexWrap="wrap">
                <Box width={4/12}>2014 - Present</Box>
                <Box width={8/12} pb={4}>
                  <Heading fontSize={[1, 2]} pb={1}><Link color="heading" href="https://urbanstems.com">UrbanStems</Link></Heading>
                  <Text>Cofounder & Head of Product</Text>
                </Box>
                <Box width={4/12}>2012 - 2013</Box>
                <Box width={8/12} pb={4}>
                  <Heading fontSize={[1, 2]} pb={1}><Link color="heading" href="https://isl.co">iStrategyLabs</Link></Heading>
                  <Text>Designer</Text>
                </Box>
                <Box width={4/12}>2010 - 2012</Box>
                <Box width={8/12} pb={4}>
                  <Heading fontSize={[1, 2]} pb={1}><Link color="heading" href="https://scottsimpson.co">Scott Simpson</Link></Heading>
                  <Text>Freelance Designer</Text>
                </Box>
                <Box width={4/12}>2009 - 2010</Box>
                <Box width={8/12} pb={4}>
                  <Heading fontSize={[1, 2]} pb={1}><Link color="heading" href="http://southpawagency.com/">SouthPaw (Nexus/H)</Link></Heading>
                  <Text>Designer</Text>
                </Box>
              </Flex>
            </Box>
          </Wrap>
        </Section>
      </Transition>
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
    }
  }
`
