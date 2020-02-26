import * as React from 'react';
import {styles, BaseBoxProps} from './styles';
import {boxVariants as variants, BoxVariants} from './variants';
import {boxModifiers as modifiers, BoxModifiers} from './modifiers';
/*#if _NATIVE
import styled from 'styled-components/native'
const isNative = true; 
//#else */
import styled from 'styled-components';
const isNative = false;
//#endif

export type AstlyBoxProps = {
  children: React.ReactNode;
  style?: string | object;
  variant?: BoxVariants;
  modifiers?: BoxModifiers;
};

export type BoxProps = BaseBoxProps & AstlyBoxProps;

export const Box: React.FunctionComponent<BoxProps> = (props: BoxProps) => {
  return <StyledBox {...props} />;
};

//@ts-ignore
const StyledBox: React.FunctionComponent<BoxProps> = styled[
  //@ts-ignore
  isNative ? 'View' : 'div'
]<BoxProps>`
  ${variants};
  ${modifiers};
  ${styles};
`;
