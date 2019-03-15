import React from "react";
import styled from "styled-components";

import { fontFamilyTitle, colors, breakpoints } from "../../assets/globalStyles";

import { BrunoSpitti } from "./BrunoSpitti";

export const Header = props => (
  <React.Fragment>
    <BrunoSpitti/>
    <StyledH2>{props.pageTitle}</StyledH2>
  </React.Fragment>
)

const StyledH2 = styled.h2`
  font-size: 25px;
  color: ${colors.primary};
  text-align: center;
  line-height: 30px;
  margin-bottom: 5vh;
`;
