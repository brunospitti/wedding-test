import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/helpers/Layout';

export default class IndexPage extends React.PureComponent {
  render() {
    const homePageInfo = this.props.data.homePage.edges[0].node.frontmatter;
    console.log('IndexPage -> render -> homePageInfo', homePageInfo);

    return <Layout>aaaa</Layout>;
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export const pageQuery = graphql`
  query IndexQuery {
    homePage: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "homePage" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          html
          ...GeneralInfoFields
        }
      }
    }
  }
`;

export const fragmentGeneral = graphql`
  fragment GeneralInfoFields on MarkdownRemark {
    frontmatter {
      mainTech
      sectiontitles
      hello
      projects
      contact
      contactIntoTitles
      contactIntoInfo
      contactIntoURL
    }
  }
`;
