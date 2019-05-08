import React from "react";
import styled from "styled-components";

import { colors, breakpoints } from "../../assets/globalStyles";

export class SectionTitle extends React.PureComponent {
  render() {
    return <StyledSectionTitle>{this.props.title}</StyledSectionTitle>;
  }
}

const StyledSectionTitle = styled.h3`
  font-size: 60px;
  line-height: 60px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 40px;
  color: ${colors.greyLight};
  display: inline-block;
  margin-bottom: 80px;
  &:after {
    content: "";
    display: block;
    width: calc(60vw + 100px);
    height: 3px;
    background: #6fe2a5;
    margin-top: 20px;
    position: absolute;
    left: -180px;
  }
  @media ${breakpoints.desktopSmall} {
    &:after {
      width: calc(80vw + 100px);
    }
  }
  @media ${breakpoints.tablet} {
    font-size: 52px;
    letter-spacing: 32px;
  }
  @media ${breakpoints.mobile} {
    font-size: 40px;
    letter-spacing: 24px;
    line-height: 40px;
    margin-bottom: 60px;
    &:after {
      left: -10px;
      width: 90vw;
    }
  }
  @media ${breakpoints.mobileSmall} {
    font-size: 38px;
    letter-spacing: 10px;
  }
`;
