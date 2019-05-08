import React from "react";
import styled from "styled-components";

import {
  fontFamilyTitle,
  colors,
  breakpoints
} from "../../assets/globalStyles";

export const ProjectPageTitle = props => <StyledH3>{props.title}</StyledH3>;

const StyledH3 = styled.h3`
  font-size: 26px;
  line-height: 30px;
  font-weight: 600;
  margin: 20px 0;
`;
