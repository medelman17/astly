import React from 'react';
import {
  space,
  color,
  layout,
  typography,
  position,
  shadow,
  compose,
  flexbox,
  background,
  border,
  variant,
  system,
} from 'styled-system';
import {styled} from '../styled';
import {isNative} from '../helpers';

export default function Box({children, ...props}) {
  return <StyledBox {...props}>{children}</StyledBox>;
}

const styles = compose(
  space,
  layout,
  color,
  flexbox,
  border,
  background,
  typography,
  position,
  shadow,
);

// const elevation = system({
//   prop: 'elevation',
//   cssProperty: 'boxShadow',
//   scale: 'shadows',
// });

const StyledBox = styled[isNative ? 'View' : 'div']`
  ${variant({
    scale: 'box',
    variants: {
      normal: {},
    },
  })}
  ${styles}
`;

Box.defaultProps = {
  variant: 'normal',
};
