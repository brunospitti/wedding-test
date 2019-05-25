import React from "react";
import styled from "styled-components";

import { Logo } from "./Logo";
import { FooterShapes } from "../shapes/FooterShapes";

export const Footer = ({ footerLogo }) => (
  <StyledFooter height={footerLogo ? "506px" : "260px"}>
    {footerLogo && <Logo />}
    <FooterShapes />
  </StyledFooter>
);

const StyledFooter = styled.div`
  display: block;
  height: ${props => props.height};
  overflow: hidden;
`;
