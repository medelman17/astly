import {variant} from 'styled-system';

export type TextVariants = 'normal';

const textVariants = variant({
  scale: 'text',
  variants: {
    normal: {},
  },
});

export default textVariants;
