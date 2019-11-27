'use strict';

import visit from 'unist-util-visit';
import postcss from 'postcss';
import transform from 'css-to-react-native';
import {isNative} from '../../helpers';

export {cleanInlineStyles};

function cleanInlineStyles(props) {
  return transformer;

  function transformer(tree, file) {
    file.data.styles = {};
    visit(tree, 'element', visitor);
    function visitor(node, index, parent) {
      const {
        tagName,
        properties: {style},
      } = node;
      if (isNative && style !== undefined) {
        const root = postcss.parse(style);
        const map = handleCssParsing(root);
        const {style: cleanedStyles} = map;
        node.properties.style = transform(cleanedStyles);

        // const rawCss = node.children[0].value;
        // const root = postcss.parse(rawCss);
        // const map = handleCssParsing(root);
        // for (let key in map) {
        //   const conformedKey = conformKey(key);
        //   file.data.styles[conformedKey] = transform(map[key]);
        // }
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
      const key = node.parent.selector || 'style';
      if (!map[key]) {
        map[key] = [];
      }
      map[key].push([node.prop, node.value]);
    }
  }
}
