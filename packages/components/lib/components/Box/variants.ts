import {variant} from 'styled-system';

export type BoxVariants = 'normal';

const BoxVariants = variant({
  scale: 'box',
  variants: {
    normal: {},
  },
});

export default BoxVariants;
