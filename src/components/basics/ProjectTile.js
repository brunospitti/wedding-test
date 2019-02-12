import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { colors } from "../../assets/globalStyles";

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
  width: 31%;
  display: inline-block;
  position: relative;
  background: #fcfcfc;
  border: 3px solid #f4f4f4;
  padding: 20px 20px 5px;
  height: 250px;
  vertical-align: top;
  margin-bottom: 60px;
  &:not(:nth-child(3n + 1)) {
    margin-left: 3.5%;
  }
  &:after {
    content: "";
    display: block;
    height: 50px;
    border: 3px solid ${colors.primary};
    border-top: none;
    width: 100%;
    position: absolute;
    left: -3px;
    bottom: -3px;
    z-index: 1;
  }
`;

const StyledProjectTitle = styled.h4`
  margin-bottom: 30px;
  a {
    text-decoration: none;
    font-size: 24px;
    color: ${colors.primary};
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
