import React from "react";
import styled from "styled-components";

import { fontFamilyTitle, colors } from "../assets/globalStyles";
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
`;

const StyledH2 = styled.h2`
  font-size: 45px;
  color: ${colors.greyLight};
  text-align: center;
  line-height: 45px;
  margin-bottom: 5vh;
`;

const StyledUl = styled.ul`
  text-align: center;
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
  }
`;
