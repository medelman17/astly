'use strict';

import visit from 'unist-util-visit';
import {isNative} from '../../helpers';
import is from 'hast-util-is-element';
import has from 'hast-util-has-property';

export {correctLinkHandlers};

function correctLinkHandlers(props) {
  const {tools} = props;
  return transformer;

  function transformer(tree) {
    visit(tree, 'element', visitor);
  }

  function visitor(node, index, parent) {
    if (is(node, 'button')) {
      node.properties[isNative ? 'onPress' : 'onClick'] = e => {
        e.preventDefault();

        // if (tools && tools.navigate && typeof tools.navigate === "function") {
        //   tools.navigate(node, { isNative });
        // }
      };
    }
    if (is(node, 'a') && !has(node, 'onClick')) {
      node.properties[isNative ? 'onPress' : 'onClick'] = e => {
        e.preventDefault();
        if (tools && tools.navigate && typeof tools.navigate === 'function') {
          tools.navigate(node, {isNative});
        }
      };
    }
  }
}
