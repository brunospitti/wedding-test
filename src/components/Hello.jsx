import React from "react";
import styled from "styled-components";
import { rgba } from "polished";

import { colors, breakpoints } from "../assets/globalStyles";

import withMainContainer from "../hocs/withMainContainer";
import { SectionTitle } from "./basics/SectionTitle";
import { TextFromString } from "./helpers/Content";

export default class Hello extends React.PureComponent {
  HelloContent = () => (
    <React.Fragment>
      <SectionTitle title={`${this.props.sectionTitle},`} />
      <StyledFigure />
      <StyledTextFromString text={this.props.sectionText} />
    </React.Fragment>
  );

  render() {
    let HelloWithMainContainer = withMainContainer(this.HelloContent);
    return (
      <StyledMainSection className="homepage-section" id="about-me-section">
        <HelloWithMainContainer />
      </StyledMainSection>
    );
  }
}

const StyledMainSection = styled.section`
  position: relative;
  padding: 10vh 0 5vh;
`;

const StyledFigure = styled.div`
  width: 360px;
  height: 380px;
  background: ${rgba(colors.secondary, 0.1)};
  margin-top: -60px;
  margin-left: -50px;
  position: absolute;
  z-index: -1;
  @media ${breakpoints.mobile} {
    width: 200px;
    height: 200px;
    margin-top: -40px;
  }
`;

const StyledTextFromString = styled(TextFromString)`
  margin-bottom: 35vh;
  @media ${breakpoints.mobile} {
    margin-bottom: 25vh;
  }
`;
