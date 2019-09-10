import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Heading, Text, Flex, Box, Button } from 'rebass';
import ScrollAnimation from 'react-animate-on-scroll';

import SEO from '../components/Seo';
import Layout from '../components/Layout';
import WavesSVG from '../img/waves.svg';
import Wrap from '../components/Wrap';

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

const Input = styled.input`
  appearance: none;
  border: 1px solid #dadada;
  border-radius: 4px;
  outline: none;
  padding: 14px;
  width: 100%;
  &:focus {
    border: 1px solid ${props => props.theme.colors.blue};
  }
`;

const TextArea = styled.textarea`
  appearance: none;
  border: 1px solid #dadada;
  border-radius: 4px;
  display: block;
  outline: none;
  padding: 14px;
  width: 100%;
  height: 150px;
  &:focus {
    border: 1px solid ${props => props.theme.colors.blue};
  }
`;


const Label = styled.label`
  display: block;
`;

const  ContactPage = () => (
  <Layout>
    <SEO title="Scott Simpson. Contact." keywords={[`scott simpson`, `ux`, `product`, `design`, `dc`]} />
    <Section>
      <Flex flexWrap="wrap">
        <WavesContainer width={[1, 1, 5/12]}>
          <Waves />
        </WavesContainer>
        <Box bg="white" alignItems="horizontal" width={[11/12, 11/12, 7/12]}>
          <ScrollAnimation offset={0} animateOnce={true} duration={0.75} animateIn="fadeInUp">
            <Wrap>
              <Box ml={[0, '16.667%']} py={["7%", "10%"]} width={[1, 1, 9/12]}>
                <Heading pb={3} color="heading" fontFamily="serif" fontSize={[7, 9]} lineHeight="1.25em">Contact</Heading>
                <Text fontSize={[5, 6]} pt={2} pb={4}>Have an idea for a product? Want to get coffee and talk about design? Fill out the form below and I'll get back to you quickly.</Text>
                <form name="contact" method="POST" netlify>
                  <Flex flexWrap="wrap">
                    <Box pr={'16px'} width={[1, 1/2]}>
                      <Label>Your Name</Label><Input type="text" name="name" />
                    </Box>
                    <Box width={[1, 1/2]}>
                      <Label>Your Email</Label><Input type="email" name="email" />
                    </Box>
                    <Box width={1}>
                      <Label>Message</Label><TextArea name="message" />
                    </Box>
                    <Box>
                      <Button bg="blue" p={32} type="submit">Send</Button>
                    </Box>
                  </Flex>
                </form>
              </Box>
            </Wrap>
          </ScrollAnimation>
        </Box>
      </Flex>
    </Section>
  </Layout>
);

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ContactPage
