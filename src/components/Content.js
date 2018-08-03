import React from 'react';
import PropTypes from 'prop-types';
import rehypeReact from 'rehype-react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Heading, Text, Blockquote, Divider, Link, Image } from 'rebass';
import Anchor from './Anchor';
import ListItem from './ListItem';
import List from './List';
import ImageContainer from './ImageContainer';
import ImageCaption from './ImageCaption';

const HeadingPrimary = ({ children }) => <ScrollAnimation offset={0} duration={0.5} animateOnce={true} animateIn="fadeInUp"><Heading color="heading" fontSize={[5, 7]} mb={3}>{children}</Heading></ScrollAnimation>
const HeadingSecondary = ({ children }) => <ScrollAnimation offset={0} duration={0.5} animateOnce={true} animateIn="fadeInUp"><Heading color="heading" fontSize={[4, 6]} mb={3}>{children}</Heading></ScrollAnimation>
const HeadingTertiary = ({ children }) => <ScrollAnimation offset={0} duration={0.5} animateOnce={true} animateIn="fadeInUp"><Heading color="heading" fontSize={[3, 5]} mb={3}>{children}</Heading></ScrollAnimation>
const Paragraph = ({ children }) => <ScrollAnimation offset={0} duration={0.5} animateOnce={true} animateIn="fadeInUp"><Text lineHeight={[0, 1]} fontSize={[2, 4]} mb={4}>{children}</Text></ScrollAnimation>
const UlList = ({ children }) => <ScrollAnimation offset={0} duration={0.5} animateOnce={true} animateIn="fadeInUp"><List ml={3}>{children}</List></ScrollAnimation>
const LiListItem = ({ children }) => <ScrollAnimation offset={0} duration={0.5} animateOnce={true} animateIn="fadeInUp"><ListItem fontSize={3} mb={3}>{children}</ListItem></ScrollAnimation>
const ImageWrapper = ({ children }) => <ScrollAnimation offset={0} duration={0.5} animateOnce={true} animateIn="fadeInUp"><ImageContainer>{children}</ImageContainer></ScrollAnimation>
const CaptionWrapper = ({ children }) => <ScrollAnimation offset={0} duration={0.5} animateOnce={true} animateIn="fadeInUp"><ImageCaption>{children}</ImageCaption></ScrollAnimation>

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { 
    "h1": HeadingPrimary,
    "h2": HeadingSecondary,
    "h3": HeadingTertiary,
    "p": Paragraph,
    "blockquote": Blockquote,
    "hr": Divider,
    "a": Anchor,
    "ul": UlList,
    "li": LiListItem,
    "img": Image,
    "figure": ImageWrapper,
    "aside": CaptionWrapper,
   },
}).Compiler;

export const HTMLContent = ({ content }) => (
  <div>{renderAst(content)}</div>
);

const Content = ({ content }) => (
  <div>{content}</div>
);

Content.propTypes = {
  content: PropTypes.shape({
    children: PropTypes.array,
  }),
};

HTMLContent.propTypes = Content.propTypes;

export default Content;