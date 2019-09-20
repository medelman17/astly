import { createElement } from "react";
import unified from "unified";
import toReact from "rehype-react";
import parse from "rehype-parse";
import minifyWhitespace from "rehype-minify-whitespace";

import { handleImages, handleText, handleLinks } from "../transformers";

export const parseHtml = options =>
  unified()
    .use(parse)
    .use(handleImages(options))
    .use(handleText(options))
    .use(handleLinks(options))
    .use(minifyWhitespace)
    .use(toReact, {
      components: options.components,
      createElement: createElement
    })
    .data("settings", { fragment: true });
