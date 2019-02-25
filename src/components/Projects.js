import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { rgba } from "polished";

import { colors } from "../assets/globalStyles";

import { SectionTitle } from "./basics/SectionTitle";
import { TextFromString } from "./helpers/Content";
import { ProjectTile } from "./basics/ProjectTile";
import { Button } from "./basics/Button";

export default class Projects extends React.PureComponent {
  state = {
    showMore: false
  };

  showMoreFunc = () => {
    this.setState({ showMore: !this.state.showMore });
  };

  render() {
    const { projects } = this.props;

    return (
      <StyledMainSection className="homepage-section" id="projects-section">
        <SectionTitle title={this.props.sectionTitle} />
        <TextFromString
          text={this.props.sectionText}
          style={{ marginBottom: "150px" }}
        />

        <StyledProjectTilesHolder
          className={this.state.showMore ? "expanded" : "collapsed"}
        >
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
          <StyledButtonHolder>
            <Button
              white
              clickBehavior={this.showMoreFunc}
              text={
                this.state.showMore
                  ? "Show less projects"
                  : "Show more projects"
              }
            />
          </StyledButtonHolder>
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
  &.expanded {
    max-height: auto;
    overflow: initial;
  }
  &.collapsed {
    max-height: 930px;
    overflow: hidden;
  }
`;

const StyledButtonHolder = styled.div`
  position: absolute;
  bottom: -60px;
  left: 0;
  width: 100%;
  text-align: center;
  button {
    border-bottom: 1px solid;
    border-radius: 0;
  }
`;
