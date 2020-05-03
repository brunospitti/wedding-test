import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

import { breakpoints, fontFamilyTitle } from '../assets/globalStyles';

export const Godfathers = ({ godfathersImages, flowerImage, bridesMaidText }) => {
  return (
    <StyledGodfathers>
      <div className="images-holder">
        {godfathersImages.edges.map(({ node: { fluid } }, index) => {
          const isLast = index === godfathersImages.edges.length - 1;
          const fileName = fluid.originalName;
          const godfatherNameRaw = fileName.substring(
            fileName.lastIndexOf('-') + 1,
            fileName.lastIndexOf('.')
          );
          const godfatherName =
            godfatherNameRaw.charAt(0).toUpperCase() + godfatherNameRaw.slice(1);

          return (
            <div className="godfather-holder" key={fileName}>
              {isLast && <div id="maid-of-honor">{bridesMaidText}</div>}
              <div>
                <StyledGodfatherImage backgroundColor={`#a7ceca`} fluid={fluid} />
                <span>{godfatherName}</span>
              </div>
            </div>
          );
        })}
      </div>

      <StyledFlower fluid={flowerImage} id="flower-01" />
      <StyledFlower fluid={flowerImage} id="flower-02" />
      <StyledFlower fluid={flowerImage} id="flower-03" />
      <StyledFlower fluid={flowerImage} id="flower-04" />
    </StyledGodfathers>
  );
};

// styled components
const StyledGodfathers = styled.div`
  .images-holder {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    height: 650px;
    @media ${breakpoints.desktopExtraSmall} {
      height: 580px;
    }
    @media ${breakpoints.tabletSmall} {
      height: 940px;
    }
    @media ${breakpoints.mobile} {
      height: 900px;
    }
    @media ${breakpoints.mobileSmall} {
      height: 1550px;
    }
    .godfather-holder {
      text-align: center;
      width: calc(100% / 8);
      z-index: 9;
      &:last-child {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        #maid-of-honor {
          font-size: 2.5em;
          font-weight: 100;
          margin-right: 1em;
          font-family: ${fontFamilyTitle};
        }
      }
      @media ${breakpoints.tabletSmall} {
        width: 25%;
      }
      @media ${breakpoints.mobileSmall} {
        width: 50%;
      }
      span {
        margin-top: 0.5em;
        display: block;
      }
    }
  }
`;

const StyledGodfatherImage = styled(BackgroundImage)`
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  width: 130px;
  height: 150px;
  margin: 0 auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media ${breakpoints.desktopExtraSmall} {
    width: 110px;
    height: 125px;
  }
  @media ${breakpoints.mobile} {
    width: 100px;
    height: 115px;
  }
`;

const StyledFlower = styled(BackgroundImage)`
  position: absolute !important;
  display: block;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  &#flower-01 {
    left: -5%;
    top: 55%;
    width: 120px;
    height: 210px;
    opacity: 0.2 !important;
    transform: rotate(-20deg);
    @media ${breakpoints.tabletSmall} {
      bottom: 0;
    }
  }
  &#flower-02 {
    left: 34%;
    top: 32%;
    width: 140px;
    height: 270px;
    opacity: 0.05 !important;
    transform: rotate(-100deg);
    @media ${breakpoints.tabletSmall} {
      left: 24%;
    }
  }
  &#flower-03 {
    left: 70%;
    top: 28%;
    width: 100px;
    height: 160px;
    opacity: 0.1 !important;
    transform: rotate(100deg);
    @media ${breakpoints.tabletSmall} {
      left: 53%;
      top: 52%;
    }
  }
  &#flower-04 {
    right: -2%;
    top: 22%;
    width: 100px;
    height: 160px;
    opacity: 0.2 !important;
    transform: rotate(170deg);
  }
`;
