import React from "react";
import styled from "styled-components";
import { lighten } from "polished";

import { breakpoints } from "../../assets/globalStyles";

import SvgBorderCube from "../../assets/img/geometric-shapes/border-cube.svg";
import SvgBorderTriangle from "../../assets/img/geometric-shapes/border-triangle.svg";
import SvgCircle from "../../assets/img/geometric-shapes/circle.svg";
import SvgDottedRectangle from "../../assets/img/geometric-shapes/dotted-rectangle.svg";
import SvgFilledTriangle from "../../assets/img/geometric-shapes/filled-triangle.svg";
import SvgPlus from "../../assets/img/geometric-shapes/plus.svg";
import SvgSquaredSquare from "../../assets/img/geometric-shapes/squared-square.svg";
import SvgStripedCircle from "../../assets/img/geometric-shapes/striped-circle.svg";
import SvgStripes from "../../assets/img/geometric-shapes/stripes.svg";
import SvgUnevenStripes from "../../assets/img/geometric-shapes/uneven-stripes.svg";

import { colors } from "../../assets/globalStyles";

export const FooterShapes = () => (
  <StyledSvgsHolder>
    <SvgStripedCircle id="svg-striped-circle" />
    <SvgBorderCube id="svg-border-cube" />
    <SvgPlus id="svg-plus" />
    <SvgCircle id="svg-circle" />
    <SvgUnevenStripes id="svg-uneven-stripes" />
    <SvgFilledTriangle id="svg-filled-triangle" />
    <SvgSquaredSquare id="svg-squared-square" />
    <SvgSquaredSquare id="svg-squared-square-2" />
    <SvgCircle id="svg-circle-2" />
    <SvgPlus id="svg-plus-2" />
    <SvgUnevenStripes id="svg-uneven-stripes-2" />
    <SvgDottedRectangle id="svg-dotted-rectangle" />
    <SvgBorderTriangle id="svg-border-triangle" />
    <SvgPlus id="svg-plus-3" />
    <SvgDottedRectangle id="svg-dotted-rectangle-2" />
    <SvgDottedRectangle id="svg-dotted-rectangle-3" />
    <SvgStripes id="svg-stripes" />
    <SvgStripes id="svg-stripes-2" />
  </StyledSvgsHolder>
);

const StyledSvgsHolder = styled.div`
  margin-top: 250px;
  display: block;
  position: relative;
  svg {
    position: absolute;
    fill: ${() => lighten("0.5", colors.greyDark)};
    @media ${breakpoints.tablet} {
      transform: scale(0.7);
    }
    &#svg-striped-circle {
      width: 162px;
      left: -2%;
      bottom: 50px;
      fill: ${() => lighten("0.6", colors.greyDark)};
      @media ${breakpoints.mobile} {
        left: -8%;
        bottom: 30px;
      }
    }
    &#svg-border-cube {
      width: 72px;
      left: 6%;
      bottom: -10px;
      transform: scaleX(-1);
      @media ${breakpoints.tablet} {
        transform: scaleX(-1) scale(0.7);
      }
    }
    &#svg-plus {
      width: 30px;
      left: 17%;
      bottom: 70px;
      transform: rotate(15deg);
      @media ${breakpoints.tablet} {
        transform: rotate(15deg) scale(0.7);
      }
      @media ${breakpoints.mobile} {
        display: none;
      }
    }
    &#svg-circle {
      width: 35px;
      left: 18.5%;
      bottom: 80px;
      @media ${breakpoints.mobile} {
        display: none;
      }
    }
    &#svg-uneven-stripes {
      width: 24px;
      left: 27%;
      bottom: -10px;
      transform: rotate(180deg);
      @media ${breakpoints.tablet} {
        transform: rotate(180deg) scale(0.7);
      }
    }
    &#svg-filled-triangle {
      width: 96px;
      left: 35%;
      bottom: -60px;
      transform: rotate(-20deg);
      @media ${breakpoints.tablet} {
        transform: rotate(-20deg) scale(0.7);
      }
    }
    &#svg-squared-square {
      width: 85px;
      left: calc(50% - 165px / 2);
      bottom: 80px;
    }
    &#svg-squared-square-2 {
      width: 85px;
      left: calc(50% - 30px / 2);
      bottom: 52px;
      @media ${breakpoints.mobile} {
        display: none;
      }
    }
    &#svg-circle-2 {
      width: 17px;
      right: 42%;
      bottom: -10px;
    }
    &#svg-plus-2 {
      width: 27px;
      right: 39%;
      bottom: 18px;
    }
    &#svg-uneven-stripes-2 {
      width: 25px;
      right: 34%;
      bottom: 50px;
      transform: rotate(-22deg) scaleX(-1);
      @media ${breakpoints.tablet} {
        transform: rotate(-22deg) scaleX(-1) scale(0.7);
      }
      @media ${breakpoints.mobile} {
        display: none;
      }
    }
    &#svg-dotted-rectangle {
      width: 90px;
      right: 21%;
      bottom: 110px;
    }
    &#svg-border-triangle {
      width: 80px;
      right: 20%;
      bottom: 40px;
      path {
        stroke: ${colors.greyLight};
        stroke-width: 10px;
      }
    }
    &#svg-plus-3 {
      width: 24px;
      right: 8%;
      bottom: 100px;
    }
    &#svg-dotted-rectangle-2 {
      width: 95px;
      right: calc(1% - 90px / 2);
      bottom: 100px;
    }
    &#svg-dotted-rectangle-3 {
      width: 95px;
      right: calc(1% - 86px / 2);
      bottom: 146px;
    }
    &#svg-stripes {
      right: 35px;
      bottom: -30px;
      height: 110px;
      fill: ${() => lighten("0.62", colors.greyDark)};
      transform: rotate(90deg);
      @media ${breakpoints.tablet} {
        transform: rotate(90deg) scale(0.7);
      }
    }
    &#svg-stripes-2 {
      right: 145px;
      bottom: -30px;
      transform: rotate(90deg);
      height: 110px;
      fill: ${() => lighten("0.62", colors.greyDark)};
      @media ${breakpoints.tablet} {
        display: none;
      }
    }
  }
`;
