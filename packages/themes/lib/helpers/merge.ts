import merge from 'deepmerge';

export function handleThemeMerge(defaultProps, userProps) {
  if (!userProps) {
    return defaultProps;
  }
  return merge(defaultProps, userProps);
}
