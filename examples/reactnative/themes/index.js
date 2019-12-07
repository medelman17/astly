import themeOne from './themeOne';
import themeTwo from './themeTwo';

const defaultFontSizes = [11, 12, 13, 15, 16, 17, 20, 22, 34];
const defaultSpace = [0, 2, 4, 8, 12, 16, 24, 32, 40, 48];

export const t1 = {
  fontSizes: defaultFontSizes,
  space: defaultSpace,
  ...themeOne,
};

export const t2 = {
  fontSizes: defaultFontSizes,
  space: defaultSpace,
  ...themeTwo,
};
