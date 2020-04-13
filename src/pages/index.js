import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { useQueryParam, StringParam } from 'use-query-params';

import { Layout } from '../components/helpers/Layout';
import { TextFromString } from '../components/helpers/Content';
import { Section, SectionRaw } from '../components/helpers/Section';
import { PhotosCarousel } from '../components/PhotosCarousel';
import { Banner } from '../components/Banner';
import { Title } from '../components/Title';
import { Invite } from '../components/Invite';
import { Header } from '../components/Header';

const languages = ['br', 'en'];

const IndexPage = (props) => {
  const name = useQueryParam('name', StringParam)[0];
  const URLLang = useQueryParam('lang', StringParam)[0];
  const language = languages.includes(URLLang) ? URLLang : 'br';
  const info = props.data.weddingInfo.edges.filter(
    (edge) => edge.node.fields.slug === `/weddingInfo/${language}/`
  )[0].node.frontmatter;

  let invitationInfo = {};
  Object.entries(info).forEach(([infoKey, infoValue]) => {
    if (infoKey.includes('invitation')) {
      const key = infoKey.substring('invitation_'.length);
      invitationInfo = { ...invitationInfo, [key]: infoValue };
    }
  });
  invitationInfo.weddingDate = info.weddingDate;

  const carouselImages = props.data.carouselImages;

  return (
    <StyledIndex>
      <Layout>
        <Header name={name} language={language} />
        <Banner date={info.weddingDate} />
        <Section>
          <TextFromString
            text={info.intro}
            style={{ padding: '0 8em', textAlign: 'justify' }}
          />
        </Section>
        <SectionRaw>
          <Invite name={name} info={invitationInfo} />
        </SectionRaw>
        <Section>
          <Title text="Nosso amor" />
          <PhotosCarousel images={carouselImages} />
        </Section>
        <SectionRaw>
          <div className="flower-decoration"></div>
        </SectionRaw>
        <Section>
          <Title text="Nossos padrinhos" />
        </Section>

        <div style={{ marginTop: '500px' }}></div>
      </Layout>
    </StyledIndex>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

const StyledIndex = styled.div`
  .flower-decoration {
    display: block;
    width: 330px;
    margin: -3em 0 -13em -60px;
    height: 450px;
    transform: rotate(40deg);
    background-image: url('/img/flower-01.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

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
            invitation_hello
            invitation_invite
            invitation_weather_title
            invitation_weather_min
            invitation_weather_max
            invitation_weather_prec
            invitation_show_pictures
            invitation_countdown_still
            invitation_countdown_days
            language
            rsvp
            weddingDate
          }
        }
      }
    }
    carouselImages: allImageSharp(
      filter: { fluid: { originalName: { regex: "/^nosso_amor/" } } }
      sort: { fields: fluid___originalName }
    ) {
      edges {
        node {
          id
          fluid(maxWidth: 1000) {
            originalName
            presentationWidth
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
