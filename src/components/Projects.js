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
        <div style={{marginBottom: "250px"}}>
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
          </StyledProjectTilesHolder>
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
        </div>
      </StyledMainSection>
    );
  }
}

const StyledMainSection = styled.section`
  position: relative;
  padding: 10vh 0 5vh;
`;

const StyledProjectTilesHolder = styled.div`
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
  bottom: 250px;
  left: 0;
  width: 100%;
  text-align: center;
  z-index: 9999;
  button {
    border-bottom: 1px solid;
    border-radius: 0;
  }
`;
