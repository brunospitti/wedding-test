import React from "react";
import styled from "styled-components";

import { fontFamilyTitle, colors, breakpoints } from "../assets/globalStyles";
import Arrow from "../assets/img/arrow.svg";

import { Pill } from "./basics/Pill";

export default class Main extends React.PureComponent {
  render() {
    return (
      <StyledMainSection className="homepage-section" id="home-section">
        <StyledH1>Bruno Spitti</StyledH1>
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
