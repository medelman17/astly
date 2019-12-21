import {
  color,
  ColorProps,
  space,
  SpaceProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  background,
  BackgroundProps,
  border,
  BorderProps,
} from 'styled-system';
import {compose} from '@astly/helpers';

export type BaseBoxProps = ColorProps &
  SpaceProps &
  LayoutProps &
  PositionProps &
  ShadowProps &
  BackgroundProps &
  BorderProps;

export const styles = compose(
  color,
  space,
  layout,
  position,
  shadow,

  background,
  border,
);
