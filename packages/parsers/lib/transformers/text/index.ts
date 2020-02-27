import visit from 'unist-util-visit';
import {wrapImplicitParagraphs} from './wrapImplicitParagraphs';
import {AstlyParserOptions, AstlyTextTransformOptions} from 'lib/types';
import {isDomAvailable} from '@astly/helpers';

const handlers = [wrapImplicitParagraphs];

function handleText(props: AstlyParserOptions) {
  const options = getTextTransformOptions(props);

  return {
    plugins: handlers.map(handler => [handler, options]),
    settings: options,
  };
}

export {wrapImplicitParagraphs, handleText};

const defaultTextTransformOptions = {
  wrapImplicitParagraphs: isDomAvailable ? false : true,
};

function getTextTransformOptions({text, ...options}: AstlyParserOptions) {
  return {
    ...options,
    text: {
      ...defaultTextTransformOptions,
      ...text,
    },
  };
}
