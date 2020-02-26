import visit from 'unist-util-visit';
import {isDomAvailable} from '@astly/helpers';
import {AstlyHastNode, AstlyParserOptions} from '../../types';

export {correctSource};

function correctSource(props: AstlyParserOptions) {
  return transformer;

  function transformer(tree: AstlyHastNode) {
    visit(tree, 'element', visitor);
  }

  function visitor(node: AstlyHastNode, index: number, parent: AstlyHastNode) {
    const {
      tagName,
      properties: {src, srcSet},
    } = node;
    if (tagName !== 'img' || typeof src !== 'string' || isDomAvailable) {
      return;
    }
    node.properties.source = {};
    node.properties.source.uri = src;
    node.properties.src = undefined;
  }
}
