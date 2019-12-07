import React from 'react';
import {space, color, compose, typography, variant} from 'styled-system';
import styled from 'styled-components';
import {isNative} from '../helpers';

export default function Text({children, ...props}) {
  let {style} = props;

  if (style && typeof style === 'object') {
    for (let key in style) {
      const val = style[key];
      if (typeof val === 'string') {
        const m = val.match(numberRe);
        if (m !== null) {
          style[key] = parseInt(m[0]);
        }
      }
    }
  }

  return <StyledText {...props}>{children}</StyledText>;
}

const styles = compose(color, typography, space);

const numberRe = /^([+-]?(?:\d*\.)?\d+(?:e[+-]?\d+)?)$/i;

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
