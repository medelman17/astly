"use strict";

import visit from "unist-util-visit";
import { correctLinkHandlers } from "./correctLinkHandlers";
import { isNative } from "../../helpers";

const handlers = [correctLinkHandlers];

function handleLinks(props) {
  return {
    plugins: handlers.map(handler => [handler, props]),
    settings: props
  };
}

export { correctLinkHandlers, handleLinks };
