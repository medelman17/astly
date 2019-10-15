import React from "react";
import { styled } from "../../styled";
import { isNative } from "../../helpers";

export function Media({ children, ...props }) {
  return <StyImage {...props}>{children}</StyImage>;
}

const StyImage = styled[isNative ? "Image" : "img"]``;
