"use strict";
import visit from "unist-util-visit";
import { correctSource } from "./correctSource";
import { isNative } from "../../helpers";

const handlers = [correctSource];

function handleImages(props) {
  return {
    plugins: handlers.map(handler => [handler, props]),
    settings: props
  };
}

export { correctSource, handleImages };
