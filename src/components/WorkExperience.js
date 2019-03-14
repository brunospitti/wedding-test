import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { rgba } from "polished";

import { colors, breakpoints } from "../assets/globalStyles";

import { SectionTitle } from "./basics/SectionTitle";
import { WorkTile } from "./basics/WorkTile";

export default class WorkExperience extends React.PureComponent {
  render() {
    const { workExperiences } = this.props;

    return (
      <StyledMainSection className="homepage-section" id="work-section">
        <SectionTitle title={this.props.sectionTitle} />
        <div>
          {workExperiences.map(({ node: work }) => {
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
