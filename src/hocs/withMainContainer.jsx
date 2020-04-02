/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';

import { mainContainer } from '../assets/globalStyles';

export default function withMainContainer(WrappedComponent) {
  return class extends React.Component {
    render() {
      return (
        <StyledContainer>
          <WrappedComponent {...this.props} />
        </StyledContainer>
      );
    }
  };
}

const StyledContainer = styled.div`
  ${mainContainer};
`;
