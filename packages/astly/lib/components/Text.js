import React from 'react';
import {space, color, compose, typography, variant} from 'styled-system';
import {styled} from '../styled';
import {isNative} from '../helpers';

export default function Text({children, ...props}) {
  return <StyledText {...props}>{children}</StyledText>;
}

const styles = compose(color, typography, space);

const StyledText = styled[isNative ? 'Text' : 'span']`
  ${variant({
    scale: 'text',
    variants: {
      normal: {},
    },
  })}
  ${variant({
    prop: 'modifier',
    variants: {
      italic: {
        fontStyle: 'italic',
      },
      bold: {
        fontWeight: 'bold',
      },
      underlined: {
        textDecoration: 'underline',
      },
      strike: {
        textDecoration: 'line-through',
      },
    },
  })}
  ${styles}
`;

Text.defaultProps = {
  variant: 'normal',
};
