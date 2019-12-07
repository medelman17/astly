'use strict';

import visit from 'unist-util-visit';
import {isNative} from '../../helpers';

export {correctSource};

function correctSource(props) {
  return transformer;

  function transformer(tree) {
    visit(tree, 'element', visitor);
  }

  function visitor(node, index, parent) {
    const {
      tagName,
      properties: {src, srcSet},
    } = node;
    if (tagName !== 'img' || typeof src !== 'string' || !isNative) {
      return;
    }
    node.properties.source = {};
    node.properties.source.uri = src;
    node.properties.src = undefined;
  }
}
