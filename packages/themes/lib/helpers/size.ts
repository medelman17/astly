import {humanReadableFontSizes} from '../defaults/constants';
import {getObjectFromArrays} from '@astly/helpers';

export function getDefaultFontSizes(platform: 'android' | 'ios' | undefined) {
  if (!platform) {
    return [10, 13, 15, 17, 28, 34, 50];
  }

  if (platform === 'android') {
    return [12, 14, 16, 20, 24, 34, 56];
  }

  return [10, 13, 15, 17, 28, 34, 50];
}

export function getFontSizes({
  userTheme,
  astly,
}: {
  userTheme?: any;
  astly?: any;
}) {
  const {isNative} = astly;
  if (userTheme && userTheme.fontSizes) {
    return userTheme.fontSizes;
  }
  return getDefaultFontSizes(isNative ? astly.native.platform : undefined);
}

export function getSizeObject(size) {
  if (size) {
    return getObjectFromArrays(humanReadableFontSizes, size);
  }
}
