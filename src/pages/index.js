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

const getSpecificSetOfKeys = (fullObject, keyWord) => {
  let result = {};
  Object.entries(fullObject).forEach(([infoKey, infoValue]) => {
    if (infoKey.includes(keyWord)) {
      const key = infoKey.substring(`${keyWord}_`.length);
      result = { ...result, [key]: infoValue };
    }
  });
  return result;
};

const IndexPage = (props) => {
  const name = useQueryParam('name', StringParam)[0];
  const URLLang = useQueryParam('lang', StringParam)[0];
  const language = languages.includes(URLLang) ? URLLang : 'br';

  const info =
    props.data[`weddingInfo${language.toUpperCase()}`].edges[0].node.frontmatter;

  const invitationInfo = getSpecificSetOfKeys(info, 'invitation');
  invitationInfo.weddingDate = info.weddingDate;

  const formInfo = getSpecificSetOfKeys(info, 'form');

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
    flowerInviteBackground: {
      childImageSharp: { fluid: flowerInviteBackground },
    },
    flowerInviteBackgroundTablet: {
      childImageSharp: { fluid: flowerInviteBackgroundTablet },
    },
    flowerInviteBackgroundMobile: {
      childImageSharp: { fluid: flowerInviteBackgroundMobile },
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
            flowerInviteBackground={flowerInviteBackground}
            flowerInviteBackgroundTablet={flowerInviteBackgroundTablet}
            flowerInviteBackgroundMobile={flowerInviteBackgroundMobile}
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
          <StyledGiftButton>
            <a href="" target="_blank">
              {info.gift_button}
            </a>
          </StyledGiftButton>
        </Section>
        <Section>
          <Title text={info.title_get_ready} />
          <StyledTextFromString text={info.get_ready} />
          <Form name={name} flowerImage={flower04} formInfo={formInfo} />
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
  line-height: 22px;
  text-align: justify;
  span {
    font-size: 0.7em;
  }
  @media ${breakpoints.mobile} {
    font-size: 0.9em;
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

const StyledGiftButton = styled.div`
  margin: 2em auto 0;
  background: linear-gradient(to right, #d29edc, #799694);
  width: 45%;
  padding: 5px;
  transition: all 0.5s ease;
  @media ${breakpoints.mobile} {
    width: 75%;
  }
  @media ${breakpoints.mobileSmall} {
    width: 100%;
  }
  a {
    width: 100%;
    padding: 10px;
    text-align: center;
    background: linear-gradient(to right, #d29edc, #799694);
    display: table;
    position: relative;
    text-decoration: none;
    color: white;
    &:hover {
      &:before {
        opacity: 0;
      }
    }
    &:before {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      background: white;
      top: 0;
      left: 0;
      opacity: 0.4;
      transition: all 0.5s ease;
    }
  }
`;
export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    weddingInfoBR: allMarkdownRemark(
      filter: {
        frontmatter: { templateKey: { eq: "weddingInfo" } }
        fields: { slug: { regex: "//br/" } }
      }
    ) {
      edges {
        node {
          ...allInfo
        }
      }
    }

    weddingInfoEN: allMarkdownRemark(
      filter: {
        frontmatter: { templateKey: { eq: "weddingInfo" } }
        fields: { slug: { regex: "//en/" } }
      }
    ) {
      edges {
        node {
          ...allInfo
        }
      }
    }

    carouselImages: allImageSharp(
      filter: { fluid: { originalName: { regex: "/^nosso-amor/" } } }
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

    flower05: file(relativePath: { eq: "flower-05.png" }) {
      ...fluidImage
    }

    flowerInviteBackground: file(relativePath: { eq: "invite-background.png" }) {
      ...fluidImage
    }

    flowerInviteBackgroundTablet: file(
      relativePath: { eq: "invite-background-tablet.png" }
    ) {
      ...fluidImage
    }

    flowerInviteBackgroundMobile: file(
      relativePath: { eq: "invite-background-mobile.png" }
    ) {
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

export const allInfo = graphql`
  fragment allInfo on MarkdownRemark {
    id
    fields {
      slug
    }
    frontmatter {
      finalPhrase
      intro
      invitation_hello
      invitation_invite
      invitation_dress_code
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
      form_name
      form_seats
      form_location
      form_button
      form_success_title
      form_success_subtitle
      form_success_button
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
