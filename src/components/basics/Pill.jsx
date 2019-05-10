import React from "react";
import styled from "styled-components";

import { colors, breakpoints } from "../../assets/globalStyles";

import { slugify } from "../../assets/helpers";

export class Pill extends React.PureComponent {
  getClassName = () => {
    let className = "";

    if (slugify(this.props.pill).length >= 16) {
      className += " long-name-pill ";
    }

    if (this.props.primary) {
      className += " primary-pill ";
    } else if (this.props.grey) {
      className += " grey-pill ";
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
  @media ${breakpoints.desktop} {
    &.long-name-pill {
      font-size: 16px;
      line-height: 17px;
      padding: 4px 15px 6px;
    }
  }
  @media ${breakpoints.mobile} {
    &.long-name-pill {
      font-size: 12px;
      line-height: 25px;
      padding: 7px;
    }
  }
  @media ${breakpoints.mobileSmall} {
    &.long-name-pill {
      font-size: 14px;
      line-height: 13px;
      padding: 5px 7px 8px;
    }
  }
`;
