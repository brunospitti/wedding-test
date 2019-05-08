import React from "react";
import styled from "styled-components";
import { darken } from "polished";

import { NonStretchedImg } from "./NonStretchedImg";

export const ImgHolder = props => (
  <StyledImgHolder>
    <NonStretchedImg fluid={props.fluidImg} />
    <StyledImgHolderRibbon />
  </StyledImgHolder>
);

const StyledImgHolder = styled.div`
  background: #f7f7f7;
  max-width: 1100px;
  width: 100%;
  position: relative;
  margin: 10vh auto;
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    margin: 10px 0 0 10px;
    background: ${() => darken("0.1", "#f7f7f7")};
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;
const StyledImgHolderRibbon = styled.div`
  background: #f7f7f7;
  position: absolute;
  width: 100vw;
  z-index: -1;
  height: 220px;
  top: calc(50% - (220px / 2));
  left: calc(-50vw + 50%);
`;
