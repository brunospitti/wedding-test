import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { colors, breakpoints } from "../../assets/globalStyles";

export class ProjectTile extends React.PureComponent {
  render() {
    return (
      <StyledProjectHolder>
        <StyledProjectTitle>
          <Link to={this.props.projectURL}>{this.props.projectTitle}</Link>
        </StyledProjectTitle>
        <StyledProjectBriefDesc>
          {this.props.projectBriefDesc}
        </StyledProjectBriefDesc>
        <StyledLinkHolder>
          <Link to={this.props.projectURL}>Click here to read more.</Link>
        </StyledLinkHolder>
      </StyledProjectHolder>
    );
  }
}

const StyledProjectHolder = styled.div`
  width: 43%;
  display: inline-block;
  position: relative;
  background: #fcfcfc;
  border: 3px solid #f4f4f4;
  padding: 20px 20px 5px;
  height: 250px;
  vertical-align: top;
  margin-bottom: 60px;
  &:nth-child(6n-4),
  &:nth-child(6n-5){
    a{
      color: ${colors.primary};
    }
    &:after {
      border: 3px solid ${colors.primary};
    }
  }
  &:nth-child(6n-2),
  &:nth-child(6n-3){
    a{
      color: ${colors.secondary};
    }
    &:after {
      border: 3px solid ${colors.secondary};
    }
  }
  &:nth-child(6n),
  &:nth-child(6n-1){
    a{
      color: ${colors.tertiary};
    }
    &:after {
      border: 3px solid ${colors.tertiary};
    }
  }
  &:not(:nth-child(2n + 1)) {
    margin-left: 14%;
  }
  &:after {
    content: "";
    display: block;
    height: 50px;
    border-top: none !important;
    width: 100%;
    position: absolute;
    left: -3px;
    bottom: -3px;
    z-index: 1;
  }
  @media ${breakpoints.desktopSmall} {
    width: 47%;
    &:not(:nth-child(2n + 1)) {
      margin-left: 6%;
    }
  }
`;

const StyledProjectTitle = styled.h4`
  margin-bottom: 30px;
  a {
    text-decoration: none;
    font-size: 24px;
  }
`;

const StyledProjectBriefDesc = styled.div`
  font-size: 18px;
  line-height: 20px;
  margin-bottom: 30px;
`;

const StyledLinkHolder = styled.div`
  text-align: center;
  position: absolute;
  width: calc(100% - 40px);
  bottom: 10px;
  z-index: 999;
  a {
    font-size: 16px;
    text-decoration: none;
    font-weight: bold;
  }
`;
