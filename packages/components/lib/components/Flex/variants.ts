import {variant} from 'styled-system';

export type FlexVariants = 'column' | 'row';

const FlexVariants = variant({
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

export default FlexVariants;
