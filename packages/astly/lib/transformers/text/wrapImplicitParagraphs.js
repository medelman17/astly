"use strict";

import visit from "unist-util-visit";
import { isNative } from "../../helpers";
import is from "hast-util-is-element";
// import has from "hast-util-has-property";
import h from "hastscript";

const TAGS_TO_WRAP = ["div", "a", "td", "th", "li", "section", "button"];

export { wrapImplicitParagraphs };

function wrapImplicitParagraphs(props) {
  return transformer;

  function transformer(tree) {
    visit(tree, "text", visitor);
  }

  function visitor(node, index, parent) {
    if (!isNative) {
      return;
    }
    if (is(parent, TAGS_TO_WRAP)) {
      const { properties } = parent;
      const newNode = h("span", properties, node.value);
      parent.children[index] = newNode;
    }
  }
}
