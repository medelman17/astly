'use strict';
// import visit from 'unist-util-visit';
import {cssToStyleSheet, processCSSVariables} from './cssToStylesheet';
import {getStylesForComponents} from './getStylesForComponent';
// import {cleanInlineStyles} from './cleanInlineStyles';
// import {isNative} from '../../helpers';

const handlers = [processCSSVariables, cssToStyleSheet, getStylesForComponents];

function handleStyleTags(props) {
  return {
    plugins: handlers.map(handler => [handler, props]),
    settings: props,
  };
}

export {cssToStyleSheet, handleStyleTags};
