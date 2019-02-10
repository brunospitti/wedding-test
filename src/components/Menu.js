import React from "react";
import styled from "styled-components";

import { colors } from "../assets/globalStyles";

export class Menu extends React.PureComponent {
  state = {
    sectionNames: ["home", "about me", "projects", "work", "let's chat"],
    expandMenu: true
  };

  render() {
    return (
      <StyledMenu className={this.state.expandMenu ? "show" : "hide"}>
        <ul>
          {this.state.sectionNames.map(section => (
            <StyledMenuItem>
              <i />
              <div>{section}</div>
            </StyledMenuItem>
          ))}
        </ul>
      </StyledMenu>
    );
  }
}

const StyledMenu = styled.div`
  padding: 7px;
  display: inline-block;
  width: 190px;
  text-align: center;
  border-radius: 6px;
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

const StyledMenuItem = styled.li`
  text-align: right;
  margin-bottom: 5px;
  i {
    height: 20px;
    width: 20px;
    background: blue;
    border-radius: 5000px;
    float: right;
    margin-top: 6px;
    margin-left: 15px;
  }
  div {
    display: inline-block;
  }
`;
