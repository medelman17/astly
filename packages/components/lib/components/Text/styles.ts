import {
  color,
  ColorProps,
  typography,
  TypographyProps,
  compose,
} from 'styled-system';

export type BaseTextProps = ColorProps & TypographyProps & {};

const styles = compose(color, typography);

export default styles;
