import visit from 'unist-util-visit';
import {wrapImplicitParagraphs} from './wrapImplicitParagraphs';
import {AstlyParserOptions} from 'lib/types';

const handlers = [wrapImplicitParagraphs];

function handleText(props: AstlyParserOptions) {
  return {
    plugins: handlers.map(handler => [handler, props]),
    settings: props,
  };
}

export {wrapImplicitParagraphs, handleText};
