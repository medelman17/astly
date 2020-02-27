import visit from 'unist-util-visit';
import {AstlyHastNode, AstlyParserOptions} from '../../types';

export {dataAttributesToProps};

function dataAttributesToProps(props: AstlyParserOptions) {
  const {
    html: {
      transformDataAttributesToProps,
      transformDataAttributesToPropsElements,
    },
  } = props;

  return transformer;

  function transformer(tree: AstlyHastNode) {
    visit(tree, 'element', visitor);
  }

  function visitor(node: AstlyHastNode) {
    if (!transformDataAttributesToProps) {
      const map: {[index: string]: string} = {};
      const {properties} = node;
      Object.keys(properties).forEach(key => {
        if (!key.startsWith('data')) {
          map[key] = properties[key];
        }
      });
      node.properties = map;
    } else if (typeof transformDataAttributesToPropsElements !== 'undefined') {
      const {tagName} = node;
      if (!transformDataAttributesToPropsElements.includes(tagName)) {
        const map: {[index: string]: string} = {};
        const {properties} = node;
        Object.keys(properties).forEach(key => {
          if (!key.startsWith('data')) {
            map[key] = properties[key];
          }
        });
        node.properties = map;
      }
    }
  }
}
