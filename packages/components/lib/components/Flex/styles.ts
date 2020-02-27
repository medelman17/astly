import {flexbox, FlexboxProps} from 'styled-system';
import {compose} from '@astly/helpers';

export type BaseFlexProps = FlexboxProps;

export const styles = compose(flexbox);
