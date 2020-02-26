import visit from 'unist-util-visit';
import postcss from 'postcss';
import transform from 'css-to-react-native';

import {
  AstlyHastNode,
  AstlyParserOptions,
  AstlyHastVFile,
  Visitor,
  Root,
} from '../../types';

export {cleanInlineStyles};

function cleanInlineStyles(props: AstlyParserOptions) {
  return transformer;

  function transformer(tree: AstlyHastNode, file: AstlyHastVFile) {
    const visitor: Visitor<AstlyHastNode> = (node, index, parent) => {
      const {tagName, properties} = node;
      const {style} = properties;
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
    };

    file.data.styles = visit(tree, 'element', visitor);
  }
}

function conformKey(key: string) {
  return key.replace('.', '');
}

function handleCssParsing(root: Root) {
  const map: {[index: string]: any} = {};
  parseCssNodes(root);
  return map;

  function parseCssNodes(
    node: ChildNode | Root | any,
    index?: number,
    parent?: ChildNode[],
  ) {
    const {nodes: children} = node;
    if (children && children.length > 0) {
      children.forEach(parseCssNodes);
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
