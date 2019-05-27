import React from "react";
import styled from "styled-components";

import { slugify } from "../../assets/helpers";

function GetLogos({ techs }) {
  return techs.map(tech => {
    let logoSlug = slugify(tech);
    if (logoSlug === "react") {
      logoSlug = `${logoSlug}-logo`;
    }
    try {
      const TechLogo = require(`../../assets/img/tech-logos/${logoSlug}.svg`);
      return (
        <div className="tech-logo" key={logoSlug}>
          <TechLogo className={logoSlug} />
        </div>
      );
    } catch (err) {}
  });
}

export class TechLogos extends React.PureComponent {
  render() {
    return (
      <StyledTechLogosHolder>
        <GetLogos techs={this.props.techs} />
      </StyledTechLogosHolder>
    );
  }
}

const StyledTechLogosHolder = styled.div`
  position: absolute;
  top: -25px;
  right: 0px;
  .tech-logo {
    margin-right: 5px;
    float: left;
    border-radius: 1000px;
    background: #fcfcfc;
    border: 2px solid #f4f4f4;
    padding: 5px;
    svg {
      height: 35px;
      width: 35px;
      vertical-align: bottom;
      &.javascript,
      &.html {
        padding: 3px;
      }
    }
  }
`;
