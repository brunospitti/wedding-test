import React from "react";
import styled from "styled-components";
import Parallax from "react-rellax";

import { colors, breakpoints } from "../assets/globalStyles";
import SvgArrow from "../assets/img/geometric-shapes/arrow.svg";
import StripedCircle from "../assets/img/geometric-shapes/striped-circle.svg";

import withMainContainer from "../hocs/withMainContainer";
import withGradientFill from "../hocs/withGradientFill";
import { GroupedBorderTriangleUp } from "./shapes/GroupedBorderTriangleUp";
import { BrunoSpitti } from "./basics/BrunoSpitti";
import { Pill } from "./basics/Pill";

export default class Main extends React.PureComponent {
  MainContent = () => (
    <React.Fragment>
      <BrunoSpitti id="bruno-spitti-logo-main" />
      <StyledH2>Front-end developer</StyledH2>
      <StyledUl>
        {this.props.mainTech.map(tech => (
          <Pill grey key={tech} pill={tech} />
        ))}
      </StyledUl>
      <StyledSvgHolder>
        <SvgArrow />
      </StyledSvgHolder>
    </React.Fragment>
  );

  svgGradientObj = {
    topColor: colors.tertiary,
    bottomColor: colors.secondary,
    opacity: "0.3"
  };

  render() {
    let MainWithMainContainer = withMainContainer(this.MainContent);
    let StripedCircleWithGradientFill = withGradientFill(StripedCircle);
    return (
      <StyledMainSection className="homepage-section" id="home-section">
        <Parallax speed={-3}>
          <GroupedBorderTriangleUp />
        </Parallax>
        <MainWithMainContainer />
        <Parallax speed={4}>
          <StyledGradient>
            <StripedCircleWithGradientFill
              svgGradientObj={this.svgGradientObj}
            />
          </StyledGradient>
        </Parallax>
      </StyledMainSection>
    );
  }
}

const StyledMainSection = styled.section`
  height: 100vh;
  position: relative;
  .grouped-border-triangle-up {
    position: absolute;
    top: 10vh;
    left: 30px;
    transform: rotateZ(67deg);
  }
`;

const StyledH2 = styled.h2`
  font-size: 45px;
  color: ${colors.greyLight};
  text-align: center;
  line-height: 45px;
  margin-bottom: 5vh;
  @media ${breakpoints.desktopSmall} {
    font-size: 40px;
    line-height: 40px;
  }
  @media ${breakpoints.tablet} {
    font-size: 30px;
    line-height: 30px;
  }
  @media ${breakpoints.mobile} {
    font-size: 27px;
    line-height: 27px;
  }
  @media ${breakpoints.mobileSmall} {
    font-size: 23px;
  }
`;

const StyledUl = styled.ul`
  text-align: center;
  li {
    @media ${breakpoints.desktopSmall} {
      width: 155px;
      &:not(:first-child) {
        margin-left: 2%;
      }
    }
    @media ${breakpoints.tablet} {
      width: 123px;
      font-size: 20px;
      &#javascript {
        font-size: 18px;
      }
    }
    @media ${breakpoints.mobile} {
      width: 118px;
      padding-left: 4px;
      &#html,
      &#cssscss {
        margin-top: 10px;
      }
      &#html {
        margin-left: 0;
      }
    }
    @media ${breakpoints.mobileSmall} {
      margin-left: 0 !important;
      &:not(:nth-child(2n + 1)) {
        margin-left: 25px !important;
      }
      &#javascript {
        margin-top: 10px;
      }
    }
  }
`;

const StyledSvgHolder = styled.div`
  position: absolute;
  text-align: center;
  width: 100%;
  bottom: 0;
  svg {
    fill: ${colors.secondary};
    width: 140px;
    transform: scaleY(0.6);
    stroke-width: 8px;
    stroke: white;
    @media ${breakpoints.mobile} {
      width: 100px;
    }
  }
`;

const StyledGradient = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  bottom: 30px;
  right: -25px;
`;
