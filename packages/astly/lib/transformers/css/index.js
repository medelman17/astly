"use strict";
import visit from "unist-util-visit";
import { cssToStyleSheet } from "./cssToStylesheet";
import { getStylesForComponents } from "./getStylesForComponent";
import { isNative } from "../../helpers";

const handlers = [cssToStyleSheet, getStylesForComponents];

function handleStyleTags(props) {
  return {
    plugins: handlers.map(handler => [handler, props]),
    settings: props
  };
}

export { cssToStyleSheet, handleStyleTags };
