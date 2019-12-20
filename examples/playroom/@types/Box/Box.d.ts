import {
  ColorProps,
  SpaceProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  FlexProps,
  BackgroundProps,
  BorderProps,
} from 'styled-system';
declare type BaseBoxProps = ColorProps &
  SpaceProps &
  LayoutProps &
  PositionProps &
  ShadowProps &
  FlexProps &
  BackgroundProps &
  BorderProps;
declare function Box(props: BaseBoxProps): JSX.Element;
export default Box;
