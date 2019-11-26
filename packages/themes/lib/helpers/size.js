import { getObject, humanReadableSizes } from "./";

export function getSizeObject(space) {
  if (space) {
    return getObject(humanReadableSizes, space);
  }
}
