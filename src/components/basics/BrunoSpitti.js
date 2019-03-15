import React from "react";
import styled from "styled-components";

import { fontFamilyTitle, colors, breakpoints } from "../../assets/globalStyles";

export const BrunoSpitti = () => (
  <StyledH1>Bruno Spitti</StyledH1>
)

const StyledH1 = styled.h1`
  font-size: 60px;
  font-family: ${fontFamilyTitle};
  color: ${colors.greyLight};
  text-align: center;
  line-height: 60px;
  text-transform: uppercase;
  letter-spacing: 47px;
  padding-left: 30px;
  padding-bottom: 25px;
  border-bottom: 3px solid ${colors.primary};
  padding-top: 34vh;
  margin-bottom: 2vh;
  @media ${breakpoints.desktopSmall} {
    font-size: 52px;
    letter-spacing: 33px;
  }
  @media ${breakpoints.mobile} {
    padding-left: 13px;
    font-size: 50px;
    letter-spacing: 36px;
    line-height: 55px;
    padding-top: 24vh;
    text-align: left;
  }
  @media ${breakpoints.mobileSmall} {
    padding-top: 17vh;
    padding-left: 10px;
    font-size: 40px;
    letter-spacing: 26px;
    line-height: 42px;
  }
`;
