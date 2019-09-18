import React from "react";
import unified from "unified";
import toReact from "rehype-react";
import { isNative } from "../../helpers";
import defaultComponentMap from "../ComponentMap";
import { useTree } from "../MakeTree";

export function RenderTree({
  componentMap = defaultComponentMap,
  tree,
  inspectNewChildren = i => i,
  ...props
}) {
  const { parseHtml } = useTree();
  const [newChildren, makeChildren] = React.useState(null);

  if (!tree) {
    console.warn("You forgot to supply a tree to RenderTree");
  }

  React.useEffect(() => {
    parseHtml({ components: componentMap }).process(tree, (err, file) => {
      if (err) {
        console.log(err);
      } else {
        makeChildren(file);
      }
    });
  }, [componentMap, parseHtml, makeChildren, tree]);

  return inspectNewChildren(newChildren);
}
