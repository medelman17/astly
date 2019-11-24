import * as Variants from "./variants";
import { getColorsObject, getSizeObject, getSpaceObject } from "./helpers";
import merge from "deepmerge";

const defaultFontSizes = [11, 12, 13, 15, 16, 17, 20, 22, 34];
const defaultSpace = [0, 4, 8, 16, 32, 64];
const defaultColors = {
  pink: "hotpink",
  blue: "blue",
  red: "red",
  primary: "orangered"
};

export function createTheme(props = {}) {
  const colors = props.colors
    ? merge(defaultColors, props.colors)
    : defaultColors;
  const fontSizes = props.sizes ? props.sizes : defaultFontSizes;
  const space = props.space ? props.space : defaultSpace;

  return {
    colors: getColorsObject(colors),
    fontSizes: getSizeObject(fontSizes),
    space: getSpaceObject(space),
    text: Variants.getTextVariants({ fontSizes, space }),
    box: Variants.getBoxVariants({}),
    table: Variants.getTableVariants({ colors })
  };
}
