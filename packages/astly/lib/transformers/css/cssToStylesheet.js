'use strict';

import visit from 'unist-util-visit';
import postcss from 'postcss';
import transform from 'css-to-react-native';
import {isNative} from '../../helpers';
import variables from 'postcss-simple-vars';

export {cssToStyleSheet, processCSSVariables};

function processCSSVariables(props) {
  return function transformer(tree, file, next) {
    file.data.styles = {};
    let promises = [];
    visit(tree, {type: 'element', tagName: 'style'}, function(node) {
      const {tagName} = node;
      let promise = postcss([variables])
        .process(node.children[0].value)
        .then(res => {
          const root = postcss.parse(res.css);
          if (isNative) {
            const map = handleCssParsing(root);
            for (let key in map) {
              const conformedKey = conformKey(key);
              file.data.styles[conformedKey] = transform(map[key]);
            }
          } else {
            node.children[0].value = res.css;
          }
        });
      promises.push(promise);
    });
    Promise.all(promises).then(() => next(null, tree, file));
  };
}

function cssToStyleSheet(props) {
  return transformer;

  function transformer(tree, file) {
    visit(tree, 'element', visitor);
    function visitor(node, index, parent) {
      const {
        tagName,
        properties: {style},
      } = node;

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
    // console.log(JSON.stringify(node, null, 2));
    if (node.type === 'decl') {
      if (
        isNative &&
        node.parent &&
        node.parent.parent &&
        node.parent.parent.type === 'atrule'
      ) {
        return;
      }
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
