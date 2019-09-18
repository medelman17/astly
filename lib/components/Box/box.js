import React from "react";
import { styled } from "../../styled";
import { isNative } from "../../helpers";

export function Box({ children, ...props }) {
  return <StyBox {...props}>{children}</StyBox>;
}

const StyBox = styled[isNative ? "View" : "div"]``;
