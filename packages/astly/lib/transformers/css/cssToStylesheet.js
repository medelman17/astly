"use strict";

import visit from "unist-util-visit";
import postcss from "postcss";
import transform from "css-to-react-native";
import { isNative } from "../../helpers";

export { cssToStyleSheet };

function cssToStyleSheet(props) {
  return transformer;

  function transformer(tree, file) {
    file.data.styles = {};
    visit(tree, "element", visitor);
    function visitor(node, index, parent) {
      const {
        tagName,
        properties: { src, srcSet }
      } = node;
      if (isNative && tagName === "style") {
        const rawCss = node.children[0].value;
        const root = postcss.parse(rawCss);
        const map = handleCssParsing(root);
        for (let key in map) {
          const conformedKey = conformKey(key);
          file.data.styles[conformedKey] = transform(map[key]);
        }
      }
    }
  }
}

function conformKey(key) {
  return key.replace(".", "");
}

function handleCssParsing(root) {
  const map = {};
  parseCssNodes(root);
  return map;
  function parseCssNodes(node) {
    const { nodes: children } = node;
    if (children && children.length > 0) {
      children.map(parseCssNodes);
    }
    if (node.type === "decl") {
      if (!map[node.parent.selector]) {
        map[node.parent.selector] = [];
      }
      map[node.parent.selector].push([node.prop, node.value]);
    }
  }
}
