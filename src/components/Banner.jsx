import React from 'react';
import styled from 'styled-components';

import { fontFamilyTitle } from '../assets/globalStyles';
export const Banner = (props) => {
  return (
    <StyledBanner>
      <StyledTitle>
        <span id="title">Vitória & Bruno</span>
        <span id="date">19 de dezembro de 2020</span>
      </StyledTitle>
    </StyledBanner>
  );
};

// styled components
const StyledBanner = styled.div`
  width: 100%;
  height: 750px;
  background-image: url('/img/Banner_raw.jpg');
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
