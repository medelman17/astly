import {correctLinkHandlers} from './correctLinkHandlers';
import {AstlyParserOptions} from 'lib/types';

const handlers = [correctLinkHandlers];

function handleLinks(props: AstlyParserOptions) {
  return {
    plugins: handlers.map(handler => [handler, props]),
    settings: props,
  };
}

export {correctLinkHandlers, handleLinks};
