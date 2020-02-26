import visit from 'unist-util-visit';
import {isDomAvailable} from '@astly/helpers';
import is from 'hast-util-is-element';
// import has from "hast-util-has-property";
import h from 'hastscript';
import {AstlyHastNode, AstlyParserOptions} from '../../types';

const TAGS_TO_WRAP = [
  'div',
  'a',
  'td',
  'th',
  'li',
  'section',
  'button',
  'heading',
  'paragraph',
  'root',
  'text',
];

export {wrapImplicitParagraphs};

function wrapImplicitParagraphs(props: AstlyParserOptions) {
  return transformer;

  function transformer(tree: AstlyHastNode) {
    visit(tree, 'text', visitor);
  }

  function visitor(node: AstlyHastNode, index: number, parent: AstlyHastNode) {
    if (isDomAvailable) {
      return;
    }

    if (parent && is(parent, TAGS_TO_WRAP)) {
      const {properties} = parent;
      const newNode = h('span', properties, node.value);
      parent.children[index] = newNode;
    }
  }
}
