import {layout, LayoutProps} from '@styled-system/layout';
import {color, ColorProps} from '@styled-system/color';
import {border, BorderProps} from '@styled-system/border';
import {background, BackgroundProps} from '@styled-system/background';
import {shadow, ShadowProps} from '@styled-system/shadow';
import {position, PositionProps} from '@styled-system/position';
import {space, SpaceProps} from '@styled-system/space';
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
