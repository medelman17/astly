import { getObject, humanReadableSizes } from "./";

export function getSpaceObject(space) {
  if (space) {
    return getObject(humanReadableSizes, space);
  }
}
