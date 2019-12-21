import * as React from 'react';
import styled from 'styled-components';
import {isDomAvailable} from '@astly/helpers';
import {styles, BaseBoxProps} from './styles';
import {boxVariants as variants, BoxVariants} from './variants';
import {boxModifiers as modifiers, BoxModifiers} from './modifiers';

export type AstlyBoxProps = {
  children: React.ReactNode;
  style?: string | object;
  variant?: BoxVariants;
  modifiers?: BoxModifiers;
};

export type BoxProps = BaseBoxProps & AstlyBoxProps & typeof defaultProps;
const defaultProps = {
  variant: 'normal',
};

export function Box(props: BoxProps) {
  return <StyledBox {...props} />;
}
//@ts-ignore
const StyledBox: React.FunctionComponent<BoxProps> = styled[
  //@ts-ignore
  isDomAvailable ? 'div' : 'View'
]<BoxProps>`
  ${variants};
  ${modifiers};
  ${styles};
`;

Box.defaultProps = defaultProps;
