import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loadable from 'react-loadable';
import { graphql } from 'gatsby';
import { useQueryParam, StringParam } from 'use-query-params';
import BackgroundImage from 'gatsby-background-image';

import { breakpoints } from '../assets/globalStyles';

import { Layout } from '../components/helpers/Layout';
import { TextFromString } from '../components/helpers/Content';
import { Section, SectionRaw } from '../components/helpers/Section';
import { Banner } from '../components/Banner';
import { Title } from '../components/Title';
import { Godfathers } from '../components/Godfathers';
import { Invite } from '../components/Invite';
import { Form } from '../components/Form';

const languages = ['br', 'en'];

const IndexPage = (props) => {
  const name = useQueryParam('name', StringParam)[0];
  const URLLang = useQueryParam('lang', StringParam)[0];
  const language = languages.includes(URLLang) ? URLLang : 'br';
  const info = props.data.weddingInfo.edges.filter(
    (edge) => edge.node.fields.slug === `/weddingInfo/${language}/`
  )[0].node.frontmatter;

  console.log('IndexPage -> info', info);

  let invitationInfo = {};
  Object.entries(info).forEach(([infoKey, infoValue]) => {
    if (infoKey.includes('invitation')) {
      const key = infoKey.substring('invitation_'.length);
      invitationInfo = { ...invitationInfo, [key]: infoValue };
    }
  });
  invitationInfo.weddingDate = info.weddingDate;

  const {
    carouselImages,
    godfathersImages,
    inviteFazendaImages,
    flower01: {
      childImageSharp: { fluid: flower01 },
    },
    flower02: {
      childImageSharp: { fluid: flower02 },
    },
    flower03: {
      childImageSharp: { fluid: flower03 },
    },
    flower04: {
      childImageSharp: { fluid: flower04 },
    },
    flower05: {
      childImageSharp: { fluid: flower05 },
    },
    inviteSun: {
      childImageSharp: { fluid: inviteSun },
    },
    invitePhoto: {
      childImageSharp: { fluid: invitePhoto },
    },
  } = props.data;

  const LoadablePhotosCarousel = Loadable({
    loader: () => import('../components/PhotosCarousel'),
    loading: () => <div>loading</div>,
    render(loaded, props) {
      let Component = loaded.PhotosCarousel;
      return <Component images={carouselImages} bgImgFluid={flower05} />;
    },
  });

  return (
    <StyledIndex>
      <Layout>
        <Banner date={info.weddingDate} name={name} language={language} />
        <Section>
          <StyledCenterTextFromString text={info.intro} />
        </Section>
        <SectionRaw>
          <Invite
            name={name}
            info={invitationInfo}
            sunImage={inviteSun}
            photoImage={invitePhoto}
            fazendaImages={inviteFazendaImages}
          />
        </SectionRaw>
        <Section>
          <Title text={info.title_carousel} />
          <LoadablePhotosCarousel />
        </Section>
        <SectionRaw>
          <StyledFlower01 fluid={flower01} />
        </SectionRaw>
        <Section>
          <Title text={info.title_best_men} />
          <Godfathers godfathersImages={godfathersImages} flowerImage={flower02} />
        </Section>
        <Section>
          <Title text={info.title_gift} />
          <StyledTextFromString text={info.gift} />
          <StyledGiftButton href="" target="_blank">
            {info.gift_button}
          </StyledGiftButton>
        </Section>
        <Section>
          <Title text={info.title_get_ready} />
          <StyledTextFromString text={info.get_ready} />
          <Form name={name} flowerImage={flower04} />
        </Section>
        <Section>
          <Title text={info.finalPhrase} />
        </Section>
        <StyledFlower03 fluid={flower03} />
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

const StyledIndex = styled.div``;

const StyledTextFromString = styled(TextFromString)`
  text-align: justify;
  span {
    font-size: 0.7em;
  }
`;
const StyledCenterTextFromString = styled(StyledTextFromString)`
  padding: 0 8em;
  @media ${breakpoints.tablet} {
    padding: 0 4em;
  }
  @media ${breakpoints.mobile} {
    padding: 0 2em;
  }
  @media ${breakpoints.mobile} {
    padding: 0;
  }
`;

const StyledFlower01 = styled(BackgroundImage)`
  display: block;
  width: 330px;
  margin: -3em 0 -13em -60px;
  height: 450px;
  transform: rotate(40deg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media ${breakpoints.desktopExtraSmall} {
    margin: -3em 0 -9em -60px;
  }
  @media ${breakpoints.tablet} {
    width: 290px;
    height: 400px;
  }
  @media ${breakpoints.mobileSmall} {
    width: 200px;
    height: 270px;
  }
`;

const StyledFlower03 = styled(BackgroundImage)`
  display: block;
  width: 120px;
  height: 370px;
  margin: 15em auto;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media ${breakpoints.tablet} {
    width: 90px;
    height: 270px;
    margin: 10em auto;
  }
`;

const StyledGiftButton = styled.a`
  display: table;
  margin: 2em auto 0;
  position: relative;
  background: linear-gradient(to right, #f97dae, #51dacf);
  opacity: 0.6;
  width: 45%;
  padding: 1em 0;
  text-align: center;
  text-decoration: none;
  color: white;
  transition: all 0.5s ease;
  &:hover {
    opacity: 1;
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
            weddingDate
            title_carousel
            title_best_men
            title_gift
            gift
            gift_button
            title_get_ready
            get_ready
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

    godfathersImages: allImageSharp(
      filter: { fluid: { originalName: { regex: "/^padrinhos-/" } } }
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

    flower01: file(relativePath: { eq: "flower-01.png" }) {
      ...fluidImage
    }

    flower02: file(relativePath: { eq: "flower-02.png" }) {
      ...fluidImage
    }

    flower03: file(relativePath: { eq: "flower-03.png" }) {
      ...fluidImage
    }

    flower04: file(relativePath: { eq: "flower-04.png" }) {
      ...fluidImage
    }

    flower05: file(relativePath: { eq: "flower-decoration.png" }) {
      ...fluidImage
    }

    inviteSun: file(relativePath: { eq: "sun.png" }) {
      ...fluidImage
    }

    invitePhoto: file(relativePath: { eq: "photo.png" }) {
      ...fluidImage
    }

    inviteFazendaImages: allImageSharp(
      filter: { fluid: { originalName: { regex: "/^fazenda-/" } } }
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

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(quality: 90) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
