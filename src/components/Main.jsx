import React from "react";
import styled from "styled-components";

import { colors, breakpoints } from "../assets/globalStyles";
import Arrow from "../assets/img/arrow.svg";

import { BrunoSpitti } from "./basics/BrunoSpitti";
import { Pill } from "./basics/Pill";

export default class Main extends React.PureComponent {
  render() {
    return (
      <StyledMainSection className="homepage-section" id="home-section">
        <BrunoSpitti/>
        <StyledH2>Front-end developer</StyledH2>
        <StyledUl>
          {this.props.mainTech.map(tech => (
            <Pill grey key={tech} pill={tech} />
          ))}
        </StyledUl>
        <StyledSvgHolder>
          <Arrow />
        </StyledSvgHolder>
      </StyledMainSection>
    );
  }
}

const StyledMainSection = styled.section`
  height: 100vh;
  position: relative;
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
  li{
    @media ${breakpoints.desktopSmall} {
      width: 155px;
      &:not(:first-child){
        margin-left: 2%;
      }
    }
    @media ${breakpoints.tablet} {
      width: 123px;
      font-size: 20px;
      &#javascript{
        font-size: 18px;
      }
    }
    @media ${breakpoints.mobile} {
      &#html,
      &#cssscss{
        margin-top: 10px;
      }
    }
    @media ${breakpoints.mobileSmall} {
      margin-left: 0 !important;
      &:not(:nth-child(2n + 1)) {
        margin-left: 25px !important;
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
