import React from 'react';
import Flex from './Flex';
import {styled} from '../styled';
import {isNative} from '../helpers';
import {flexbox, compose, variant} from 'styled-system';

export default function Button({children, ...props}) {
  return (
    <StyledButton {...props}>
      <React.Fragment>{children}</React.Fragment>
    </StyledButton>
  );
}

const styles = compose(flexbox);

const StyledButton = styled[isNative ? 'TouchableHighlight' : 'button']`
  ${variant({
    scale: 'buttons',
  })}
  ${styles}
`;

Button.defaultProps = {
  variant: 'primary',
};
