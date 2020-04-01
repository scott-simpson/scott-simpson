import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Heading, Text, Flex, Box } from 'rebass';
import Img from 'gatsby-image';
import ScrollAnimation from 'react-animate-on-scroll';

import SEO from '../components/Seo';
import Layout from '../components/Layout';
import Allcaps from '../components/Allcaps';
import AllcapsBorder from '../components/AllcapsBorder';
import Content, { HTMLContent } from '../components/Content';
import Wrap from '../components/Wrap';

import IconMerchandising from '../img/icon-merchandising.svg';
import IconOperations from '../img/icon-operations.svg';
import IconMarketing from '../img/icon-marketing.svg';
import IconEngineering from '../img/icon-engineering.svg';
import IconCustomerCare from '../img/icon-customer-care.svg';
import IconBusiness from '../img/icon-business-intelligence.svg';
import IconDesign from '../img/icon-design.svg';
import IconStoryblocks from '../img/icon-storyblocks.svg';

import IconMedia from '../img/icon-media.svg';
import IconSearch from '../img/icon-search.svg';
import IconCasette from '../img/icon-casette.svg';
import IconCamera from '../img/icon-camera.svg';
import IconPersonalization from '../img/icon-personalization.svg';

import IconPurchase from '../img/purchase.svg';
import IconCart from '../img/cart.svg';

const Section = styled.section`
  background: ${props => props.theme.colors.white};
  margin: auto;
  max-width: 1600px;
`;

const TeamIconContainer = styled(Box)`
  width: 110px;
  height: 110px;
`;

const Part1Box = styled(Box)`
  background-color: #f8e7e0;
`;

const Part2Box = styled(Box)`
  background-color: #1f282f;
`;

const StoryblocksContainer = styled(Box)`
  display: inline-block;
  width: 225px;
  height: auto;
  @media (min-width: ${props => props.theme.breakpoints[0]}) {
    width: 300px;
  }
  & svg {
    max-width: 100%;
    position: relative;
    top: 0.45em;
    height: auto;
  }
`;

