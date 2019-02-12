import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { rgba } from "polished";

import { colors } from "../assets/globalStyles";

import { SectionTitle } from "./basics/SectionTitle";
import { TextFromString } from "./helpers/Content";
import { ProjectTile } from "./basics/ProjectTile";

export default class Projects extends React.PureComponent {
  render() {
    const { projects } = this.props;

    return (
      <StyledMainSection>
        <SectionTitle title={this.props.sectionTitle} />
        <TextFromString
          text={this.props.sectionText}
          style={{ marginBottom: "150px" }}
        />

        <StyledProjectTilesHolder>
          {projects.map(({ node: project }) => {
            const info = project.frontmatter;
            return (
              <ProjectTile
                key={info.title}
                projectTitle={info.title}
                projectBriefDesc={info.brief_description}
                projectURL={project.fields.slug}
              />
            );
          })}
        </StyledProjectTilesHolder>
      </StyledMainSection>
    );
  }
}

const StyledMainSection = styled.section`
  position: relative;
`;

const StyledProjectTilesHolder = styled.section`
  margin-bottom: 250px;
`;
