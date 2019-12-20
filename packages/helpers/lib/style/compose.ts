import {createParser} from '@styled-system/core';

export const compose = (...parsers) => {
  let config = {};
  parsers.forEach(parser => {
    if (!parser || !parser.config) return;
    Object.assign(config, parser.config);
  });
  const parser = createParser(config);

  return parser;
};
