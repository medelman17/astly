import React from "react";
import { styled } from "../../styled";
import { isNative } from "../../helpers";

export function Touchable({ children, ...props }) {
  return <StyTouchable {...props}>{children}</StyTouchable>;
}

const StyTouchable = styled[isNative ? "TouchableOpacity" : "a"]``;
