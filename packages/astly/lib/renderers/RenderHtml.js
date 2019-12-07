import React from 'react';
import {parseHtml} from '../parsers';
import defaultComponentMap from '../maps';
import Box from '../components/Box';
import withRoot from '../components/Root';

export function RenderHTML({
  componentMap,
  inspectNewChildren,
  theme,
  html,
  ...props
}) {
  const [newChildren, setNewChildren] = React.useState(null);
  const {astly} = props;

  React.useEffect(() => {
    function makeNewChildren(components) {
      return React.createElement(Box, props, [components]);
    }
    parseHtml({components: componentMap, astly, ...props}).process(
      html,
      (err, file) => {
        if (err) {
          console.log('Error', err);
        } else {
          setNewChildren(makeNewChildren(file.contents));
        }
      },
    );
  }, [html, astly]);

  return inspectNewChildren(newChildren);
}

RenderHTML.defaultProps = {
  componentMap: defaultComponentMap,
  inspectNewChildren: c => c,
  theme: {},
  html: `<div></div>`,
};

export default withRoot(RenderHTML);
