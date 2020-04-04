import React from 'react';
import styled from 'styled-components';

import { colors } from '../assets/globalStyles';
import { TextFromString } from '../components/helpers/Content';

export const Invite = ({ name, text }) => {
  return (
    <StyledInviteWrapper>
      <StyledInvite>
        <div className="invite-border">
          <div className="invite-content">
            <span id="title">{name}</span>
            <TextFromString text={text} />
          </div>
        </div>
      </StyledInvite>
    </StyledInviteWrapper>
  );
};

// styled components
const StyledInviteWrapper = styled.div`
  margin: 22em 0;
`;

const StyledInvite = styled.div`
  position: relative;
  width: 70%;
  height: 500px;
  margin: 15% auto;
  background: ${colors.primary};
  padding: 20px;
  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 140%;
    height: 925px;
    margin: -17% -19%;
    background-image: url('/img/Invite-background.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  .invite-border {
    position: relative;
    background: radial-gradient(
        ellipse farthest-corner at right bottom,
        #fedb37 0%,
        #fdb931 8%,
        #daccae 30%,
        #b9984d 40%,
        transparent 80%
      ),
      radial-gradient(
        ellipse farthest-corner at left top,
        #d2d28b 0%,
        #debf69 8%,
        #d1b464 25%,
        #756439 62.5%,
        #7f7151 100%
      );
    padding: 3px;
    width: 100%;
    height: 100%;
  }
  .invite-content {
    height: 100%;
    background: ${colors.bgColor};
    padding: 2rem;
  }
`;
