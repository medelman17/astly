import * as React from 'react';
import {styles, BaseFlexProps} from './styles';
import {flexVariants as variants, FlexVariants} from './variants';
import {flexModifiers as modifiers, FlexModifiers} from './modifiers';
import {Box} from '../Box/Box';
import {useBrandedChildren} from '@astly/hooks';
/*#if _NATIVE
import styled from 'styled-components/native'
const isNative = true; 
//#else */
import styled from 'styled-components';
const isNative = false;
//#endif

export type AstlyFlexProps = {
  children: React.ReactNode;
  style?: string | object;
  variant?: FlexVariants;
  modifiers?: FlexModifiers;
};

export type FlexProps = BaseFlexProps & AstlyFlexProps & typeof defaultProps;
const defaultProps = {
  variant: isNative ? 'row' : 'column',
};

export function Flex(props: FlexProps) {
  const {children} = props;
  const taggedChildren = useBrandedChildren({children}, 'flex-item');

  return <StyledFlex {...props}>{taggedChildren}</StyledFlex>;
}

const StyledFlex: React.FunctionComponent<FlexProps> = styled(Box)<FlexProps>`
  ${variants}
  ${modifiers}
  ${styles}
`;

Flex.defaultProps = defaultProps;
