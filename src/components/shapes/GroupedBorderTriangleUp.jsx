import React from "react";
import styled from "styled-components";

import SvgBorderTriangleUp from "../../assets/img/geometric-shapes/border-triangle-up.svg";

import { colors } from "../../assets/globalStyles";

export const GroupedBorderTriangleUp = () => (
  <StyledSvgsHolder className="grouped-border-triangle-up">
    <SvgBorderTriangleUp id="svg-grouped-border-triangle-up-1" />
    <SvgBorderTriangleUp id="svg-grouped-border-triangle-up-2" />
    <SvgBorderTriangleUp id="svg-grouped-border-triangle-up-3" />
    <SvgBorderTriangleUp id="svg-grouped-border-triangle-up-4" />
  </StyledSvgsHolder>
);

const StyledSvgsHolder = styled.div`
  svg {
    position: absolute;
    width: 70px;
    fill: ${colors.greyLight};
    &#svg-grouped-border-triangle-up-2 {
      transform: scale(0.85);
      top: -70px;
    }
    &#svg-grouped-border-triangle-up-3 {
      transform: scale(0.7);
      top: -130px;
    }
    &#svg-grouped-border-triangle-up-4 {
      transform: scale(0.55);
      top: -180px;
    }
  }
`;
