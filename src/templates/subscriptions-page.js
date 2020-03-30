import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Heading, Text, Flex, Box } from 'rebass';
import Img from 'gatsby-image';
import ScrollAnimation from 'react-animate-on-scroll';

import SEO from '../components/Seo';
import Layout from '../components/Layout';
import AllcapsBorder from '../components/AllCapsBorder';
import Content, { HTMLContent } from '../components/Content';
import Wrap from '../components/Wrap';

import IconMerchandising from '../img/icon-merchandising.svg';
import IconOperations from '../img/icon-operations.svg';
import IconMarketing from '../img/icon-marketing.svg';
import IconEngineering from '../img/icon-engineering.svg';
import IconCustomerCare from '../img/icon-customer-care.svg';
import IconBusiness from '../img/icon-business-intelligence.svg';

const Section = styled.section`
  background: ${props => props.theme.colors.white};
  margin: auto;
  max-width: 1600px;
`;

const TeamIconContainer = styled(Box)`
  width: 110px;
  height: 110px;
`;

export const SubscriptionsPageTemplate = ({ title, intro, content, contentComponent, data, whyTitle, whyIntro, why1, why2, merchandising, customerCare, operations, engineering, business, marketing }) => {
  const PageContent = contentComponent || Content

  return (
    <Layout>
      <SEO title={`Scott Simpson. About.`} keywords={[`scott simpson`, `ux`, `product`, `design`, `dc`]} />
      <Section>
        <Flex flexWrap="wrap">
          <Box bg="white" alignItems="horizontal" width={[11/12, 11/12, 10/12]}>
            <ScrollAnimation offset={0} animateOnce={true} duration={0.75} animateIn="fadeInUp">
              <Wrap>
                <Box ml={[0]} py={["7%", "10%"]} width={[1, 1, 9/12]}>
                  <Heading pb={3} color="heading" fontFamily="serif" fontSize={[7, 9]} lineHeight="1.25em">{title}</Heading>
                  <Text fontSize={[4, 6]} pt={2} pb={4}>{intro}</Text>
                </Box>
              </Wrap>
            </ScrollAnimation>
          </Box>
        </Flex>
        <Box py={["8%", "6%"]} >
          <Wrap flexWrap="wrap" justifyContent="center">
            <Box width={[12/12, 10/12, 8/12, 6/12]} pr={[0,0,4]}>
              <Heading pb={3} color="heading" fontFamily="serif" fontSize={[5, 7]} lineHeight="1.25em">{whyTitle}</Heading>
              <Text fontSize={[2, 4]}>{whyIntro}</Text>
            </Box>
            <Box width={[12/12, 10/12, 4/12, 3/12]} pt={4} pl={[0,0,4]}>
              <AllcapsBorder color="blue">Goals</AllcapsBorder>
              <Text pt={3}>Increase repeat purchase rate:</Text>
              <Text fontSize={[6, 8]}>3x/yr &rarr; 4x/yr</Text>
              <Text pt={3}>Increase average order size:</Text>
              <Text fontSize={[6, 8]}>$65 &rarr; $80</Text>
            </Box>
          </Wrap>
        </Box>
        <Box>
          <Wrap flexWrap="wrap" justifyContent="center">

          </Wrap>
        </Box>
        <Box bg="lightGreen" py={["12%", "6%"]}>
          <Wrap flexWrap="wrap" justifyContent="center">
            <Box alignItems="horizontal" width={[12/12, 10/12, 12/12]}>
              <ScrollAnimation offset={0} animateOnce={true} duration={0.75} animateIn="fadeInUp">
                <Heading pb={3} color="heading" fontFamily="serif" fontSize={[5, 7]} lineHeight="1.25em">Stakeholders</Heading>
              </ScrollAnimation>
          </Box>
            <Box width={[12/12, 10/12, 6/12]} px={[0, 0, 4]} py={[3, 3, 4]}>
              <ScrollAnimation offset={0} animateOnce={true} duration={0.75} animateIn="fadeInUp">
                <Flex>
                  <TeamIconContainer mr={3}>
                    <IconCustomerCare />
                  </TeamIconContainer>
                  <Box>
                    <Heading color="heading" fontFamily="serif" fontSize={[3, 5]} mb={1}>{customerCare.team}</Heading>
                    <Text fontSize={[2, 4]}>{customerCare.description}</Text>
                  </Box>
                </Flex>
              </ScrollAnimation>
            </Box>
            <Box width={[12/12, 10/12, 6/12]} px={[0, 0, 4]} py={[3, 3, 4]}>
              <ScrollAnimation offset={0} animateOnce={true} duration={0.75} animateIn="fadeInUp">
                <Flex>
                  <TeamIconContainer mr={3}>
                    <IconMarketing />
                  </TeamIconContainer>
                  <Box>
                    <Heading color="heading" fontFamily="serif" fontSize={[3, 5]} mb={1}>{marketing.team}</Heading>
                    <Text fontSize={[2, 4]}>{marketing.description}</Text>
                  </Box>
                </Flex>
              </ScrollAnimation>
            </Box>
            <Box width={[12/12, 10/12, 6/12]} px={[0, 0, 4]} py={[3, 3, 4]}>
              <ScrollAnimation offset={0} animateOnce={true} duration={0.75} animateIn="fadeInUp">
                <Flex>
                  <TeamIconContainer mr={3}>
                    <IconEngineering />
                  </TeamIconContainer>
                  <Box>
                    <Heading color="heading" fontFamily="serif" fontSize={[3, 5]} mb={1}>{engineering.team}</Heading>
                    <Text fontSize={[2, 4]}>{engineering.description}</Text>
                  </Box>
                </Flex>
              </ScrollAnimation>
            </Box>
            <Box width={[12/12, 10/12, 6/12]} px={[0, 0, 4]} py={[3, 3, 4]}>
              <ScrollAnimation offset={0} animateOnce={true} duration={0.75} animateIn="fadeInUp">
                <Flex>
                  <TeamIconContainer mr={3}>
                    <IconBusiness />
                  </TeamIconContainer>
                  <Box>
                    <Heading color="heading" fontFamily="serif" fontSize={[3, 5]} mb={1}>{business.team}</Heading>
                    <Text fontSize={[2, 4]}>{business.description}</Text>
                  </Box>
                </Flex>
              </ScrollAnimation>
            </Box>
            <Box width={[12/12, 10/12, 6/12]} px={[0, 0, 4]} py={[3, 3, 4]}>
             <ScrollAnimation offset={0} animateOnce={true} duration={0.75} animateIn="fadeInUp">
                <Flex>
                  <TeamIconContainer mr={3}>
                    <IconMerchandising />
                  </TeamIconContainer>
                  <Box>
                    <Heading color="heading" fontFamily="serif" fontSize={[3, 5]} mb={1}>{merchandising.team}</Heading>
                    <Text fontSize={[2, 4]}>{merchandising.description}</Text>
                  </Box>
                </Flex>
              </ScrollAnimation>
            </Box>
            <Box width={[12/12, 10/12, 6/12]} px={[0, 0, 4]} py={[3, 3, 4]}>
              <ScrollAnimation offset={0} animateOnce={true} duration={0.75} animateIn="fadeInUp">
                <Flex>
                  <TeamIconContainer mr={3}>
                    <IconOperations />
                  </TeamIconContainer>
                  <Box>
                    <Heading color="heading" fontFamily="serif" fontSize={[3, 5]} mb={1}>{operations.team}</Heading>
                    <Text fontSize={[2, 4]}>{operations.description}</Text>
                  </Box>
                </Flex>
              </ScrollAnimation>
            </Box>
          </Wrap>
        </Box>
      </Section>
    </Layout>
  )
}

SubscriptionsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  content: PropTypes.shape({
    children: PropTypes.array,
  }),
  contentComponent: PropTypes.func,
}

const SubscriptionsPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <SubscriptionsPageTemplate
      contentComponent={HTMLContent}
      data={data}
      title={post.frontmatter.title}
      intro={post.frontmatter.intro}
      content={post.htmlAst}
      whyTitle={post.frontmatter.whyTitle}
      whyIntro={post.frontmatter.whyIntro}
      why1={post.frontmatter.why1}
      why2={post.frontmatter.why2}
      merchandising={post.frontmatter.merchandising}
      customerCare={post.frontmatter.customerCare}
      marketing={post.frontmatter.marketing}
      operations={post.frontmatter.operations}
      business={post.frontmatter.business}
      engineering={post.frontmatter.engineering}
    />
  )
}

SubscriptionsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default SubscriptionsPage

export const subscriptionsPageQuery = graphql`
  query SubscriptionsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      htmlAst
      frontmatter {
        title
        intro
        whyTitle
        whyIntro
        why1
        why2
        merchandising {
          team
          description
        }
        marketing {
          team
          description
        }
        customerCare {
          team
          description
        }
        operations {
          team
          description
        }
        business {
          team
          description
        }
        engineering {
          team
          description
        }
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