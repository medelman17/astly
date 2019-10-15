import React from "react";
import { isNative } from "../../helpers";
import defaultComponentMap from "../ComponentMap";
import { Box } from "../../components";
import { parseHtml } from "../../parser";

export function RenderTree({
  componentMap = defaultComponentMap,
  tree,
  inspectNewChildren = i => i,
  ...props
}) {
  const [newChildren, makeChildren] = React.useState(null);

  if (!tree) {
    console.warn("You forgot to supply a tree to RenderTree");
  }

  React.useEffect(() => {
    parseHtml({ components: componentMap, ...props }).process(
      tree,
      (err, file) => {
        if (err) {
          console.log("Error", err);
        } else {
          makeChildren(file);
        }
      }
    );
  }, [componentMap, parseHtml, makeChildren, tree]);

  if (newChildren === null) {
    return <></>;
  }

  return inspectNewChildren(
    isNative
      ? React.createElement(Box, props, [
          newChildren.contents.props.children[0]
        ])
      : React.createElement(Box, props, [newChildren.contents])
  );
}
