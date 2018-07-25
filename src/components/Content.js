import React from 'react';
import PropTypes from 'prop-types';
import rehypeReact from "rehype-react";
import { Heading, Text, Blockquote, Divider, Link, Image } from 'rebass';
import Anchor from './Anchor';
import ListItem from './ListItem';
import List from './List';
import ImageContainer from './ImageContainer';

const HeadingPrimary = ({ children }) => <Heading color="heading" fontSize={7} mb={3}>{children}</Heading>
const HeadingSecondary = ({ children }) => <Heading color="heading" fontSize={6} mb={3}>{children}</Heading>
const HeadingTertiary = ({ children }) => <Heading color="heading" fontSize={5} mb={3}>{children}</Heading>
const Paragraph = ({ children }) => <Text lineHeight={0} fontSize={[2, 4]} mb={4}>{children}</Text>
const UlList = ({ children }) => <List ml={3}>{children}</List>
const LiListItem = ({ children }) => <ListItem fontSize={3} mb={3}>{children}</ListItem>
const ImageWrapper = ({ children }) => <ImageContainer>{children}</ImageContainer>

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { 
    "h1": HeadingPrimary,
    "h2": HeadingSecondary,
    "h3": HeadingTertiary,
    "p": Paragraph,
    "blockquote": Blockquote,
    "hr": Divider,
    "a": Link,
    "ul": UlList,
    "li": LiListItem,
    "img": Image,
    "figure": ImageWrapper,
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