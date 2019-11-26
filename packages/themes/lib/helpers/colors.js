import { darken, lighten } from "polished";
import pluralize from "pluralize";
import { humanReadableHues } from "./constants";
import { getObject } from "./generics";

export function getColorsArray(color) {
  return [
    lighten(0.4, color),
    lighten(0.3, color),
    lighten(0.2, color),
    lighten(0.1, color),
    color,
    darken(0.1, color),
    darken(0.2, color),
    darken(0.3, color),
    darken(0.4, color)
  ];
}

export function getColorsObject(colors) {
  const map = {};
  const keys = Object.keys(colors);
  keys.forEach(key => {
    map[key] = colors[key];
    map[pluralize(key)] = getObject(
      humanReadableHues,
      getColorsArray(colors[key])
    );
  });
  return map;
}
