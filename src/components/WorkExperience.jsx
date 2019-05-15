import React from "react";
import styled from "styled-components";
import Parallax from "react-rellax";

import { breakpoints, colors } from "../assets/globalStyles";
import UnevenStripes from "../assets/img/geometric-shapes/uneven-stripes.svg";
import FilledTriangle from "../assets/img/geometric-shapes/filled-triangle.svg";
import BorderTriangle from "../assets/img/geometric-shapes/border-triangle.svg";

import withMainContainer from "../hocs/withMainContainer";
import withGradientFill from "../hocs/withGradientFill";
import { SectionTitle } from "./basics/SectionTitle";
import { WorkTile } from "./basics/WorkTile";

export default class WorkExperience extends React.PureComponent {
  WorkExperienceContent = () => (
    <React.Fragment>
      <SectionTitle title={this.props.sectionTitle} />
      <div>
        {this.props.workExperiences.map(({ node: work }) => {
          const info = work.frontmatter;
          const infoHTML = work.html;
          return (
            <WorkTile
              key={work.id}
              id={work.id}
              work={work}
              workInfo={info}
              workDesc={infoHTML}
            />
          );
        })}
      </div>
    </React.Fragment>
  );

  svgGradientObj = {
    topColor: colors.tertiary,
    bottomColor: colors.primary,
    opacity: "1"
  };

  render() {
    let WorkExperienceProjectsWithMainContainer = withMainContainer(
      this.WorkExperienceContent
    );
    let UnevenStripesWithGradientFill = withGradientFill(UnevenStripes);

    return (
      <StyledMainSection className="homepage-section" id="work-section">
        <Parallax speed={3}>
          <StyledGradient>
            <UnevenStripesWithGradientFill
              svgGradientObj={this.svgGradientObj}
            />
          </StyledGradient>
        </Parallax>
        <Parallax speed={3}>
          <StyledFilledTriangle />
        </Parallax>
        <Parallax speed={3.05}>
          <StyledBorderTriangle />
        </Parallax>
        <WorkExperienceProjectsWithMainContainer />
      </StyledMainSection>
    );
  }
}

const StyledMainSection = styled.section`
  position: relative;
  padding: 10vh 0 5vh;
  h3 {
    letter-spacing: 10px !important;
    @media ${breakpoints.mobileSmall} {
      font-size: 33px;
    }
  }
`;

const StyledGradient = styled.div`
  position: absolute;
  width: 60px;
  top: 600px;
  right: 0;
  transform: rotate(90deg) scaleX(-1);
  @media ${breakpoints.mobile} {
    transform: rotate(90deg) scaleX(-1) scale(0.6);
  }
`;

const StyledFilledTriangle = styled(FilledTriangle)`
  position: absolute;
  width: 80px;
  top: 1500px;
  fill: ${colors.greyDark};
  left: calc(2% + 7px);
  transform: scaleX(-1);
  @media ${breakpoints.mobile} {
    display: none;
  }
`;

const StyledBorderTriangle = styled(BorderTriangle)`
  position: absolute;
  width: 80px;
  top: 1500px;
  left: 2%;
  transform: scaleX(-1);
  path {
    stroke: ${colors.greyDark};
  }
  @media ${breakpoints.mobile} {
    top: 2000px;
  }
`;
