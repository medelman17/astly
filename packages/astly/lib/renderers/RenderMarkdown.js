import React from 'react';
import {parseMarkdown} from '../parsers';
import defaultComponentMap from '../maps';
import Box from '../components/Box';
import withRoot from '../components/Root';

export function RenderMarkdown({
  componentMap,
  inspectNewChildren,
  theme,
  markdown,
  ...props
}) {
  const [newChildren, setNewChildren] = React.useState(null);
  const {astly} = props;

  React.useEffect(() => {
    function makeNewChildren(components) {
      return React.createElement(Box, props, [components]);
    }
    parseMarkdown({components: componentMap, astly, ...props}).process(
      markdown,
      (err, file) => {
        if (err) {
          console.log('Error', err);
        } else {
          console.log(file);
          setNewChildren(makeNewChildren(file.contents));
        }
      },
    );
  }, [markdown, astly]);

  return inspectNewChildren(newChildren);
}

RenderMarkdown.defaultProps = {
  componentMap: defaultComponentMap,
  inspectNewChildren: c => c,
  theme: {},
  markdown: `# This is an H1. `,
};

export default withRoot(RenderMarkdown);
