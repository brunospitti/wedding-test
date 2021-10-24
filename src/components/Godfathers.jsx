import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

import { breakpoints, fontFamilyTitle } from '../assets/globalStyles';


const getWidth = () => typeof window !== "undefined" ? (
  window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth) : undefined;

  function useCurrentWidth() {
    // save current window width in the state object
    let [width, setWidth] = useState(getWidth());

    // in this case useEffect will execute only once because
    // it does not have any dependencies.
    useEffect(() => {
      const resizeListener = () => {
        // change width from the state object
        setWidth(getWidth())
      };
      // set resize listener
      window.addEventListener('resize', resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener);
    }
  }, [])

  return width;
}

const separateByGender = images => {
  let men = [];
  let women = [];

  images.edges.map(({ node: { fluid } }, index) => {
    const fileName = fluid.originalName;
    const nameArray = fileName.split('-')

    const godfatherNameRaw = fileName.substring(
      fileName.lastIndexOf('-') + 1,
      fileName.lastIndexOf('.')
      );
      const godfatherName =
      godfatherNameRaw.charAt(0).toUpperCase() + godfatherNameRaw.slice(1);

      const isMan = nameArray[1] === 'bruno';

      const result = {fluid, godfatherName, fileName}

      isMan ? men.push(result) : women.push(result)
    })

    return {men,women}
  }

  const renderGodfathers = ({isTablet,isBrowser,godfathersImages}) => {
    const {men,women} = separateByGender(godfathersImages)

    const menImages = men.map(({fluid:menFluid,godfatherName: menGodfatherName,fileName:menFileName}) => {
      return (
        <div className="godfather-holder" key={menFileName}>
        <StyledGodfatherImage backgroundColor={`#a7ceca`} fluid={menFluid} />
        <span>{menGodfatherName}</span>
      </div>
    )
  })

  const womenImages = women.map(({fluid:womenFluid,godfatherName: womenGodfatherName,fileName:womenFileName}) => {
    return (
      <div className="godfather-holder" key={womenFileName}>
        <StyledGodfatherImage backgroundColor={`#a7ceca`} fluid={womenFluid} />
        <span>{womenGodfatherName}</span>
      </div>
    )
  })

  if(!isBrowser){ return null }

  return isTablet ? (
    <>
      {menImages}
      {womenImages}
    </>
  ) : (
    <>
      <div className="gender-holder men">
        {menImages}
      </div>

      <div className="gender-holder women">
        {womenImages}
      </div>
    </>
  )
}
export const Godfathers = ({
  godfathersImages,
  flowerImage,
  bridesMaidText,
  maidOfHonourFlower,
}) => {
  const width = useCurrentWidth()
  const isTablet = width <= 900;
  const isBrowser = typeof window !== "undefined"

  return (
    <StyledGodfathers>
      <div className="images-holder">
        {renderGodfathers({isTablet,isBrowser,godfathersImages})}
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
    justify-content: space-between;
    align-content: space-between;
    height: 650px;
    flex-direction:column;
    @media ${breakpoints.desktopExtraSmall} {
      height: 540px;
    }
    @media ${breakpoints.tabletSmall} {
      height: 940px;
      flex-direction: row;
    flex-wrap: wrap;
    }
    @media ${breakpoints.mobile} {
      height: 900px;
    }
    @media ${breakpoints.mobileSmall} {
      height: 1550px;
    }

    .gender-holder{
      display: flex;
      flex-wrap: wrap;
      &.men{
        .godfather-holder {
          width: calc(100% / 9);
        }
      }
      &.women{
        .godfather-holder {
          width: calc(100% / 7);
          &:last-child {
            width: 100%;
            margin-top: 50px;
          }
        }
      }
    }
    .godfather-holder {
      text-align: center;
      z-index: 9;
      @media ${breakpoints.tabletSmall} {
        width: 25% !important;
        &:last-child {
          width: 100% !important;
          margin-top: 50px;
        }
      }
      @media ${breakpoints.mobileSmall} {
        width: 50% !important;
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
  .men & {
    @media ${breakpoints.desktopExtraSmall} {
      width: 100px;
      height: 115px;
    }
  }
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
      top: 59%;
    }
    @media ${breakpoints.mobileSmall} {
      top: 81%;
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
      top: 40%;
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
      top: 61%;
    }
  }
  &#flower-04 {
    right: -2%;
    top: 22%;
    width: 100px;
    height: 160px;
    opacity: 0.2 !important;
    transform: rotate(170deg);
    @media ${breakpoints.mobileSmall} {
      top: 15%;
    }
  }
`;

const StyledFlower06 = styled(BackgroundImage)`
  position: absolute !important;
  display: block;
  height: 65px;
  width: 55px;
  left: 53%;
  bottom: 4%;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  @media ${breakpoints.mobileSmall} {
    left: 55%;
    bottom: 1%;
  }
`;
