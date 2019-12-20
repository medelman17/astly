import {getColorsObject} from './helpers/colors';
import {getSizeObject} from './helpers/size';
import {getSpaceObject} from './helpers/space';
import {handleThemeMerge} from './helpers/merge';
import * as Defaults from './defaults';
import {getBoxVariants} from './variants/box';
import {getButtonVariants} from './variants/buttons';
import {getTextVariants} from './variants/text';
import {getTableVariants} from './variants/table';

export function createTheme(userTheme) {
  const {
    colors,
    space,
    fonts,
    fontSizes,
    shadows,
    text,
    box,
    table,
    buttons,
  } = userTheme;

  const themeValues = {
    colors: handleThemeMerge(Defaults.colors, userTheme.colors),
    fontSizes: userTheme.fontSizes ? userTheme.fontSizes : Defaults.fontSizes,
    space: userTheme.space ? userTheme.space : Defaults.space,
    fonts: handleThemeMerge(Defaults.fonts, userTheme.fonts),
    shadows: userTheme.shadows ? userTheme.shadows : Defaults.shadows,
  };

  const themeVariants = {
    text: getTextVariants({...themeValues}),
    box: getBoxVariants({...themeValues}),
    table: getTableVariants({...themeValues}),
    buttons: getButtonVariants({...themeValues}),
  };

  return {
    colors: getColorsObject(themeValues.colors),
    fontSizes: getSizeObject(themeValues.fontSizes),
    space: getSpaceObject(themeValues.space),
    fonts: themeValues.fonts,
    shadows: themeValues.shadows,
    text: {...themeVariants.text, ...text},
    box: {...themeVariants.box, ...box},
    table: {...themeVariants.table, ...table},
    buttons: {...themeVariants.buttons, ...buttons},
  };
}
