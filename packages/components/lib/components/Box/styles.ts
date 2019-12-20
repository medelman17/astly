import {
  color,
  ColorProps,
  space,
  SpaceProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  compose,
  shadow,
  ShadowProps,
  background,
  BackgroundProps,
  border,
  BorderProps,
} from 'styled-system';

export type BaseBoxProps = ColorProps &
  SpaceProps &
  LayoutProps &
  PositionProps &
  ShadowProps &
  BackgroundProps &
  BorderProps;

const styles = compose(
  color,
  space,
  layout,
  position,
  shadow,

  background,
  border,
);

export default styles;