export const StoryblocksPageTemplate = ({ title, intro, content, contentComponent, data, stake1, stake2, part1Image, part2Image, whyTitle, whyIntro, why1, why1Photo, why2, why2Photo, merchandising, customerCare, operations, engineering, business, marketing }) => {
  const PageContent = contentComponent || Content

  return (
    <Layout>
      <SEO title={`Scott Simpson. About.`} keywords={[`scott simpson`, `ux`, `product`, `design`, `dc`]} />
        <Box bg="lightGreen"  py={["20%", "10%", "6%"]}>
        <Flex flexWrap="wrap">
          <Box alignItems="horizontal" width={1}>
            <ScrollAnimation offset={0} animateOnce={true} duration={0.75} animateIn="fadeInUp">
              <Wrap justifyContent="center">
                <Box ml={[0]} py={["7%", "10%"]} width={1}>
                  <Heading textAlign="center" pb={3} color="heading" fontFamily="serif" fontSize={[7, 9]} lineHeight="1.25em">Hey there,  <StoryblocksContainer pt={2}><IconStoryblocks /></StoryblocksContainer></Heading>
                  <Text textAlign="center" fontSize={[4, 6]} pt={2} pb={4}>Here's a story about a project that didn't go quite as planned...<br />And some ideas on how we can collaborate together.</Text>
                </Box>
              </Wrap>
            </ScrollAnimation>
          </Box>
        </Flex>
        </Box>
      <Section>
        <Box py={["8%", "3%"]}>
            <Part1Box width={1}>
              <Flex flexWrap="wrap" alignItems="center">
                <Box p={[4, 5]} order={[2, 2, 1]} width={[1, 1, 5/12]}>
                  <Heading color="heading" fontFamily="serif" fontSize={[4, 6]}>Part 1</Heading>
                  <Heading color="heading" fontFamily="serif" lineHeight="1.25em" fontSize={[7, 9]} pb={2}>UrbanStems Subscriptions</Heading>
                  <Text fontSize={[2, 4]}>A failed launch and learning from our customers.</Text>
                </Box>
                <Box order={[1, 1, 2]} width={[1, 1, 7/12]}>
                  <Img
                    fluid={part1Image.childImageSharp.fluid}
                    alt={title}
                  />
                </Box>
              </Flex>
            </Part1Box>
        </Box>
        <Box py={["8%", "6%"]} >
          <Wrap flexWrap="wrap" justifyContent="center">
            <Box width={1}>
              <Heading textAlign="center" pb={4} color="heading" fontFamily="serif" fontSize={[7, 9]} lineHeight="1.25em">{whyTitle}</Heading>
            </Box>
            <Box width={[12/12, 10/12, 8/12, 6/12]} pr={[0,0,4]}>
              <Text fontSize={[2, 4]}>{whyIntro}</Text>
            </Box>
            <Box width={[12/12, 10/12, 4/12, 4/12]} pl={[0,0,4]}>
              <AllcapsBorder>Goals</AllcapsBorder>
              <Flex alignItems="center">
                <Box mr={3} mt={3}><IconPurchase /></Box>
                <Box>
                  <Text pt={3}>Increase repeat purchase rate:</Text>
                  <Text fontSize={[6, 8]}>3x/yr &rarr; 4x/yr</Text>
                </Box>
              </Flex>
              <Flex pt={3} alignItems="center">
                <Box mr={3} mt={1}><IconCart /></Box>
                <Box>
                  <Text pt={3}>Increase average order size:</Text>
                  <Text fontSize={[6, 8]}>$65 &rarr; $80</Text>
                </Box>
              </Flex>
            </Box>
          </Wrap>
        </Box>
        <Box pt={["12%", "6%"]} pb={4}>
          <Wrap flexWrap="wrap" alignItems="center" justifyContent="center">
              <Box width={[12/12, 10/12, 10/12, 6/12]} pr={[0,0,4]}>
                <ScrollAnimation offset={0} duration={0.5} animateOnce={true} animateIn="fadeInUp">
                  <Heading fontFamily="serif" color="heading" fontSize={[3, 5]} mb={3}>Our customers purchase more often and for everyday occasions</Heading>
                  <Text lineHeight={[0, 1]} fontSize={[2, 4]} mb={4}>{why1}</Text>
                </ScrollAnimation>
              </Box>
              <Box width={[12/12, 10/12, 10/12, 6/12]} pl={[0,0,4]}>
                <ScrollAnimation offset={0} duration={0.5} animateOnce={true} animateIn="fadeInUp">
                  <Img
                    fluid={why1Photo.childImageSharp.fluid}
                    alt={title}
                  />
                  </ScrollAnimation>
                </Box>
          </Wrap>
        </Box>
        <Box pb={["12%", "6%"]} pt={4}>
          <Wrap flexWrap="wrap" alignItems="center" justifyContent="center">
            <Box width={[12/12, 10/12, 10/12, 6/12]} pr={[0, 0, 4]}>
              <ScrollAnimation offset={0} duration={0.5} animateOnce={true} animateIn="fadeInUp">
                <Img
                  fluid={why2Photo.childImageSharp.fluid}
                  alt={title}
                />
              </ScrollAnimation>
            </Box>
            <Box width={[12/12, 10/12, 10/12, 6/12]} pl={[0,0,4]}>
              <ScrollAnimation offset={0} duration={0.5} animateOnce={true} animateIn="fadeInUp">
                <Heading fontFamily="serif" color="heading" fontSize={[3, 5]} mb={3}>Customers were asking for a subscription service</Heading>
                <Text lineHeight={[0, 1]} fontSize={[2, 4]} mb={4}>{why2}</Text>
              </ScrollAnimation>
            </Box>
          </Wrap>
        </Box>
        <Box bg="lightGreen" py={["12%", "6%"]}>
          <Wrap flexWrap="wrap">
            <Box alignItems="horizontal" width={[12/12, 10/12, 12/12]}>
              <ScrollAnimation offset={0} animateOnce={true} duration={0.75} animateIn="fadeInUp">
                <Heading textAlign="center" pb={3} color="heading" fontFamily="serif" fontSize={[7, 9]} lineHeight="1.25em">Stakeholders</Heading>
              </ScrollAnimation>
          </Box>
          <Box width={[12/12, 10/12, 6/12]} px={[0, 0, 4]} py={[3, 3, 4]}>
            <ScrollAnimation offset={0} animateOnce={true} duration={0.75} animateIn="fadeInUp">
              <Flex>
                <TeamIconContainer mr={3}>
                  <IconDesign />
                </TeamIconContainer>
                <Box>
                  <Heading color="heading" fontFamily="serif" fontSize={[3, 5]} mb={1}>My Role</Heading>
                  <Text fontSize={[2, 4]}>The project was led by myself and our CTO. I designed the wireframes and mockups and collaborated closely with one of our product designers on user research and user journey mapping. I also led our biweekly product sprints along with our CTO.</Text>
                </Box>
              </Flex>
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
            <Box width={12/12} pt={['12%', '6%']}>
              <Heading textAlign="center" pb={2} color="heading" fontFamily="serif" fontSize={[7, 9]} lineHeight="1.25em">Stakeholder Misalignment</Heading>
            </Box>
            <Flex flexWrap="wrap" justifyContent="center">
              <Box width={[12/12, 12/12, 12/12, 8/12]} pt={['12%', '6%']}>
                <Flex flexWrap="wrap" alignItems="center">
                  <Box width={[12/12, 4/12]} pr={[0,4]} pb={[4,0]}>
                    <Img
                      fluid={stake1.childImageSharp.fluid}
                      alt={title}
                    />
                  </Box>
                  <Box width={[12/12, 8/12]}>
                    <Heading color="heading" fontFamily="serif" fontSize={[3, 5]} mb={1}>Addressing Product Mix Too Late</Heading>
                    <Text fontSize={[2, 4]}>The Design team wanted to feature three different tiers of subscriptions. Unfortunately, we weren't rotating our product mix fast enough to warrant that. These concerns weren’t addressed until late into the process and although we initially designed for three tiers, we had to scale back to one tier on launch. To realign, I met more frequently with the merchandising team to ensure we could add more bouquets over the coming months with the plan to add bouquets unique to subscriptions depending on demand.</Text>
                  </Box>
                </Flex>
              </Box>
              <Box width={[12/12, 12/12, 12/12, 8/12]} py={['12%', '6%']}>
              <Flex flexWrap="wrap" alignItems="center">
                <Box width={[12/12, 4/12]} pr={[0,4]} pb={[4,0]}>
                  <Img
                    fluid={stake2.childImageSharp.fluid}
                    alt={title}
                  />
                </Box>
                <Box width={[12/12, 8/12]}>
                <Heading color="heading" fontFamily="serif" fontSize={[3, 5]} mb={1}>Recurring Charges</Heading>
                <Text fontSize={[2, 4]}>The design team’s plan was to default to a recurring subscription charged based on the frequency that the customer chose. Unfortunately, because of how our inventory system was designed it would be too technically difficult in our tight timeline to implement. To realign, I set up a whiteboarding session between engineering and design to map out all the different subscription combinations and we landed on allowing customers to select from a 3 month, 6 month or 12 month subscription that would be purchased upfront.</Text>
                </Box>
              </Flex>
              </Box>
            </Flex>
          </Wrap>
        </Box>
        <Box py={["12%", "6%"]}>
          <Wrap flexWrap="wrap" justifyContent="center">
            <Box width={[1, 9/12, 8/12, 6/12]}>
              <ScrollAnimation offset={0} delay={750} duration={0.5} animateOnce={true} animateIn="fadeInUp">
                <Heading pb={3} color="heading" fontFamily="serif" fontSize={[7, 9]} lineHeight="1.25em">The Process</Heading>
                <PageContent content={content} />
              </ScrollAnimation>
            </Box>
          </Wrap>
        </Box>
        <Box py={["8%", "3%"]}>
          <Part2Box width={1}>
            <Flex flexWrap="wrap" alignItems="center">
              <Box p={[4, 5]} order={[2, 2, 1]} width={[1, 1, 5/12]}>
                <Heading color="white" fontFamily="serif" fontSize={[4, 6]}>Part 2</Heading>
                <Heading color="white" fontFamily="serif" lineHeight="1.25em" fontSize={[7, 9]} pb={2}>Storyblocks UX</Heading>
                <Text color="white" fontSize={[2, 4]}>Ideas for allowing creatives to move faster and create more moving stories.</Text>
              </Box>
              <Box order={[1, 1, 2]} width={[1, 1, 7/12]}>
                <Img
                  fluid={part2Image.childImageSharp.fluid}
                  alt={title}
                />
              </Box>
            </Flex>
          </Part2Box>
          <Flex alignItems="center" flexWrap="wrap" justifyContent="center" py={['6%']}>
            <Box width={[12/12, 10/12, 8/12]} px={[0, 0, 4]} py={[3, 3, 4]}>
                <ScrollAnimation offset={0} animateOnce={true} duration={0.75} animateIn="fadeInUp">
                  <Flex>
                    <TeamIconContainer mr={3}>
                      <IconMedia />
                    </TeamIconContainer>
                    <Box ml={3}>
                      <Heading color="heading" fontFamily="serif" fontSize={[3, 6]} lineHeight="1.25em" mb={1}>Integrate video, audio and imagery into one cohesive browsing experience.</Heading>
                      <Text fontSize={[2, 4]}>When a user views a video clip, audio is suggested that pairs well with that clip based on things like pacing and keywords. The user can overlay the audio, change tempo, or move onto the next audio clip. Perhaps as a way to get smarter about suggestions, we can have a thumbs up/down system or ask questions about mood/theme.</Text>
                    </Box>
                  </Flex>
                </ScrollAnimation>
              </Box>
              <Box width={[12/12, 10/12, 8/12]} px={[0, 0, 4]} py={[3, 3, 4]}>
                  <ScrollAnimation offset={0} animateOnce={true} duration={0.75} animateIn="fadeInUp">
                    <Flex>
                      <TeamIconContainer mr={3}>
                        <IconPersonalization />
                      </TeamIconContainer>
                      <Box ml={3}>
                        <Heading color="heading" fontFamily="serif" fontSize={[3, 6]} lineHeight="1.25em" mb={1}>More personalization.</Heading>
                        <Text fontSize={[2, 4]}>As a user is working on a project and downloading content, we should be able to learn more about the subject matter they’re working on. We can suggest content based on their project not only when browsing but also integrate it into the search bar.</Text>
                      </Box>
                    </Flex>
                  </ScrollAnimation>
                </Box>
                <Box width={[12/12, 10/12, 8/12]} px={[0, 0, 4]} py={[3, 3, 4]}>
                    <ScrollAnimation offset={0} animateOnce={true} duration={0.75} animateIn="fadeInUp">
                      <Flex>
                        <TeamIconContainer mr={3}>
                          <IconCasette />
                        </TeamIconContainer>
                        <Box ml={3}>
                          <Heading color="heading" fontFamily="serif" fontSize={[3, 6]} lineHeight="1.25em" mb={1}>Create more space for curated content.</Heading>
                          <Text fontSize={[2, 4]}>Allow vetted creatives to create content “playlists” based on a mood or theme. Perhaps show off some of the work they’ve done and allow the user to dissect that content and see which audio, video and imagery they used to put it together for inspiration.</Text>
                        </Box>
                      </Flex>
                    </ScrollAnimation>
                  </Box>
                  <Box width={[12/12, 10/12, 8/12]} px={[0, 0, 4]} py={[3, 3, 4]}>
                      <ScrollAnimation offset={0} animateOnce={true} duration={0.75} animateIn="fadeInUp">
                        <Flex>
                          <TeamIconContainer mr={3}>
                            <IconCamera />
                          </TeamIconContainer>
                          <Box ml={3}>
                            <Heading color="heading" fontFamily="serif" fontSize={[3, 6]} lineHeight="1.25em" mb={1}>Create a request system for creatives/contributors.</Heading>
                            <Text fontSize={[2, 4]}>Allow creatives to put out a request for video, audio, or imagery content that might not be available on the platform. Perhaps some of these requests could appear on the contributor platform and serve to motivate the contributor to fulfill them if they’d like.</Text>
                          </Box>
                        </Flex>
                      </ScrollAnimation>
                    </Box>
                    <Box width={[12/12, 10/12, 8/12]} px={[0, 0, 4]} py={[3, 3, 4]}>
                        <ScrollAnimation offset={0} animateOnce={true} duration={0.75} animateIn="fadeInUp">
                          <Flex>
                            <TeamIconContainer mr={3}>
                              <IconSearch />
                            </TeamIconContainer>
                            <Box ml={3}>
                              <Heading color="heading" fontFamily="serif" fontSize={[3, 6]} lineHeight="1.25em" mb={1}>Build a more powerful search tool.</Heading>
                              <Text fontSize={[2, 4]} pb={3}>Bring search further upfront into the homepage and make it more visual. Perhaps embed small thumbnails or icons based on theme to help creatives visually sort through results.</Text>
                              <Text fontSize={[2, 4]}>Allow users to upload audio or video clips that they’re working on and we can suggest others like it (sort of like a reverse Google image search or What The Font search).</Text>
                            </Box>
                          </Flex>
                        </ScrollAnimation>
                      </Box>
            </Flex>
        </Box>
      </Section>
    </Layout>
  )
}

StoryblocksPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  content: PropTypes.shape({
    children: PropTypes.array,
  }),
  contentComponent: PropTypes.func,
}

const StoryblocksPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <StoryblocksPageTemplate
      contentComponent={HTMLContent}
      data={data}
      title={post.frontmatter.title}
      intro={post.frontmatter.intro}
      content={post.htmlAst}
      stake1={post.frontmatter.stake1}
      stake2={post.frontmatter.stake2}
      part1Image={post.frontmatter.part1Image}
      part2Image={post.frontmatter.part2Image}
      whyTitle={post.frontmatter.whyTitle}
      whyIntro={post.frontmatter.whyIntro}
      why1={post.frontmatter.why1}
      why1Photo={post.frontmatter.why1Photo}
      why2={post.frontmatter.why2}
      why2Photo={post.frontmatter.why2Photo}
      merchandising={post.frontmatter.merchandising}
      customerCare={post.frontmatter.customerCare}
      marketing={post.frontmatter.marketing}
      operations={post.frontmatter.operations}
      business={post.frontmatter.business}
      engineering={post.frontmatter.engineering}
    />
  )
}

StoryblocksPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default StoryblocksPage

export const storyblocksPageQuery = graphql`
  query StoryblocksPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      htmlAst
      frontmatter {
        title
        intro
        stake1 {
          childImageSharp {
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stake2 {
          childImageSharp {
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        part1Image {
          childImageSharp {
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        part2Image {
          childImageSharp {
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        whyTitle
        whyIntro
        why1
        why1Photo {
          childImageSharp {
            fluid(maxWidth: 1240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        why2
        why2Photo {
          childImageSharp {
            fluid(maxWidth: 1240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
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
  }
`
