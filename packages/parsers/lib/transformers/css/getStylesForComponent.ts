import visit from 'unist-util-visit';

import {
  AstlyParserOptions,
  AstlyHastNode,
  AstlyHastVFile,
  Visitor,
} from '../../types';

export {getStylesForComponents};

function getStylesForComponents(props: AstlyParserOptions) {
  return transformer;

  function transformer(tree: AstlyHastNode, file: AstlyHastVFile) {
    const {styles} = file.data;

    const visitor: Visitor<AstlyHastNode> = (node, index, parent) => {
      const {
        tagName,
        properties: {src, srcSet, className, style},
      } = node;

      if (className) {
        let cStyles = {};
        className.forEach((c: string) => {
          const classStyles = styles[c];
          cStyles = {...cStyles, ...classStyles};
        });
        node.properties.style = {...style, ...cStyles};
      }
    };
    visit(tree, 'element', visitor);
  }
}
