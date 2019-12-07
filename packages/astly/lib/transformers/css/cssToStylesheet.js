'use strict';

import visit from 'unist-util-visit';
import postcss from 'postcss';
import transform from 'css-to-react-native';
import {isNative} from '../../helpers';

export {cssToStyleSheet};

function cssToStyleSheet(props) {
  return transformer;

  function transformer(tree, file) {
    file.data.styles = {};
    visit(tree, 'element', visitor);
    function visitor(node, index, parent) {
      const {
        tagName,
        properties: {style},
      } = node;
      if (isNative && tagName === 'style') {
        const rawCss = node.children[0].value;
        const root = postcss.parse(rawCss);
        const map = handleCssParsing(root);
        for (let key in map) {
          const conformedKey = conformKey(key);
          file.data.styles[conformedKey] = transform(map[key]);
        }
      }
      if (isNative && node.properties.style !== undefined) {
        const root = postcss.parse(style);
        const map = handleCssParsing(root);
        const {style: cleanedStyles} = map;
        node.properties.style = transform(cleanedStyles);
      }
    }
  }
}

function conformKey(key) {
  return key.replace('.', '');
}

function handleCssParsing(root) {
  const map = {};
  parseCssNodes(root);
  return map;
  function parseCssNodes(node) {
    const {nodes: children} = node;
    if (children && children.length > 0) {
      children.map(parseCssNodes);
    }
    if (node.type === 'decl') {
      const key = getStyleKey(node);
      if (!map[key]) {
        map[key] = [];
      }
      map[key].push([node.prop, node.value]);
    }
  }
}

function getStyleKey(node) {
  const {selector} = node.parent;
  return selector !== undefined ? selector : 'style';
}
