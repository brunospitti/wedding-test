import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

import { Header } from './Header';
import { fontFamilyTitle } from '../assets/globalStyles';

export const Banner = ({ date, name, language }) => (
  <StaticQuery
    query={graphql`
      query {
        allFile: file(relativePath: { eq: "Banner_raw.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              originalName
              presentationWidth
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={({
      allFile: {
        childImageSharp: { fluid },
      },
    }) => (
      <StyledBanner Tag="div" fluid={fluid} backgroundColor={`#a7ceca`}>
        <Header name={name} language={language} />
        <StyledTitle>
          <span id="title">Vitória & Bruno</span>
          <span id="date">{date}</span>
        </StyledTitle>
      </StyledBanner>
    )}
  />
);

// styled components
const StyledBanner = styled(BackgroundImage)`
  width: 100%;
  height: 750px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const StyledTitle = styled.div`
  span {
    margin: auto;
    text-align: center;
    display: block;
    line-height: 1;
    color: white;
    &#title {
      font-family: ${fontFamilyTitle};
      width: 70%;
      font-size: 7em;
      margin-bottom: 0.15em;
      border-bottom: 2px solid;
    }
    &#date {
      font-size: 1.5em;
    }
  }
`;
