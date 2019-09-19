import React from "react";
import unified from "unified";
import toReact from "rehype-react";
import { isNative } from "../../helpers";
import defaultComponentMap from "../ComponentMap";
import { Box } from "../../components";
import parse from "rehype-parse";
import minifyWhitespace from "rehype-minify-whitespace";

const parseHtml = options =>
  unified()
    .data("settings", { fragment: true })
    .use(parse)
    .use(minifyWhitespace)
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
    isNative
      ? React.createElement(Box, props, [
          newChildren.contents.props.children[0]
        ])
      : React.createElement(Box, props, [newChildren.contents])
  );
}
