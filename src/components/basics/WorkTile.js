import React from "react";
import { Link } from "gatsby";
import styled, { keyframes } from "styled-components";

import { colors, mainContainer, breakpoints } from "../../assets/globalStyles";

import { HTMLContent } from "../helpers/Content";
import { Pill } from "./Pill";

export class WorkTile extends React.PureComponent {
  state = {
    showJobDesc: false
  };

  handleClick = bool => {
    let jobDescEl = document.querySelector(
      `#work-title-${this.props.workInfo.index}`
    );
    console.log("TCL: WorkTile -> jobDescEl", jobDescEl);
    console.log("TCL: WorkTile -> this.props.id", this.props.id);
    this.setState({ showJobDesc: bool });
    bool
      ? (jobDescEl.style.display = "block")
      : (jobDescEl.style.display = "none");
  };

  render() {
    const { workInfo, workDesc } = this.props;
    return (
      <StyledWorkTileHolder>
        <StyledWorkMainInfo>
          <StyledWorkTitle>{workInfo.title}</StyledWorkTitle>
          <StyledWorkPeriod>{workInfo.period}</StyledWorkPeriod>
          <StyledWorkBriefDesc>
            {workInfo.brief_description}
          </StyledWorkBriefDesc>
          <StyledButton onClick={() => this.handleClick(true)}>
            Read more.
          </StyledButton>
        </StyledWorkMainInfo>
        <StyledJobDescriptionOuter
          className={this.state.showJobDesc ? "show" : "hide"}
          id={`work-title-${workInfo.index}`}
        >
          <StyledJobDescription>
            <HTMLContent content={workDesc} />
            <StyledPillsHolder>
              <p>
                <strong>Main technologies/tools:</strong>
              </p>
              <ul className="pills-holder">
                {workInfo.technologies.map((tech, i) => (
                  <Pill primary key={tech} pill={tech} />
                ))}
              </ul>
            </StyledPillsHolder>
            <StyledButton onClick={() => this.handleClick(false)}>
              Read less.
            </StyledButton>
          </StyledJobDescription>
        </StyledJobDescriptionOuter>
      </StyledWorkTileHolder>
    );
  }
}

const StyledWorkTileHolder = styled.div`
  margin-bottom: 100px;
`;
const StyledWorkMainInfo = styled.div`
  position: relative;
  z-index: 0;
`;

const StyledWorkTitle = styled.h4`
  font-size: 30px;
  line-height: 32px;
  margin-bottom: 15px;
`;

const StyledWorkPeriod = styled.div`
  font-size: 22px;
  line-height: 20px;
  margin-bottom: 50px;
`;

const StyledWorkBriefDesc = styled.div`
  margin-bottom: 60px;
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  font-weight: bold;
  color: ${colors.tertiary};
  cursor: pointer;
`;

const expandsJobDesc = keyframes`
  0% {
    height: 0;
    opacity: 0;
    visibility: hidden;
    padding: 0;
  }
  100% {
    height: auto;
    opacity: 1;
    visibility: visible;
    padding: 70px 0;
  }
`;

const compressJobDesc = keyframes`
  0% {
    width: auto;
    opacity: 1;
    visibility: visible;
    padding: 70px 0;
  }
  100% {
    width: 0;
    opacity: 0;
    visibility: hidden;
    padding: 0;
  }
`;

const StyledJobDescriptionOuter = styled.div`
  display: none;
  height: 0;
  opacity: 0;
  visibility: hidden;
  background: #f7f7f7;
  margin-top: -30px;
  margin-bottom: 100px;
  z-index: 9999999;
  padding: 0;
  position: relative;
  width: 100vw;
  left: calc(-50vw + 50%);
  &.show {
    animation: ${expandsJobDesc} 0.2s ease forwards;
  }
  &.hide {
    animation: ${compressJobDesc} 0.2s ease forwards;
  }
`;

const StyledJobDescription = styled.div`
  ${mainContainer};
  strong {
    font-weight: bold;
  }
  ul {
    margin: 20px 0;
    &:not(.pills-holder) {
      li {
        &:before {
          content: "-";
          display: inline-block;
          margin-right: 10px;
        }
        &:not(:first-child) {
          margin-top: 30px;
        }
      }
    }
  }
`;

const StyledPillsHolder = styled.div`
  ul {
    margin-bottom: 60px;
    li {
      font-size: 18px;
      width: 190px;
      &:not(:first-child) {
        margin-left: 12px;
      }
      @media ${breakpoints.workPillFixes} {
        width: 172px;
      }
      @media ${breakpoints.desktopSmall} {
        width: 280px;
        margin-bottom: 15px;
        &:nth-child(4) {
          margin-left: 0;
        }
      }
    }
  }
`;
