import React from 'react';
import unified from 'unified';
import toReact from 'rehype-react';
import parse from 'rehype-parse';
import minifyWhitespace from 'rehype-minify-whitespace';
import {AstlyHtmlParserOptions} from './types';

import {
  handleStyleTags,
  handleImages,
  handleLinks,
  handleText,
} from './transformers';

export const parseHtml = (options: AstlyHtmlParserOptions) =>
  unified()
    .use(parse)
    .use(handleStyleTags(options))
    .use(handleImages(options))
    .use(handleText(options))
    .use(handleLinks(options))
    .use(minifyWhitespace)
    .use(toReact, {
      components: options.components,
      Fragment: React.Fragment,
      createElement: React.createElement,
    })
    .data('settings', {fragment: true});
