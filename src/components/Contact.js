import React from "react";
import styled from "styled-components";
import { rgba } from "polished";

import { colors } from "../assets/globalStyles";

import { SectionTitle } from "./basics/SectionTitle";
import { TextFromString } from "./helpers/Content";

export default class Contact extends React.PureComponent {
  render() {
    return (
      <StyledMainSection className="homepage-section" id="lets-chat-section">
        <SectionTitle title={this.props.sectionTitle} />
        <StyledFigure />
        <TextFromString
          text={this.props.sectionText}
          style={{ marginBottom: "40vh" }}
        />
        {this.props.contactIntoTitles.map((contact, i) => (
          <React.Fragment key={contact}>
            <p>{this.props.contactIntoTitles[i]}</p>
            <p>{this.props.contactIntoInfo[i]}</p>
            <p>{this.props.contactIntoURL[i]}</p>
          </React.Fragment>
        ))}
      </StyledMainSection>
    );
  }
}

const StyledMainSection = styled.section`
  position: relative;
  padding: 10vh 0 5vh;
`;

const StyledFigure = styled.div`
  background: ${rgba(colors.secondary, 0.1)};
  margin-top: -60px;
  margin-left: -50px;
  position: absolute;
  z-index: -1;
  border-radius: 100000px;
  left: -21.3%;
  top: 10px;
  width: 270px;
  height: 270px;
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: -25px;
    width: 150px;
    height: 280px;
    background: white;
  }
`;
