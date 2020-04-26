import React from 'react';
import styled from 'styled-components';

import { breakpoints, fontFamilyTitle } from '../assets/globalStyles';

export const Title = ({ text }) => {
  return <StyledTitle>{text}</StyledTitle>;
};

// styled components
const StyledTitle = styled.div`
  font-family: ${fontFamilyTitle};
  font-size: 5em;
  margin: 0.5em 0;
  @media ${breakpoints.mobile} {
    font-size: 3em;
  }
`;
