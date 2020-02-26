import visit from 'unist-util-visit';
import {isDomAvailable} from '@astly/helpers';
import is from 'hast-util-is-element';
import has from 'hast-util-has-property';
import {AstlyHtmlParserOptions, AstlyHastNode} from 'lib/types';

export {correctLinkHandlers};

function correctLinkHandlers(props: AstlyHtmlParserOptions) {
  const {tools} = props;
  return transformer;

  function transformer(tree: AstlyHastNode) {
    visit(tree, 'element', visitor);
  }

  function visitor(node: AstlyHastNode, index: number, parent: AstlyHastNode) {
    if (is(node, 'button')) {
      node.properties[!isDomAvailable ? 'onPress' : 'onClick'] = function(
        e: React.TouchEvent | React.MouseEvent,
      ) {
        e.preventDefault();
        if (tools && tools.onClick && typeof tools.onClick === 'function') {
          tools.onClick(node, {isNative: !isDomAvailable});
        }
      };
    }
    if (is(node, 'a') && !has(node, 'onClick')) {
      node.properties[!isDomAvailable ? 'onPress' : 'onClick'] = (
        e: React.TouchEvent | React.MouseEvent,
      ) => {
        e.preventDefault();
        if (tools && tools.navigate && typeof tools.navigate === 'function') {
          tools.navigate(node, {isNative: !isDomAvailable});
        }
      };
    }
  }
}

// function handleOnClick(obj) {
//   return Function('');
// }
