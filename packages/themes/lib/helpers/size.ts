import {humanReadableHues} from '../defaults/constants';
import {getObjectFromArrays} from '@astly/helpers';

export function getSizeObject(size) {
  if (size) {
    return getObjectFromArrays(humanReadableHues, size);
  }
}
