"use strict";

import visit from "unist-util-visit";
import { isNative } from "../../helpers";

export { correctSource };

function correctSource(props) {
  return transformer;

  function transformer(tree) {
    visit(tree, "element", visitor);
  }

  function visitor(node, index, parent) {
    const {
      tagName,
      properties: { src, srcSet }
    } = node;
    if (tagName !== "img" || typeof src !== "string") {
      return;
    }

    node.properties.src = src;
    console.log(node, parent);
    return node;
  }
}
