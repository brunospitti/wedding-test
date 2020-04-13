import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { fontFamilyTitle } from '../assets/globalStyles';
import { NonStretchedImg } from './helpers/NonStretchedImg';
export const PhotosCarousel = ({ images }) => {
  return (
    <StyledCarousel>
      <Carousel
        swipeScrollTolerance={1}
        swipeable
        emulateTouch
        infiniteLoop
        centerMode
        centerSlidePercentage={50}
        showArrows={true}
        showStatus={false}
        showThumbs={false}
      >
        {images.edges.map((image) => (
          <NonStretchedImg fluid={image.node.fluid} />
        ))}
      </Carousel>
    </StyledCarousel>
  );
};

// styled components
const StyledCarousel = styled.div`
  margin: 7em 0;
  .carousel-root {
    &:before {
      content: '';
      display: block;
      position: absolute;
      width: 70%;
      height: 120%;
      margin: -17% 16%;
      background-image: url('/img/flower-decoration.png');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
    .carousel {
      .slider {
        height: 600px;
        align-items: center;
        .slide {
          background: transparent;
          .gatsby-image-wrapper {
            transition: all 0.25s ease;
          }
          &.selected {
            .gatsby-image-wrapper {
              border: 6px solid #cccccc;
              height: 500px !important;
              max-height: 500px !important;
              width: 100% !important;
              max-width: 100% !important;
            }
          }
        }
      }
      .control-dots {
        background: rgba(255, 255, 255, 0.6);
        width: auto;
        width: 575px;
        padding: 10px;
        margin: auto;
        position: relative;
        .dot {
          background: #2a5854;
          box-shadow: none;
          &.selected {
            width: 12px;
            height: 12px;
            margin-bottom: -2px;
          }
        }
      }
      .control-prev.control-arrow:before {
        border-right-width: 12px;
      }
      .control-next.control-arrow:before {
        border-left-width: 12px;
      }
      &.carousel-slider .control-arrow {
        opacity: 1;
        &:hover {
          background: rgba(214, 158, 180, 0.31);
        }
      }
    }
  }
`;
