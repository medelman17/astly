import React from 'react';

import {
  space,
  color,
  layout,
  compose,
  flexbox,
  background,
  border,
  variant,
} from 'styled-system';

import {styled} from '../styled';
import {isNative} from '../helpers';
import Box from './Box';

export default function Media({children, ...props}) {
  const defaultProps = isNative
    ? getNativeDefaultProps()
    : getWebDefaultProps();

  return <StyledMedia {...defaultProps} {...props} />;
}

const styles = compose(space, layout, color, flexbox, border, background);

const StyledMedia = styled[isNative ? 'Image' : 'img']`
  ${variant({
    scale: 'media',
    variants: {
      normal: {},
    },
  })}
  ${styles}
`;

Box.defaultProps = {
  variant: 'normal',
};

function getNativeDefaultProps() {
  return {
    style: {width: '100%', height: 300},
    resizeMode: 'cover',
    variant: 'normal',
  };
}

function getWebDefaultProps() {
  return {
    style: {width: '100%'},
    variant: 'normal',
  };
}
