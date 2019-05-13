import React from "react";
import styled from "styled-components";

import { breakpoints } from "../assets/globalStyles";

import withMainContainer from "../hocs/withMainContainer";
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
  render() {
    let WorkExperienceProjectsWithMainContainer = withMainContainer(
      this.WorkExperienceContent
    );

    return (
      <StyledMainSection className="homepage-section" id="work-section">
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
