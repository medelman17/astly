import {darken, lighten} from 'polished';
import pluralize from 'pluralize';
import {humanReadableHues} from '../defaults/constants';
import {getObjectFromArrays} from '@astly/helpers';

const materialColors = {
  blackPrimary: 'rgba(0,0,0,0.87)',
  blackSecondary: 'rgba(0,0,0,0.54)',
  blackTertiary: 'rgba(0,0,0,0.38)',
  whitePrimary: 'rgba(255,255,255,1)',
  whiteSecondary: 'rgba(255,255,255,0.70)',
  whiteTertiary: 'rgba(255,255,255,0.50)',
};
const iOSColors = {
  red: '#FF3B30',
  orange: '#FF9500',
  yellow: '#FFCC00',
  green: '#4CD964',
  tealBlue: '#5AC8FA',
  blue: '#007AFF',
  purple: '#5856D6',
  pink: '#FF2D55',

  white: '#FFFFFF',
  customGray: '#EFEFF4',
  lightGray: '#E5E5EA',
  lightGray2: '#D1D1D6',
  midGray: '#C7C7CC',
  gray: '#8E8E93',
  black: '#000000',
};

export function getDefaultColors(platform: 'android' | 'ios' | undefined) {
  let colors: object = {
    ...iOSColors,
    ...materialColors,
    primary: iOSColors.blue,
    secondary: iOSColors.green,
    text: materialColors.blackPrimary,
  };
  if (!platform) {
    return colors;
  }
  if (platform === 'android') {
    colors = {
      ...iOSColors,
      ...materialColors,
      primary: iOSColors.blue,
      secondary: iOSColors.green,
      text: materialColors.blackPrimary,
    };
  } else if (platform === 'ios') {
    colors = {
      ...iOSColors,
      primary: iOSColors.blue,
      secondary: iOSColors.green,
      text: iOSColors.black,
    };
  }
  return colors;
}

export function getColors({userTheme, astly}: {userTheme?: any; astly?: any}) {
  const {isNative} = astly;
  const defaultColors = getDefaultColors(
    isNative ? astly.native.platform : undefined,
  );

  if (userTheme && userTheme.colors) {
    return Object.assign(defaultColors, userTheme.colors);
  }
  return defaultColors;
}

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
    darken(0.4, color),
  ];
}

export function getColorsObject(colors) {
  const map = {};
  const keys = Object.keys(colors);
  keys.forEach(key => {
    map[key] = colors[key];
    map[pluralize(key)] = getObjectFromArrays(
      humanReadableHues,
      getColorsArray(colors[key]),
    );
  });
  return map;
}
