'use strict';

import visit from 'unist-util-visit';
import {isNative} from '../../helpers';

export {getMediaType};

function getMediaType(props) {
  return transformer;

  function transformer(tree) {
    visit(tree, 'element', visitor);
  }

  function visitor(node, index, parent) {
    const {
      tagName,
      properties: {astly},
    } = node;
    if (tagName === 'img') {
      node.properties.astly = {...astly, mediaType: 'image', type: 'media'};
    } else if (tagName === 'video') {
      node.properties.astly = {...astly, mediaType: 'video', type: 'media'};
    } else if (tagName === 'audio') {
      node.properties.astly = {...astly, mediaType: 'audio', type: 'media'};
    } else if (tagName === 'figure') {
      node.properties.astly = {...astly, mediaType: 'image', type: 'media'};
    }
  }
}
