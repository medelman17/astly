import {flexbox, FlexboxProps} from '@styled-system/flexbox';
import {compose} from '@astly/helpers';

export type BaseFlexProps = FlexboxProps;

export const styles = compose(flexbox);
