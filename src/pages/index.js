import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { Heading, Text } from 'rebass';
import { Flex, Box } from 'grid-styled';

import Wrap from '../components/Wrap';

export default class IndexPage extends Component {
  render() {
    const { data } = this.props;
    const { edges: projects } = data.allMarkdownRemark;

    return (
      <Wrap>
        <Box ml={[0, '8.333%']} py={[5, 6]} width={[1, 9/12, 8/12, 5/12]}>
          <Heading color="heading" fontSize={[5, 6]}>Scott Simpson</Heading>
          <Text fontSize={[3, 4]}>Product Designer</Text>
          <Text my={[2, 4]} lineHeight={1} fontSize={[3, 4]}>Im Cofounder and Head of Product at <a href='#'>UrbanStems</a>. My focus is on creating product design systems that help companies and teams scale.</Text>
        </Box>
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">Projects</h1>
          </div>
          {projects
            .filter(project => project.node.frontmatter.templateKey === 'project-post')
            .map(({ node: project }) => (
              <div
                className="content"
                style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
                key={project.id}
              >
                <p>
                  <Link className="has-text-primary" to={project.fields.slug}>
                    {project.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <small>{project.frontmatter.date}</small>
                </p>
                <p>
                  <br />
                  <br />
                  <Link className="button is-small" to={project.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
              </div>
            ))}
        </div>
      </Wrap>
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
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "YYYY")
          }
        }
      }
    }
  }
`;
