"use strict";

import visit from "unist-util-visit";
import { isNative } from "../../helpers";
import is from "hast-util-is-element";
import has from "hast-util-has-property";
import h from "hastscript";

export { wrapImplicitParagraphs };

function wrapImplicitParagraphs(props) {
  return transformer;

  function transformer(tree) {
    visit(tree, "text", visitor);
  }

  function visitor(node, index, parent) {
    // if (!isNative) {
    //   return;
    // }
    if (is(parent, ["div", "a"])) {
      const { properties } = parent;
      const newNode = h("span", properties, node.value);
      parent.children[index] = newNode;
    }
  }
}
