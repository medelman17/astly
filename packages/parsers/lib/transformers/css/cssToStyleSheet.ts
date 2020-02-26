import visit from 'unist-util-visit';
import postcss, {AcceptedPlugin} from 'postcss';
import transform from 'css-to-react-native';
import {isDomAvailable} from '@astly/helpers';
import variables from 'postcss-simple-vars';
import {
  AstlyHastNode,
  AstlyParserOptions,
  AstlyHastVFile,
  Visitor,
  Root,
} from '../../types';

export {cssToStyleSheet, processCSSVariables};

function processCSSVariables(props: AstlyParserOptions) {
  return function transformer(
    tree: AstlyHastNode,
    file: AstlyHastVFile,
    next: (a: any, tree: AstlyHastNode, file: AstlyHastVFile) => void,
  ) {
    file.data.styles = {};
    let promises: Promise<any>[] = [];
    visit(tree, {type: 'element', tagName: 'style'}, function(
      node: AstlyHastNode,
    ) {
      const {tagName} = node;
      let promise = postcss([variables as AcceptedPlugin])
        .process(node.children[0].value)
        .then(res => {
          const root = postcss.parse(res.css);
          if (!isDomAvailable) {
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

function cssToStyleSheet(props: AstlyParserOptions) {
  return transformer;

  function transformer(tree: AstlyHastNode, file: AstlyHastVFile) {
    const visitor: Visitor<AstlyHastNode> = (node, index, parent) => {
      const {
        tagName,
        properties: {style},
      } = node;

      if (!isDomAvailable && node.properties.style !== undefined) {
        const root = postcss.parse(style);
        const map = handleCssParsing(root);
        const {style: cleanedStyles} = map;
        node.properties.style = transform(cleanedStyles);
      }
    };
    visit(tree, 'element', visitor);
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
      children.map(parseCssNodes);
    }
    // console.log(JSON.stringify(node, null, 2));
    if (node.type === 'decl') {
      if (
        !isDomAvailable &&
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

function getStyleKey(node: AstlyHastNode): string {
  const {selector} = node.parent;
  return selector !== undefined ? (selector as string) : 'style';
}
