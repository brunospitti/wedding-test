import React from 'react';
import styled from 'styled-components';
import withMainContainer from '../../hocs/withMainContainer';

export const SectionRaw = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};

export const Section = withMainContainer(SectionRaw);

// styled components
const StyledSection = styled.div`
  margin: 8em 0;
  width: 100%;
  height: 100%;
  position: relative;
`;
