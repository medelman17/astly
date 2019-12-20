import {humanReadableHues} from '../defaults/constants';
import {getObjectFromArrays} from '@astly/helpers';

export function getSpaceObject(space) {
  if (space) {
    return getObjectFromArrays(humanReadableHues, space);
  }
}
