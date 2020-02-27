import * as React from 'react';
import styles, {BaseTextProps} from './styles';
import variants, {TextVariants} from './variants';
import modifiers, {TextModifiers} from './modifiers';
import cleanTextProps from '../../cleaners/cleanTextProps';
/*#if _NATIVE
import styled from 'styled-components/native'
const isNative = true; 
//#else */
import styled from 'styled-components';
const isNative = false;
//#endif

export type AstlyTextProps = {
  children: React.ReactNode;
  style?: string | object;
  /** string to format overall style of resulting Text component (e.g., 'h1', 'body', etc)*/
  variant?: TextVariants;
  /** string or array of strings to take fine-grained control of styled (e.g., 'strike', 'underline') */
  modifiers?: TextModifiers;
  as?: string;
};

export type TextProps = BaseTextProps & AstlyTextProps & typeof defaultProps;
const defaultProps = {
  variant: 'body',
};
export function Text(props: TextProps) {
  return <StyledText {...cleanTextProps(props)}>{props.children}</StyledText>;
}
//@ts-ignore
const StyledText: React.FunctionComponent<TextProps> = styled[
  //@ts-ignore
  isNative ? 'Text' : 'span'
]<TextProps>`
  ${variants};
  ${modifiers};
  ${styles};
`;

Text.defaultProps = defaultProps;
