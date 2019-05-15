import React from "react";
import styled from "styled-components";

import { Logo } from "./Logo";
import { FooterShapes } from "../shapes/FooterShapes";

export const Footer = () => (
  <StyledFooter>
    <Logo />
    <FooterShapes />
  </StyledFooter>
);

const StyledFooter = styled.div`
  display: block;
  height: 506px;
  overflow: hidden;
`;
