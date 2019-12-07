import React from 'react';
import {isNative} from '../helpers';
import defaultComponentMap from '../maps';
import Box from '../components/Box';
import withRoot from '../components/Root';
import {parseHtml} from '../parsers';

export function RenderTree({
  componentMap = defaultComponentMap,
  inspectNewChildren = c => c,
  theme = {},
  tree = `<div></div>`,
  ...props
}) {
  const [newChildren, setNewChildren] = React.useState(null);

  React.useEffect(() => {
    function makeNewChildren(components) {
      return isNative
        ? React.createElement(Box, props, [components.props.children])
        : React.createElement(Box, props, [components]);
    }
    parseHtml({components: componentMap, ...props}).process(
      tree,
      (err, file) => {
        if (err) {
          console.log('Error', err);
        } else {
          setNewChildren(makeNewChildren(file.contents));
        }
      },
    );
  }, [tree]);

  return <React.Fragment>{inspectNewChildren(newChildren)}</React.Fragment>;
}

export default RenderTree;
