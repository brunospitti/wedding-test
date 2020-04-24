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
      <StyledInvite colors={colors}>
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
  @media ${breakpoints.tabletSmall} {
    height: 800px;
  }
  @media ${breakpoints.mobileSmall} {
    width: 100%;
    height: 690px;
    padding: 7px;
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
    @media ${breakpoints.tablet} {
      width: 130%;
      height: 650px;
      margin: -12% -15%;
    }
    @media ${breakpoints.tabletSmall} {
      width: 150%;
      height: 940px;
      margin: -12% -25%;
      transform: rotate(90deg);
      background-repeat-y: repeat;
    }
    @media ${breakpoints.mobile} {
      margin: -15% -60%;
      width: 210%;
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
    @media ${breakpoints.mobileSmall} {
      padding: 4px;
    }
  }
  .invite-background {
    height: 100%;
    background: white;
    padding: 2em 2em 1em;
    position: relative;
    @media ${breakpoints.mobile} {
      padding: 1.5em 1em;
    }
    @media ${breakpoints.mobileSmall} {
      padding: 1em 0.5em;
    }
    &::before {
      content: '';
      display: block;
      position: absolute;
      width: 80%;
      height: 100%;
      top: 0;
      background: linear-gradient(
        286deg,
        ${({ colors }) => colors.bgColor} 0%,
        ${({ colors }) => colors.bgColor} 48%,
        transparent 48.2%,
        transparent 100%
      );
      right: 0;
      @media ${breakpoints.tabletSmall} {
        width: 100%;
        height: 84%;
        background: linear-gradient(
          -7deg,
          ${({ colors }) => colors.bgColor} 0%,
          ${({ colors }) => colors.bgColor} 46%,
          transparent 46.2%,
          transparent 100%
        );
      }
      @media ${breakpoints.mobile} {
        height: 77%;
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
  @media ${breakpoints.tabletSmall} {
    flex-direction: column;
  }
  @media ${breakpoints.mobile} {
    font-size: 0.9em;
  }
  @media ${breakpoints.mobile} {
    margin-bottom: 2em;
  }
  @media ${breakpoints.mobileSmall} {
    font-size: 0.8em;
    margin-bottom: 1.2em;
  }
  .invite-side {
    &.invite-left {
      flex: 1;
      font-size: 0.7em;
      @media ${breakpoints.tabletSmall} {
        text-align: center;
      }
      .title {
        font-size: 3em;
        text-transform: capitalize;
        @media ${breakpoints.mobileSmall} {
          font-size: 2.8em;
        }
      }
      .we-invite-you {
        font-size: 2em;
        margin-top: 0.5em;
      }
      .info {
        margin-top: 5em;
        font-size: inherit;
        @media ${breakpoints.mobile} {
          margin-top: 4em;
        }
        @media ${breakpoints.mobileSmall} {
          margin-top: 3em;
        }
        .date {
          font-size: 3em;
        }
        .info--sub {
          display: flex;
          margin-top: 1em;
          align-items: center;
          @media ${breakpoints.tabletSmall} {
            display: inline-flex;
          }
          @media ${breakpoints.mobile} {
            font-size: 1.3em;
          }
          @media ${breakpoints.mobileSmall} {
            flex-direction: column;
          }
          .time {
            span {
              font-size: 4em;
              @media ${breakpoints.mobileSmall} {
                font-size: 2.5em;
              }
            }
          }
          .place {
            border-left: 1px solid #ababab;
            padding-left: 1em;
            margin-left: 1em;
            font-size: 1em;
            width: 16em;
            letter-spacing: 0.115em;
            @media ${breakpoints.mobileSmall} {
              font-size: 1.15em;
              padding: 0;
              margin: 0;
              border: 0;
            }
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
      @media ${breakpoints.tablet} {
        font-size: 1.95em;
      }
      @media ${breakpoints.tabletSmall} {
        width: 100%;
        margin: 0;
        flex: 1;
      }
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
  @media ${breakpoints.tabletSmall} {
    flex-direction: column;
  }
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
      @media ${breakpoints.tabletSmall} {
        margin-bottom: 1.3em;
      }
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
      @media ${breakpoints.tabletSmall} {
        flex-basis: 100%;
        width: 72%;
      }
      @media ${breakpoints.mobile} {
        width: 100%;
      }
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
