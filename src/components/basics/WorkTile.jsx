import React from "react";
import styled, { keyframes } from "styled-components";

import { colors, mainContainer, breakpoints } from "../../assets/globalStyles";
import { scrollToElement } from "../../assets/isElementVisible";

import { HTMLContent } from "../helpers/Content";
import { SixPillsARow } from "./SixPillsARow";

export class WorkTile extends React.PureComponent {
  state = {
    showJobDesc: false
  };

  handleClick = bool => {
    let jobDescEl = document.querySelector(
      `#work-title-${this.props.workInfo.index}`
    );
    this.setState({ showJobDesc: bool });
    if (bool) {
      jobDescEl.style.display = "block";
    } else {
      jobDescEl.style.display = "none";
      scrollToElement("work");
    }
  };

  render() {
    const { workInfo, workDesc } = this.props;
    return (
      <StyledWorkTileHolder>
        <StyledWorkMainInfo id={`work-section-${workInfo.index}`}>
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
            <div>
              <p>
                <strong>Main technologies/tools:</strong>
              </p>
              <SixPillsARow pills={workInfo.technologies} />
            </div>
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
  @media ${breakpoints.mobile} {
    font-size: 25px;
    line-height: 30px;
  }
`;

const StyledWorkPeriod = styled.div`
  font-size: 22px;
  line-height: 20px;
  margin-bottom: 50px;
  @media ${breakpoints.mobile} {
    font-size: 20px;
  }
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
  padding: 0 90px;
  @media ${breakpoints.tablet} {
    padding: 0 50px;
  }
  @media ${breakpoints.mobile} {
    padding: 0 20px;
    margin-top: -30px;
  }
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
