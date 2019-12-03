import {
  getColorsObject,
  getSizeObject,
  getSpaceObject,
  handleThemeMerge,
} from '../helpers';
import * as Default from '../defaults';
import * as Variants from '../variants';

export function createTheme(userTheme) {
  const {
    colors,
    space,
    fonts,
    fontSizes,
    text,
    box,
    table,
    buttons,
  } = userTheme;

  const themeValues = {
    colors: handleThemeMerge(Default.colors, userTheme.colors),
    fontSizes: userTheme.fontSizes ? userTheme.fontSizes : Default.fontSizes,
    space: userTheme.space ? userTheme.space : Default.space,
    fonts: handleThemeMerge(Default.fonts, userTheme.fonts),
  };

  const themeVariants = {
    text: Variants.getTextVariants({...themeValues}),
    box: Variants.getBoxVariants({...themeValues}),
    table: Variants.getTableVariants({...themeValues}),
    buttons: Variants.getButtonVariants({...themeValues}),
  };

  return {
    colors: getColorsObject(themeValues.colors),
    fontSizes: getSizeObject(themeValues.fontSizes),
    space: getSpaceObject(themeValues.space),
    fonts: themeValues.fonts,
    text: {...themeVariants.text, ...text},
    box: {...themeVariants.box, ...box},
    table: {...themeVariants.table, ...table},
    buttons: {...themeVariants.buttons, ...buttons},
  };
}
