import {
  getColorsObject,
  getSizeObject,
  getSpaceObject,
  handleThemeMerge
} from "../helpers";
import * as Default from "../defaults";
import * as Variants from "../variants";

export function createTheme(userTheme = {}) {
  const {
    colors,
    space,
    fonts,
    fontSizes,
    text,
    box,
    table,
    buttons
  } = userTheme;

  const themeValues = {
    colors: handleThemeMerge(Default.colors, colors),
    fontSizes: handleThemeMerge(Default.fontSizes, fontSizes),
    space: handleThemeMerge(Default.space, space),
    fonts: handleThemeMerge(Default.fonts, fonts)
  };

  const themeVariants = {
    text: Variants.getTextVariants({ ...themeValues }),
    box: Variants.getBoxVariants({ ...themeValues }),
    table: Variants.getTableVariants({ ...themeValues }),
    buttons: Variants.getButtonVariants({ ...themeValues })
  };

  return {
    colors: getColorsObject(themeValues.colors),
    fontSizes: getSizeObject(themeValues.fontSizes),
    space: getSpaceObject(themeValues.space),
    fonts: themeValues.fonts,
    text: handleThemeMerge(themeVariants.text, text),
    box: handleThemeMerge(themeVariants.box, box),
    table: handleThemeMerge(themeVariants.table, table),
    buttons: handleThemeMerge(themeVariants.buttons, buttons)
  };
}
