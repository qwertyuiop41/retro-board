import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function Image({ src, ...rest }) {
  return <GatsbyImage image={src} {...rest} />;
}
