import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import differenceInDays from 'date-fns/differenceInDays';

import { breakpoints, colors, fontFamilyTitle } from '../assets/globalStyles';

export const Invite = ({ name, info }) => {
  const daysLeft = differenceInDays(new Date(2020, 11, 19), new Date());
  const [showPictures, setShowPictures] = useState(false);

  function useHideOutsideClick(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (
          ref.current &&
          !ref.current.contains(event.target) &&
          event.target.parentNode.className !== 'show-pictures'
        ) {
          setShowPictures(false);
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useHideOutsideClick(wrapperRef);

  return (
    <StyledInviteWrapper>
      <StyledInvite>
        <div className="invite-border">
          <div className="invite-background">
            <div className="invite-content">
              <StyledInviteMain>
                <div className="invite-side invite-left">
                  <div className="title">{`${name || info.hello},`}</div>
                  <div className="we-invite-you">{info.invite}</div>
                  <div className="info">
                    <div className="date">{info.weddingDate}</div>
                    <div className="info--sub">
                      <div className="time">
                        <span>16</span>hrs
                      </div>
                      <div className="place">
                        <span>Fazenda Fagundes</span>Rodovia Arão Sahm, 1632-1748,
                        Mairiporã SP
                      </div>
                    </div>
                  </div>
                </div>
                <div className="invite-side invite-right">
                  {info.countdown_still} <span id="days">{daysLeft}</span>{' '}
                  {info.countdown_days}
                </div>
              </StyledInviteMain>

              <StyledInviteFooter>
                <div className="temperature">
                  <div className="sun"></div>
                  <div className="info">
                    <span id="title">{info.weather_title}</span>
                    <div>
                      <span>{info.weather_min} 18° C</span>
                      <span>{info.weather_max} 25° C</span>
                      <span>{info.weather_prec} 4.4mm</span>
                    </div>
                  </div>
                </div>
                <div
                  className="show-pictures"
                  onClick={() => setShowPictures(!showPictures)}
                >
                  <div className="photo"></div>
                  <span>{info.show_pictures}</span>
                </div>
              </StyledInviteFooter>
            </div>
          </div>
        </div>
        <StyledFazenda className={showPictures && 'show-fazenda'} ref={wrapperRef}>
          <div className="picture" id="fazenda-1"></div>
          <div className="picture" id="fazenda-2"></div>
          <div className="picture" id="fazenda-3"></div>
          <div className="picture" id="fazenda-4"></div>
          <div className="picture" id="fazenda-5"></div>
        </StyledFazenda>
      </StyledInvite>
    </StyledInviteWrapper>
  );
};

// styled components
const StyledInviteWrapper = styled.div`
  margin: 22em 0;
  @media ${breakpoints.desktop} {
    margin: 18em 0;
  }
  @media ${breakpoints.desktopSmall} {
    margin: 14em 0;
  }
  @media ${breakpoints.desktopExtraSmall} {
    margin: 12em 0;
  }
`;

const StyledInvite = styled.div`
  position: relative;
  width: 70%;
  height: 500px;
  margin: 15% auto;
  background: ${colors.primary};
  padding: 20px;
  @media ${breakpoints.desktopSmall} {
    width: 80%;
    margin: 10% auto;
    padding: 15px;
  }
  @media ${breakpoints.desktopExtraSmall} {
    width: 88%;
    height: 460px;
    margin: 6% auto;
    padding: 15px;
  }
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
    @media ${breakpoints.desktop} {
      width: 130%;
      height: 810px;
      margin: -17% -15%;
    }
    @media ${breakpoints.desktopSmall} {
      width: 140%;
      height: 770px;
      margin: -12% -22%;
    }
    @media ${breakpoints.desktopExtraSmall} {
      width: 120%;
      height: 600px;
      margin: -10% -12%;
    }
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
    padding: 5px;
    width: 100%;
    height: 100%;
  }
  .invite-background {
    height: 100%;
    background: white;
    padding: 2em 2em 1em;
    position: relative;
    &::before {
      content: '';
      display: block;
      position: absolute;
      width: 31%;
      top: 0;
      right: 0;
      border-bottom: 450px solid ${colors.bgColor};
      border-left: 120px solid transparent;
      @media ${breakpoints.desktopSmall} {
        border-bottom-width: 460px;
      }
      @media ${breakpoints.desktopExtraSmall} {
        border-bottom-width: 420px;
      }
    }
  }
  .invite-content {
    position: relative;
    z-index: 9;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

const StyledInviteMain = styled.div`
  display: flex;
  height: 100%;
  font-weight: 300;
  .invite-side {
    &.invite-left {
      flex: 1;
      font-size: 0.7em;
      .title {
        font-size: 3em;
        text-transform: capitalize;
      }
      .we-invite-you {
        font-size: 2em;
        margin-top: 0.5em;
      }
      .info {
        margin-top: 5em;
        font-size: inherit;
        .date {
          font-size: 3em;
        }
        .info--sub {
          display: flex;
          margin-top: 1em;
          align-items: center;
          .time {
            span {
              font-size: 4em;
            }
          }
          .place {
            border-left: 1px solid #ababab;
            padding-left: 1em;
            margin-left: 1em;
            font-size: 1em;
            width: 16em;
            letter-spacing: 0.115em;
            span {
              font-size: 1.5em;
              display: block;
              margin-bottom: 0.2em;
              letter-spacing: 0.115em;
            }
          }
        }
      }
    }
    &.invite-right {
      margin-top: -0.7em;
      width: 31%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      font-size: 1em;
      font-size: 2.25em;
      text-transform: uppercase;
      span {
        font-family: ${fontFamilyTitle};
        font-size: 5em;
        line-height: 0.9;
        letter-spacing: 0.2em;
        margin: -0.1em 0 0.1em 0.2em;
      }
    }
  }
`;

const StyledInviteFooter = styled.div`
  margin-top: auto;
  display: flex;
  .sun,
  .photo {
    display: inline-block;
    height: 30px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  > div {
    display: flex;
    align-items: center;
    span {
      font-size: 0.8em;
    }
    &.temperature {
      flex: 1;
      .sun {
        margin-right: 0.5em;
        width: 30px;
        background-image: url('/img/sun.png');
      }
      span {
        margin-right: 1em;
        &#title {
          margin-right: 0;
          font-weight: 600;
          display: block;
        }
      }
    }
    &.show-pictures {
      flex-basis: 34%;
      margin-right: auto;
      cursor: pointer;
      border-bottom: 1px solid transparent;
      transition: all 0.25s ease;
      &:hover {
        border-bottom: 1px solid;
      }
      .photo {
        width: 55px;
        background-image: url('/img/photo.png');
        margin-right: 0.75em;
      }
    }
  }
`;

const StyledFazenda = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 1em;
  background: white;
  opacity: 0;
  height: 0px;
  transition: all 0.5s ease;
  &.show-fazenda {
    height: auto;
    opacity: 1;
    .picture {
      height: 200px;
      @media ${breakpoints.desktop} {
        height: 170px;
      }
      @media ${breakpoints.desktopSmall} {
        height: 150px;
      }
      @media ${breakpoints.desktopExtraSmall} {
        height: 140px;
      }
    }
  }
  .picture {
    width: 18%;
    max-width: 200px;
    height: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    transition: all 0.25s ease;
    &#fazenda-1 {
      background-image: url('/img/fazenda-1.jpg');
    }
    &#fazenda-2 {
      background-image: url('/img/fazenda-2.jpg');
    }
    &#fazenda-3 {
      background-image: url('/img/fazenda-3.jpg');
    }
    &#fazenda-4 {
      background-image: url('/img/fazenda-4.jpg');
    }
    &#fazenda-5 {
      background-image: url('/img/fazenda-5.jpg');
    }
  }
`;
