import React from "react";
import { styled } from "../../styled";
import { isNative } from "../../helpers";
import { space, color, typography, compose } from "styled-system";

export function Touchable({ children, ...props }) {
  return <StyTouchable {...props}>{children}</StyTouchable>;
}
const styles = compose(
  color,
  typography,
  space
);

const StyTouchable = styled[isNative ? "TouchableOpacity" : "a"]`
  ${styles}
`;
