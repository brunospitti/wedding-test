import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { colors } from "../../assets/globalStyles";

export class ContactTile extends React.PureComponent {
  render() {
    return (
      <StyledContactLinkHolder>
        <a href={this.props.contactInfoURL}>
          <StyledContactBox/>
          <StyledContactTitle>
            {this.props.contactInfoTitle}
          </StyledContactTitle>
          <StyledContactBriefDesc>
            {this.props.contactInfoInfo}
          </StyledContactBriefDesc>
        </a>
      </StyledContactLinkHolder>
    );
  }
}

const StyledContactLinkHolder = styled.div`
  width: 19%;
  display: inline-block;
  &:not(:first-child) {
    margin-left: 8%;
  }
  a{
    text-decoration: none;
  }
`

const StyledContactBox = styled.div`
  display: block;
  position: absolute;
  background: #fcfcfc;
  border: 3px solid #f4f4f4;
  height: 100px;
  width: 75px;
  margin-bottom: 60px;
  z-index: -1;
  &:after {
    content: "";
    display: block;
    height: 20px;
    border: 3px solid ${colors.secondary};
    border-top: none !important;
    width: 100%;
    position: absolute;
    left: -3px;
    bottom: -3px;
    z-index: 1;
  }
`;

const StyledContactTitle = styled.h4`
  padding: 20px 0 0 20px;
  font-size: 24px;
  color: ${colors.secondary};
`;

const StyledContactBriefDesc = styled.div`
  padding-left: 20px;
  font-size: 18px;
  margin-top: -6px;
`;