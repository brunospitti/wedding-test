import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { useQueryParam, StringParam } from 'use-query-params';

import { Layout } from '../components/helpers/Layout';
import { Banner } from '../components/Banner';

const languages = ['pt-br', 'en'];

const IndexPage = (props) => {
  const name = useQueryParam('name', StringParam)[0];
  const URLLang = useQueryParam('lang', StringParam)[0];
  const language = languages.includes(URLLang) ? URLLang : 'pt-br';
  const info = props.data.homePage.edges.filter(
    (edge) => edge.node.fields.slug === `/homePage/${language}/`
  )[0].node.frontmatter;

  console.log('IndexPage -> render -> info', info);
  console.log('IndexPage -> render -> name', name);
  console.log('IndexPage -> render -> language', language);

  return (
    <Layout>
      <Banner />
      {name} - {language}
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default IndexPage;

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
