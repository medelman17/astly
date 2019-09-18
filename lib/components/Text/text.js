import React from "react";
import { styled } from "../../styled";
import { isNative } from "../../helpers";

export function Text({ children, ...props }) {
  return <StyText {...props}>{children}</StyText>;
}

const StyText = styled[isNative ? "Text" : "p"]``;
