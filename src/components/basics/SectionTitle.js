import React from "react";
import styled from "styled-components";

import { colors } from "../../assets/globalStyles";

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
`;
