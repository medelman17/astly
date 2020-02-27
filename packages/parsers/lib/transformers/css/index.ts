import {PluggableList} from 'unified';
import {cssToStyleSheet, processCSSVariables} from './cssToStyleSheet';
import {getStylesForComponents} from './getStylesForComponent';
import {AstlyParserOptions} from '../../types';
const handlers = [processCSSVariables, cssToStyleSheet, getStylesForComponents];

function handleStyleTags(
  props: AstlyParserOptions,
): {plugins: PluggableList; settings: AstlyParserOptions} {
  return {
    plugins: handlers.map(handler => [handler, props]),
    settings: props,
  };
}

export {cssToStyleSheet, handleStyleTags};
