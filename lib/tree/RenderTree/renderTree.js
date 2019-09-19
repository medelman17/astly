import React from "react";
import unified from "unified";
import toReact from "rehype-react";
import { isNative } from "../../helpers";
import defaultComponentMap from "../ComponentMap";
import { Box } from "../../components";
import parse from "rehype-parse";
import minifyWhitespace from "rehype-minify-whitespace";
import is from "hast-util-is-element";
import has from "hast-util-has-property";

import visit from "unist-util-visit";

function logger(props) {
  const { tools } = props;
  return transformer;

  function transformer(tree) {
    visit(tree, "element", function(node) {
      if (is(node, "a") && !has(node, "onClick")) {
        node.properties[isNative ? "onPress" : "onClick"] = e => {
          e.preventDefault();
          if (tools && tools.navigate && typeof tools.navigate === "function") {
            tools.navigate(node, { isNative });
          }
        };
      }
    });
  }
}

const parseHtml = options =>
  unified()
    .use(parse)
    .use(logger, options)
    .use(minifyWhitespace)
    .use(toReact, {
      components: options.components || defaultComponentMap,
      createElement: React.createElement
    })
    .data("settings", { fragment: true });

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
