"use strict";
import visit from "unist-util-visit";
import { wrapImplicitParagraphs } from "./wrapImplicitParagraphs";
import { isNative } from "../../helpers";

const handlers = [wrapImplicitParagraphs];

function handleText(props) {
  return {
    plugins: handlers.map(handler => [handler, props]),
    settings: props
  };
}

export { wrapImplicitParagraphs, handleText };
