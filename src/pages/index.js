import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Layout } from '../components/helpers/Layout';
import { Banner } from '../components/Banner';

const languages = ['pt-br', 'en'];

export default class IndexPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.url = new URL(props.location.href);
    this.params = new URLSearchParams(this.url.search);

    this.URLLang = this.params.get('lang');

    this.language = languages.includes(this.URLLang) ? this.URLLang : 'pt-br';
    this.name = this.params.get('name');
    this.info = props.data.homePage.edges.filter(
      (edge) => edge.node.fields.slug === `/homePage/${this.language}/`
    )[0].node.frontmatter;
  }

  render() {
    const { language, name, info } = this;
    console.log('IndexPage -> render -> info', info);
    console.log('IndexPage -> render -> name', name);
    console.log('IndexPage -> render -> language', language);

    return (
      <Layout>
        <Banner />
      </Layout>
    );
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
