type ReadableFontSize =
  | 'xxsmall'
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge';

type ReadableHues =
  | 'xxxlight'
  | 'xxlight'
  | 'xlight'
  | 'light'
  | 'normal'
  | 'dark'
  | 'xdark'
  | 'xxdark'
  | 'xxxdark';

export const humanReadableSizes = [
  'none',
  'xxsmall',
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  'xxlarge',
];

export const humanReadableFontSizes: ReadableFontSize[] = [
  'xxsmall',
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  'xxlarge',
];

export const humanReadableHues: ReadableHues[] = [
  'xxxlight',
  'xxlight',
  'xlight',
  'light',
  'normal',
  'dark',
  'xdark',
  'xxdark',
  'xxxdark',
];
