import * as React from 'react';
import styled from 'styled-components';
import {isDomAvailable} from '@astly/helpers';
import styles, {BaseBoxProps} from './styles';
import variants, {BoxVariants} from './variants';
import modifiers, {BoxModifiers} from './modifiers';

export type AstlyBoxProps = {
  children: React.ReactNode;
  style?: string | object;
  variant?: BoxVariants;
  modifiers: BoxModifiers;
};

export type BoxProps = BaseBoxProps & AstlyBoxProps;

function Box(props: BoxProps) {
  return <StyledBox {...props} />;
}

const StyledBox: React.FunctionComponent<BoxProps> = styled[
  isDomAvailable ? 'div' : 'View'
]<BoxProps>`
  ${variants};
  ${modifiers};
  ${styles};
`;

export default Box;
