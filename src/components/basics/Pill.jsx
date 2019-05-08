import React from "react";
import styled from "styled-components";

import { colors } from "../../assets/globalStyles";

import { slugify } from "../../assets/helpers";

export class Pill extends React.PureComponent {
  getClassName = () => {
    let className = "";
    if (this.props.primary) {
      className = "primary-pill";
    } else if (this.props.grey) {
      className = "grey-pill";
    }
    return className;
  };

  render() {
    return (
      <StyledPill id={slugify(this.props.pill)} className={this.getClassName()}>
        {this.props.pill}
      </StyledPill>
    );
  }
}

const StyledPill = styled.li`
  padding: 7px;
  display: inline-block;
  width: 190px;
  text-align: center;
  border-radius: 6px;
  vertical-align: top;
  &:not(:first-child) {
    margin-left: 3%;
  }
  &.primary-pill {
    background: white;
    border: 1px solid ${colors.primary};
    color: ${colors.primary};
  }
  &.grey-pill {
    background: ${colors.greyLight};
    color: white;
  }
`;
