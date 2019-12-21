import * as React from 'react';
import styled from 'styled-components';
import {isDomAvailable} from '@astly/helpers';
import styles, {BaseTextProps} from './styles';
import variants, {TextVariants} from './variants';
import modifiers, {TextModifiers} from './modifiers';
import cleanTextProps from '../../cleaners/cleanTextProps';

export type AstlyTextProps = {
  children: React.ReactNode;
  style?: string | object;
  variant?: TextVariants;
  modifiers: TextModifiers;
};

export type TextProps = BaseTextProps & AstlyTextProps;

export function Text(props: TextProps) {
  return <StyledText {...cleanTextProps(props)}>{props.children}</StyledText>;
}
//@ts-ignore
const StyledText: React.FunctionComponent<TextProps> = styled[
  //@ts-ignore
  isDomAvailable ? 'span' : 'Text'
]<TextProps>`
  ${variants};
  ${modifiers};
  ${styles};
`;
