import React from "react";
import styled from "styled-components";
import { darken } from "polished";
import Parallax from "react-rellax";

import { breakpoints, colors } from "../../assets/globalStyles";
import SvgDottedRectangle from "../../assets/img/geometric-shapes/dotted-rectangle.svg";

import { NonStretchedImg } from "./NonStretchedImg";

export const ImgHolder = props => (
  <StyledImgHolder>
    <NonStretchedImg fluid={props.fluidImg} />
    <StyledImgHolderRibbon />
    <Parallax speed={3}>
      <StyledSvgDottedRectangle />
      <StyledSvgDottedRectangle2 />
    </Parallax>
    <Parallax speed={3}>
      <StyledSvgDottedRectangle3 />
      <StyledSvgDottedRectangle4 />
    </Parallax>
  </StyledImgHolder>
);

const StyledSvgDottedRectangle = styled(SvgDottedRectangle)`
  width: 110px;
  position: absolute;
  bottom: 0px;
  left: -110px;
  fill: ${colors.greyLight};
`;

const StyledSvgDottedRectangle2 = styled(SvgDottedRectangle)`
  width: 110px;
  position: absolute;
  bottom: -53px;
  left: -107px;
  fill: ${colors.greyLight};
`;

const StyledSvgDottedRectangle3 = styled(SvgDottedRectangle)`
  width: 110px;
  position: absolute;
  top: -500px;
  right: -90px;
  fill: ${colors.greyLight};
  @media ${breakpoints.tablet} {
    top: -400px;
  }
`;

const StyledSvgDottedRectangle4 = styled(SvgDottedRectangle)`
  width: 110px;
  position: absolute;
  top: -447px;
  right: -93px;
  fill: ${colors.greyLight};
  @media ${breakpoints.tablet} {
    top: -347px;
  }
`;

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
  @media ${breakpoints.tablet} {
    height: 150px;
    top: calc(50% - (150px / 2));
  }
  @media ${breakpoints.mobile} {
    height: 100px;
    top: calc(50% - (100px / 2));
  }
`;
