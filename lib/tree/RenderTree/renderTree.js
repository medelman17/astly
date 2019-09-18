import React from "react";
import unified from "unified";
import toReact from "rehype-react";
import { isNative } from "../../helpers";
import defaultComponentMap from "../ComponentMap";
import { useTree } from "../MakeTree";
import { Box } from "../../components";
import parse from "rehype-parse";

const parseHtml = options =>
  unified()
    .use(parse)
    .use(toReact, {
      components: options.components || defaultComponentMap,
      createElement: React.createElement
    });

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
    parseHtml({ components: componentMap }).process(tree, (err, file) => {
      if (err) {
        console.log("Error", err);
      } else {
        makeChildren(file);
      }
    });
  }, [componentMap, parseHtml, makeChildren, tree]);

  if (newChildren === null) {
    return <></>;
  }

  return inspectNewChildren(
    React.createElement(Box, props, [newChildren.contents])
  );
}
