import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { colors, breakpoints } from "../../assets/globalStyles";

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
  @media ${breakpoints.desktopSmall} {
    width: 24%;
    &:not(:first-child) {
      margin-left: 1%;
    }
  }
  @media ${breakpoints.tablet} {
    width: 48%;
    margin-left: 0 !important;
    margin-bottom: 70px;
    &:not(:nth-child(2n + 1)) {
      margin-left: 4% !important;
    }
  }
  @media ${breakpoints.mobile} {
		&:not(:nth-child(2n + 1)) {
      margin-left: 2% !important;
    }
	}
  @media ${breakpoints.mobileSmall} {
		margin-left: 0 !important;
    width: 100%;
    &:not(:nth-child(2n + 1)) {
      margin-left: 0 !important;
    }
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
  @media ${breakpoints.desktopSmall} {
    font-size: 22px;
  }
  @media ${breakpoints.mobile} {
		font-size: 20px;
	}
`;

const StyledContactBriefDesc = styled.div`
  padding-left: 20px;
  font-size: 18px;
  margin-top: -6px;
  @media ${breakpoints.desktopSmall} {
    font-size: 16px;
  }
`;