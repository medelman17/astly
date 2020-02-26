import {humanReadableSizes} from '../defaults/constants';
import {getObjectFromArrays} from '@astly/helpers';

export function getDefaultSpace(platform: 'android' | 'ios' | undefined) {
  if (!platform) {
    return [0, 4, 8, 16, 32, 64];
  }
  return [0, 4, 8, 16, 32, 64];
}

export function getSpace({userTheme, astly}: {userTheme?: any; astly?: any}) {
  const {isNative} = astly;
  if (userTheme && userTheme.space) {
    return userTheme.space;
  }
  return getDefaultSpace(isNative ? astly.native.platform : undefined);
}

export function getSpaceObject(space) {
  if (space) {
    return getObjectFromArrays(humanReadableSizes, space);
  }
}
