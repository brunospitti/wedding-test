import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { useQueryParam, StringParam } from 'use-query-params';

import { Layout } from '../components/helpers/Layout';
import { TextFromString } from '../components/helpers/Content';
import { Section, SectionRaw } from '../components/helpers/Section';
import { Banner } from '../components/Banner';
import { Invite } from '../components/Invite';
import { Header } from '../components/Header';

const languages = ['pt-br', 'en'];

const IndexPage = (props) => {
  const name = useQueryParam('name', StringParam)[0];
  const URLLang = useQueryParam('lang', StringParam)[0];
  const language = languages.includes(URLLang) ? URLLang : 'br';
  const info = props.data.weddingInfo.edges.filter(
    (edge) => edge.node.fields.slug === `/weddingInfo/${language}/`
  )[0].node.frontmatter;

  console.log('IndexPage -> render -> info', info);
  console.log('IndexPage -> render -> name', name);
  console.log('IndexPage -> render -> language', language);

  return (
    <Layout>
      <Header name={name} language={language} />
      <Banner date={info.weddingDate} />
      <Section>
        <TextFromString
          text={info.intro}
          style={{ padding: '0 5em', textAlign: 'justify' }}
        />
      </Section>
      <SectionRaw>
        <Invite name={name} text={info.invitation} />
      </SectionRaw>
      <div style={{ marginTop: '500px' }}></div>
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
    weddingInfo: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "weddingInfo" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            finalPhrase
            intro
            invitation
            language
            rsvp
            weddingDate
          }
        }
      }
    }
  }
`;
