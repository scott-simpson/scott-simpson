import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Heading, Text } from 'rebass';
import { Flex, Box } from 'grid-styled';

import WavesSVG from '../img/waves.svg';
import Content, { HTMLContent } from '../components/Content';
import Nav from '../components/Nav';
import Wrap from '../components/Wrap';
import Transition from '../components/Transition';

const Section = styled.section`
  background: ${props => props.theme.colors.beige};
`;

const WavesContainer = styled(Box)`
  position: relative;
`;

const Waves = styled(WavesSVG)`
  fill: #ccc;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <Transition>
      <Nav colorSmall="#37393C" colorLarge="#37393C" />
      <Section>
        <Wrap flexWrap="wrap">
          <WavesContainer width={[1, 1, 5/12]}>
            <Waves />
          </WavesContainer>
          <Box ml={[0, 0, "8.333%"]} mr={[0, 0, "8.333%"]} width={[1, 1, 5/12]} py={[4, 6]}>
            <Heading>Hello There</Heading>
            <Text my={[2, 4]} lineHeight={1} fontSize={[3, 4]}>Lorem ipsum dolor sit amet, est no nonumy salutandi constituto, ei mucius vocibus fastidii nec, ut omnis maiestatis eum. Ne mei modo periculis. Te eos fabellas elaboraret consequuntur, et eam verear aliquam consetetur. Meis laudem placerat no nam, eu ipsum oratio referrentur pri, et nec latine oblique.</Text>
            <Text my={[2, 4]} lineHeight={1} fontSize={[3, 4]}>In sed corpora constituto reformidans. Ullum sanctus contentiones et mea, per ex ullum iusto veniam. Eam ad porro aeterno, maiorum abhorreant ne duo, ei mea salutatus scribentur. Eu sit esse ancillae.</Text>
            <PageContent className="content" content={content} />
          </Box>
        </Wrap>
      </Section>
    </Transition>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
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
      }
    }
  }
`
