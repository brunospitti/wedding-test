import React from "react";
import styled from "styled-components";

import NonStretchedImg from "./NonStretchedImg";

export class Logo extends React.PureComponent {
  render() {
    return (
      <StyledLogoHolder>
        <img src="/static/bruno-spitti-logo-4441fea93646b4a97722e80c288cfd6d.png" alt="Bruno Spitti"/>
      </StyledLogoHolder>
    );
  }
}

const StyledLogoHolder = styled.div`
  padding: 50px;
  text-align: center;
`