import {variant} from 'styled-system';

export type FlexVariants = 'column' | 'row';

export const flexVariants = variant({
  variants: {
    row: {
      display: 'flex',
      flexDirection: 'row',
    },
    column: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
});
