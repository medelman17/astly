import React from 'react';
import Flex from './Flex';
import styled from 'styled-components';
import {isNative} from '../helpers';
import {
  flexbox,
  typography,
  compose,
  variant,
  color,
  layout,
} from 'styled-system';

export default function Button({children, ...props}) {
  return (
    <StyledButton {...props}>
      <Flex>{children}</Flex>
    </StyledButton>
  );
}

const styles = compose(flexbox, color, layout, typography);

const StyledButton = styled[isNative ? 'TouchableHighlight' : 'button']`
  ${variant({
    scale: 'buttons',
  })}
  ${styles}
`;

Button.defaultProps = {
  variant: 'primary',
};
