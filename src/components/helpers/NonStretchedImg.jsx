import React from 'react';
import Img from 'gatsby-image';

export const NonStretchedImg = (props) => {
  let normalizedProps = props;
  if (props.fluid && props.fluid.presentationWidth) {
    normalizedProps = {
      ...props,
      style: {
        ...(props.style || {}),
        maxWidth: '80%',
        width: '80%',
        maxHeight: '300px',
        margin: '0 auto', // Used to center the image
      },
    };
  }

  return <Img {...normalizedProps} />;
};
